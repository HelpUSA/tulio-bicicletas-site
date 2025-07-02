import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Admin() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [estoque, setEstoque] = useState('');
  const [imagem, setImagem] = useState(null);
  const [categorias, setCategorias] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [categoriaId, setCategoriaId] = useState('');
  const [marcaId, setMarcaId] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    async function carregarDados() {
      const { data: cats } = await supabase.from('categories').select();
      const { data: brands } = await supabase.from('brands').select();
      setCategorias(cats || []);
      setMarcas(brands || []);
    }
    carregarDados();
  }, []);

  const handleUploadImagem = async (file) => {
    const nomeArquivo = `${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage.from('produtos').upload(nomeArquivo, file);
    if (error) throw error;
    return data.path;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem('');
    setCarregando(true);

    if (!imagem) {
      setMensagem('Envie uma imagem.');
      setCarregando(false);
      return;
    }

    try {
      const path = await handleUploadImagem(imagem);
      const url = `https://nfiyjubkhqwpdyunngnp.supabase.co/storage/v1/object/public/produtos/${path}`;

      const { data: produto, error: erroProduto } = await supabase
        .from('products')
        .insert([
          {
            name: nome,
            description: descricao,
            price: parseFloat(preco),
            stock: parseInt(estoque),
            brand_id: marcaId,
          },
        ])
        .select()
        .single();

      if (erroProduto) throw erroProduto;

      await supabase
        .from('product_categories')
        .insert([{ product_id: produto.id, category_id: categoriaId }]);

      await supabase
        .from('product_images')
        .insert([{ product_id: produto.id, url, alt: nome }]);

      setMensagem('✅ Produto cadastrado com sucesso!');
      setNome('');
      setDescricao('');
      setPreco('');
      setEstoque('');
      setImagem(null);
      setCategoriaId('');
      setMarcaId('');
    } catch (err) {
      setMensagem(`❌ Erro: ${err.message}`);
    }

    setCarregando(false);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow mt-10">
      <h2 className="text-xl font-bold mb-4">Cadastrar Produto</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          className="border p-2 rounded"
          step="0.01"
          required
        />
        <input
          type="number"
          placeholder="Estoque"
          value={estoque}
          onChange={(e) => setEstoque(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <select
          value={categoriaId}
          onChange={(e) => setCategoriaId(e.target.value)}
          className="border p-2 rounded"
          required
        >
          <option value="">Selecione a categoria</option>
          {categorias.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <select
          value={marcaId}
          onChange={(e) => setMarcaId(e.target.value)}
          className="border p-2 rounded"
          required
        >
          <option value="">Selecione a marca</option>
          {marcas.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name}
            </option>
          ))}
        </select>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImagem(e.target.files[0])}
          className="border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={carregando}
        >
          {carregando ? 'Cadastrando...' : 'Cadastrar Produto'}
        </button>
        {mensagem && <p className="text-center mt-2">{mensagem}</p>}
      </form>
    </div>
  );
}
