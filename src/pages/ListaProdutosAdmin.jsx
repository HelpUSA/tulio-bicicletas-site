// ListaProdutosAdmin.jsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import usePermissoes from '../hooks/usePermissoes';

export default function ListaProdutosAdmin() {
  const [produtos, setProdutos] = useState([]);
  const [busca, setBusca] = useState('');
  const [carregandoProdutos, setCarregandoProdutos] = useState(true);
  const navigate = useNavigate();

  const { permissoes, carregando } = usePermissoes();

  useEffect(() => {
    if (!carregando && permissoes?.can_view_products) {
      carregarProdutos();
    }
  }, [carregando, permissoes]);

  const carregarProdutos = async () => {
    setCarregandoProdutos(true);
    const { data: session } = await supabase.auth.getUser();
    const userId = session?.user?.id;

    if (!userId) {
      alert('Usuário não autenticado.');
      return;
    }

    let query = supabase
      .from('products')
      .select('id, name, price, stock')
      .order('name');

    if (permissoes?.role_name === 'cliente') {
      query = query.eq('user_id', userId);
    }

    const { data, error } = await query;

    if (error) {
      alert('Erro ao carregar produtos: ' + error.message);
    } else {
      setProdutos(data || []);
    }
    setCarregandoProdutos(false);
  };

  const handleExcluir = async (id) => {
    if (window.confirm('Deseja realmente excluir este produto e todos os dados associados?')) {
      try {
        await supabase.from('product_images').delete().eq('product_id', id);
        await supabase.from('product_variants').delete().eq('product_id', id);
        await supabase.from('product_categories').delete().eq('product_id', id);
        await supabase.from('product_tags').delete().eq('product_id', id);
        const { error } = await supabase.from('products').delete().eq('id', id);
        if (error) throw error;

        carregarProdutos();
      } catch (err) {
        alert('Erro ao excluir produto: ' + err.message);
      }
    }
  };

  const normalizar = (str) =>
    str?.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  const produtosFiltrados = produtos.filter((p) =>
    normalizar(p.name).includes(normalizar(busca))
  );

  if (carregando || carregandoProdutos) {
    return <p className="text-center mt-10">Carregando...</p>;
  }

  if (!permissoes?.can_view_products) {
    return <p className="text-center mt-10 text-red-600">❌ Acesso negado.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Produtos Cadastrados</h2>
        <Link
          to="/admin/cadastrar"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Novo Produto
        </Link>
      </div>

      <input
        type="text"
        placeholder="Buscar por nome..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="w-full mb-4 border px-3 py-2 rounded"
      />

      {produtosFiltrados.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <div className="max-h-[360px] overflow-y-auto border rounded">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-left sticky top-0 z-10">
              <tr>
                <th className="p-2">Nome</th>
                <th className="p-2">Preço</th>
                <th className="p-2">Estoque</th>
                <th className="p-2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {produtosFiltrados.slice(0, 10).map((produto) => (
                <tr key={produto.id} className="border-t hover:bg-gray-50">
                  <td className="p-2">{produto.name}</td>
                  <td className="p-2">R$ {parseFloat(produto.price).toFixed(2)}</td>
                  <td className="p-2">{produto.stock}</td>
                  <td className="p-2 flex gap-2">
                    <button
                      onClick={() => navigate(`/admin/editar/${produto.id}`)}
                      className="text-blue-600 hover:underline"
                    >
                      Alterar
                    </button>
                    <button
                      onClick={() => handleExcluir(produto.id)}
                      className="text-red-600 hover:underline"
                    >
                      Excluir
                    </button>
                    <button
                      onClick={() => window.print()}
                      className="text-gray-600 hover:underline"
                    >
                      Imprimir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
