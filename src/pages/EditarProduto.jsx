import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function EditarProduto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [produto, setProduto] = useState(null);
  const [categorias, setCategorias] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [imagens, setImagens] = useState([]);
  const [novasImagens, setNovasImagens] = useState([]);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    async function carregarDados() {
      const { data: p } = await supabase.from('products').select().eq('id', id).single();
      const { data: cat } = await supabase.from('categories').select();
      const { data: brand } = await supabase.from('brands').select();
      const { data: imgs } = await supabase.from('product_images').select().eq('product_id', id);

      console.log('Imagens carregadas:', imgs); // ✅ para debug

      setProduto(p);
      setCategorias(cat);
      setMarcas(brand);
      setImagens(imgs || []);
    }

    carregarDados();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setMensagem('');

    try {
      await supabase.from('products').update({
        name: produto.name,
        description: produto.description,
        price: parseFloat(produto.price),
        stock: parseInt(produto.stock),
        brand_id: produto.brand_id
      }).eq('id', id);

      for (let file of novasImagens) {
        const nomeArquivo = `${Date.now()}-${file.name}`;
        const { data, error } = await supabase.storage.from('produtos').upload(nomeArquivo, file);
        if (!error) {
          const url = `https://nfiyjubkhqwpdyunngnp.supabase.co/storage/v1/object/public/produtos/${data.path}`;
          await supabase.from('product_images').insert([{ product_id: id, url, alt: produto.name }]);
        }
      }

      setMensagem('✅ Produto atualizado com sucesso.');
      setNovasImagens([]);
    } catch (err) {
      console.error(err);
      setMensagem('❌ Erro ao atualizar produto.');
    }
  };

  const handleDeleteImagem = async (url) => {
    const confirm = window.confirm('Deseja excluir esta imagem?');
    if (!confirm) return;

    const path = url.split('/produtos/')[1];
    if (path) {
      await supabase.storage.from('produtos').remove([path]);
    }

    await supabase.from('product_images').delete().eq('url', url);
    setImagens(imagens.filter((img) => img.url !== url));
  };

  if (!produto) return <p className="text-center mt-10">Carregando...</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Editar Produto</h2>

      <form onSubmit={handleUpdate} className="flex flex-col gap-4">
        <input
          value={produto.name}
          onChange={(e) => setProduto({ ...produto, name: e.target.value })}
          className="border p-2 rounded"
          placeholder="Nome"
        />
        <textarea
          value={produto.description}
          onChange={(e) => setProduto({ ...produto, description: e.target.value })}
          className="border p-2 rounded"
          placeholder="Descrição"
        />
        <input
          type="number"
          value={produto.price}
          onChange={(e) => setProduto({ ...produto, price: e.target.value })}
          className="border p-2 rounded"
          placeholder="Preço"
        />
        <input
          type="number"
          value={produto.stock}
          onChange={(e) => setProduto({ ...produto, stock: e.target.value })}
          className="border p-2 rounded"
          placeholder="Estoque"
        />

        <select
          value={produto.brand_id}
          onChange={(e) => setProduto({ ...produto, brand_id: e.target.value })}
          className="border p-2 rounded"
        >
          <option value="">Selecione a Marca</option>
          {marcas.map((m) => (
            <option key={m.id} value={m.id}>{m.name}</option>
          ))}
        </select>

        <label className="font-semibold">Imagens atuais:</label>
        <div className="flex flex-wrap gap-4">
          {imagens.map((img) => (
            <div key={img.url} className="relative w-24">
              <img src={img.url} alt={img.alt} className="rounded w-full h-auto" />
              <button
                type="button"
                onClick={() => handleDeleteImagem(img.url)}
                className="absolute top-0 right-0 bg-red-600 text-white rounded px-1"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <label className="font-semibold">Adicionar novas imagens:</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setNovasImagens((prev) => [...prev, ...e.target.files])}
        />

        {novasImagens.length > 0 && (
          <div>
            <label className="font-semibold">Pré-visualização:</label>
            <div className="flex gap-4 flex-wrap">
              {novasImagens.map((file, index) => (
                <div key={index} className="w-24">
                  <img src={URL.createObjectURL(file)} alt={`preview-${index}`} className="rounded w-full h-auto" />
                </div>
              ))}
            </div>
          </div>
        )}

        {mensagem && <p className="text-center text-sm text-green-600">{mensagem}</p>}

        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Salvar Alterações
        </button>
      </form>
    </div>
  );
}
