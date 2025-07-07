// ListaProdutosAdmin.jsx
// Lista todos os produtos do usuário logado com opção de alterar, excluir e imprimir

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function ListaProdutosAdmin() {
  const [produtos, setProdutos] = useState([]);
  const [busca, setBusca] = useState('');
  const [carregando, setCarregando] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    carregarProdutos();
  }, []);

  const carregarProdutos = async () => {
    setCarregando(true);
    const { data: session } = await supabase.auth.getUser();
    const userId = session?.user?.id;

    if (!userId) {
      alert('Usuário não autenticado.');
      return;
    }

    const { data, error } = await supabase
      .from('products')
      .select('id, name, price, stock')
      .eq('user_id', userId)
      .order('name');

    if (error) {
      alert('Erro ao carregar produtos: ' + error.message);
    } else {
      setProdutos(data || []);
    }
    setCarregando(false);
  };

  const handleExcluir = async (id) => {
    if (window.confirm('Deseja realmente excluir este produto e todos os dados associados?')) {
      try {
        // Exclui dados relacionados
        await supabase.from('product_images').delete().eq('product_id', id);
        await supabase.from('product_variants').delete().eq('product_id', id);
        await supabase.from('product_categories').delete().eq('product_id', id);
        await supabase.from('product_tags').delete().eq('product_id', id);

        // Exclui o produto
        const { error } = await supabase.from('products').delete().eq('id', id);
        if (error) throw error;

        carregarProdutos();
      } catch (err) {
        alert('Erro ao excluir produto: ' + err.message);
      }
    }
  };

  const produtosFiltrados = produtos.filter((p) =>
    p.name.toLowerCase().includes(busca.toLowerCase())
  );

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

      {carregando ? (
        <p>Carregando produtos...</p>
      ) : produtosFiltrados.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <table className="w-full text-sm border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2">Nome</th>
              <th className="p-2">Preço</th>
              <th className="p-2">Estoque</th>
              <th className="p-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtosFiltrados.map((produto) => (
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
      )}
    </div>
  );
}
