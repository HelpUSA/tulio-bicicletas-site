import { useState, useEffect } from 'react';
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

  useEffect(() => {
    async function carregarDados() {
      const { data: cats } = await supabase.from('categories').select();
      const { data: brands } = await supabase.from('brands').select();
      setCategorias(cats);
      setMarcas(brands);
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

    if (!imagem) return setMensagem('Envie uma imagem.');

    try {
      const path = await handleUploadImagem(imagem);
      const url = `https://nfiyjubkhqwpdyunngnp.supabase.co/storage/v1/object/public/produtos/${path}`;

      const { data: produto, error } = await supabase
        .from('products')
        .insert([{ name: nome, description: descricao, price: preco, stock: estoque, brand_id: marcaId }])
        .select()
        .single();

      if (error) throw error;

      await supabase.from('product_categories').insert([{ product_id: produto.id, category_id: categoriaId }]);
      await supabase.from('product_images').insert([{ product_id: produto.id, url, alt: nome }]);

      setMensagem('Produto cadastrado com sucesso!');
      setNome(''); setDescricao(''); setPreco(''); setEstoque('');
    } catch (err) {
      setMensagem(`Erro: ${err.message}`);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Cadastrar Produto</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} className="mb-2 w-full border p-2" required />
        <textarea placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)} className="mb-2 w-full border p-2" required />
        <input type="number" placeholder="Preço" value={preco} onChange={e => setPreco(e.target.value)} className="mb-2 w-full border p-2" required />
        <input type="number" placeholder="Estoque" value={estoque} onChange={e => setEstoque(e.target.value)} className="mb-2 w-full border p-2" required />

        <select value={categoriaId} onChange={e => setCategoriaId(e.target.value)} className="mb-2 w-full border p-2" required>
          <option value="">Selecione a categoria</option>
          {categorias.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
        </select>

        <select value={marcaId} onChange={e => setMarcaId(e.target.value)} className="mb-2 w-full border p-2" required>
          <option value="">Selecione a marca</option>
          {marcas.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
        </select>

        <input type="file" accept="image/*" onChange={e => setImagem(e.target.files[0])} className="mb-4" required />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Cadastrar</button>
        {mensagem && <p className="mt-4 text-center">{mensagem}</p>}
      </form>
    </div>
  );
}
