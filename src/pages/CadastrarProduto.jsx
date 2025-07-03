import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function CadastrarProduto() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [estoque, setEstoque] = useState('');
  const [categoriaId, setCategoriaId] = useState('');
  const [marcaId, setMarcaId] = useState('');
  const [imagens, setImagens] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    async function carregarDados() {
      const { data: cats } = await supabase.from('categories').select();
      const { data: brands } = await supabase.from('brands').select();
      setCategorias(cats || []);
      setMarcas(brands || []);
    }
    carregarDados();
  }, []);

  const uploadImagens = async (produtoId) => {
    const urls = [];
    for (const file of imagens) {
      const nomeArquivo = `${Date.now()}-${file.name}`;
      const { data, error } = await supabase.storage.from('produtos').upload(nomeArquivo, file);
      if (!error) {
        const url = `https://nfiyjubkhqwpdyunngnp.supabase.co/storage/v1/object/public/produtos/${data.path}`;
        urls.push(url);
        await supabase.from('product_images').insert({ product_id: produtoId, url, alt: nome });
      }
    }
    return urls;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem('');

    try {
      const { data: produto, error } = await supabase
        .from('products')
        .insert([{ name: nome, description: descricao, price: preco, stock: estoque, brand_id: marcaId }])
        .select()
        .single();

      if (error) throw error;

      await supabase.from('product_categories').insert({ product_id: produto.id, category_id: categoriaId });
      await uploadImagens(produto.id);

      setMensagem('Produto cadastrado com sucesso!');
      setNome(''); setDescricao(''); setPreco(''); setEstoque(''); setCategoriaId(''); setMarcaId(''); setImagens([]);
    } catch (err) {
      setMensagem(`Erro: ${err.message}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Cadastrar Produto</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} className="border px-3 py-2 rounded" required />
        <textarea placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} className="border px-3 py-2 rounded" required rows={4} />
        <input type="number" placeholder="Preço" value={preco} onChange={(e) => setPreco(e.target.value)} className="border px-3 py-2 rounded" required />
        <input type="number" placeholder="Estoque" value={estoque} onChange={(e) => setEstoque(e.target.value)} className="border px-3 py-2 rounded" required />

        <select value={categoriaId} onChange={(e) => setCategoriaId(e.target.value)} className="border px-3 py-2 rounded" required>
          <option value="">Selecione a categoria</option>
          {categorias.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
        </select>

        <select value={marcaId} onChange={(e) => setMarcaId(e.target.value)} className="border px-3 py-2 rounded" required>
          <option value="">Selecione a marca</option>
          {marcas.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
        </select>

        <input type="file" multiple accept="image/*" onChange={(e) => setImagens([...e.target.files])} className="mb-2" required />

        {/* Preview */}
        <div className="flex gap-2 flex-wrap">
          {imagens.map((img, idx) => (
            <img key={idx} src={URL.createObjectURL(img)} alt={`preview-${idx}`} className="h-20 rounded border" />
          ))}
        </div>

        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Cadastrar Produto
        </button>
        {mensagem && <p className="text-center text-sm mt-2">{mensagem}</p>}
      </form>
    </div>
  );
}
