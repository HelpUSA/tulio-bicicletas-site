// CadastrarProduto.jsx
// Versão completa com todos os campos visíveis, layout refinado, tooltips funcionais

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function CadastrarProduto() {
  const navigate = useNavigate();
  const [produto, setProduto] = useState({ name: '', description: '', price: '', stock: '', brand_id: '' });
  const [marcas, setMarcas] = useState([]);
  const [novasImagens, setNovasImagens] = useState([]);
  const [galeriaStorage, setGaleriaStorage] = useState([]);
  const [selecionadas, setSelecionadas] = useState([]);
  const [variantes, setVariantes] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagsSelecionadas, setTagsSelecionadas] = useState([]);
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState(false);

  useEffect(() => {
    async function carregarDados() {
      const { data: brand } = await supabase.from('brands').select();
      const { data: lista } = await supabase.storage.from('produtos').list('', { limit: 100 });
      const { data: t } = await supabase.from('tags').select();

      const imagensStorage = lista?.map((file) => ({
        nome: file.name,
        url: `https://nfiyjubkhqwpdyunngnp.supabase.co/storage/v1/object/public/produtos/${file.name}`
      })) || [];

      setMarcas(brand || []);
      setGaleriaStorage(imagensStorage);
      setTags(t || []);
    }
    carregarDados();
  }, []);

  const handleToggleSelecionada = (url) => {
    setSelecionadas((prev) => prev.includes(url) ? prev.filter((i) => i !== url) : [...prev, url]);
  };

  const toggleTag = (tagId) => {
    setTagsSelecionadas((prev) => prev.includes(tagId) ? prev.filter((id) => id !== tagId) : [...prev, tagId]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem('');
    setErro(false);

    try {
      const { data: sessionData } = await supabase.auth.getSession();
      const userId = sessionData?.session?.user?.id;
      if (!userId) throw new Error('Usuário não autenticado.');

      const { data: novoProduto, error } = await supabase.from('products').insert({
        name: produto.name,
        description: produto.description,
        price: parseFloat(produto.price),
        stock: parseInt(produto.stock),
        brand_id: produto.brand_id ? parseInt(produto.brand_id) : null,
        user_id: userId
      }).select().single();

      if (error) throw new Error('Erro ao cadastrar produto: ' + error.message);

      const produtoId = novoProduto.id;

      for (const file of novasImagens) {
        const nomeArquivo = file.name;
        const { data: arquivosExistentes } = await supabase.storage.from('produtos').list('', { search: nomeArquivo });
        const existe = arquivosExistentes?.some(f => f.name === nomeArquivo);
        let imagemUrl = `https://nfiyjubkhqwpdyunngnp.supabase.co/storage/v1/object/public/produtos/${nomeArquivo}`;

        if (!existe) {
          const { data: uploadData, error: uploadError } = await supabase.storage.from('produtos').upload(nomeArquivo, file);
          if (uploadError) throw new Error('Erro ao subir imagem: ' + uploadError.message);
          imagemUrl = `https://nfiyjubkhqwpdyunngnp.supabase.co/storage/v1/object/public/produtos/${uploadData.path}`;
        }

        await supabase.from('product_images').insert({ product_id: produtoId, url: imagemUrl, alt: produto.name, user_id: userId });
      }

      for (const url of selecionadas) {
        await supabase.from('product_images').insert({ product_id: produtoId, url, alt: produto.name, user_id: userId });
      }

      for (const v of variantes) {
        if (v.variant_name && v.variant_value) {
          await supabase.from('product_variants').insert({
            product_id: produtoId,
            variant_name: v.variant_name,
            variant_value: v.variant_value,
            user_id: userId
          });
        }
      }

      for (const tagId of tagsSelecionadas) {
        await supabase.from('product_tags').insert({ product_id: produtoId, tag_id: tagId, user_id: userId });
      }

      setMensagem('✅ Produto cadastrado com sucesso.');
      setProduto({ name: '', description: '', price: '', stock: '', brand_id: '' });
      setNovasImagens([]);
      setSelecionadas([]);
      setVariantes([]);
      setTagsSelecionadas([]);

      setTimeout(() => navigate('/admin'), 2000);
    } catch (err) {
      setErro(true);
      setMensagem('❌ ' + err.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Cadastrar Novo Produto</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        <div>
          <label className="block text-sm font-medium text-gray-700">Nome do Produto <span title="Nome do produto exibido na loja." className="ml-1 text-blue-500 cursor-help">ⓘ</span></label>
          <input value={produto.name} onChange={(e) => setProduto({ ...produto, name: e.target.value })} className="border p-2 rounded w-full" required />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Descrição <span title="Descrição completa do produto." className="ml-1 text-blue-500 cursor-help">ⓘ</span></label>
          <textarea value={produto.description} onChange={(e) => setProduto({ ...produto, description: e.target.value })} className="border p-2 rounded w-full" rows={4} required />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Preço (R$) <span title="Valor de venda ao público." className="ml-1 text-blue-500 cursor-help">ⓘ</span></label>
          <input type="number" value={produto.price} onChange={(e) => setProduto({ ...produto, price: e.target.value })} className="border p-2 rounded w-full" required />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Estoque <span title="Quantidade disponível para venda." className="ml-1 text-blue-500 cursor-help">ⓘ</span></label>
          <input type="number" value={produto.stock} onChange={(e) => setProduto({ ...produto, stock: e.target.value })} className="border p-2 rounded w-full" required />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Marca <span title="Fabricante ou marca do produto." className="ml-1 text-blue-500 cursor-help">ⓘ</span></label>
          <select value={produto.brand_id} onChange={(e) => setProduto({ ...produto, brand_id: e.target.value })} className="border p-2 rounded w-full" required>
            <option value="">Selecione a Marca</option>
            {marcas.map((m) => <option key={m.id} value={m.id}>{m.name}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Variações <span title="Ex: cor, tamanho, capacidade." className="ml-1 text-blue-500 cursor-help">ⓘ</span></label>
          {variantes.map((v, index) => (
            <div key={index} className="grid grid-cols-2 gap-2 mb-2">
              <input type="text" placeholder="Nome (ex: Cor)" value={v.variant_name} onChange={(e) => {
                const clone = [...variantes];
                clone[index].variant_name = e.target.value;
                setVariantes(clone);
              }} className="border px-2 py-1 rounded" />
              <input type="text" placeholder="Valor (ex: Vermelha)" value={v.variant_value} onChange={(e) => {
                const clone = [...variantes];
                clone[index].variant_value = e.target.value;
                setVariantes(clone);
              }} className="border px-2 py-1 rounded" />
            </div>
          ))}
          <button type="button" onClick={() => setVariantes([...variantes, { variant_name: '', variant_value: '' }])} className="text-blue-600 text-sm">+ Adicionar Variação</button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tags <span title="Palavras-chave associadas ao produto." className="ml-1 text-blue-500 cursor-help">ⓘ</span></label>
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <label key={tag.id} className="flex items-center gap-1 text-sm border rounded px-2 py-1 cursor-pointer">
                <input type="checkbox" checked={tagsSelecionadas.includes(tag.id)} onChange={() => toggleTag(tag.id)} />
                {tag.name}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Adicionar novas imagens <span title="Imagens do produto enviadas pelo computador." className="ml-1 text-blue-500 cursor-help">ⓘ</span></label>
          <input type="file" accept="image/*" multiple onChange={(e) => setNovasImagens(Array.from(e.target.files))} />
          <div className="mt-2 flex gap-2 flex-wrap">
            {novasImagens.map((file, index) => (
              <div key={index} className="w-24">
                <img src={URL.createObjectURL(file)} alt={`preview-${index}`} className="rounded w-full h-auto" />
              </div>
            ))}
          </div>
        </div>

        {galeriaStorage.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Selecionar imagens do storage <span title="Imagens previamente armazenadas na galeria do sistema." className="ml-1 text-blue-500 cursor-help">ⓘ</span></label>
            <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto border p-2 rounded">
              {galeriaStorage.map((img) => (
                <div key={img.url} className={`relative border rounded p-1 cursor-pointer ${selecionadas.includes(img.url) ? 'border-green-600' : 'border-gray-300'}`} onClick={() => handleToggleSelecionada(img.url)}>
                  <img src={img.url} alt={img.nome} className="h-20 w-20 object-cover rounded" />
                  {selecionadas.includes(img.url) && (
                    <span className="absolute top-0 right-0 text-xs bg-green-600 text-white px-1 rounded-bl">✔</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Cadastrar Produto
        </button>

        {mensagem && (
          <p className={`text-center text-sm mt-2 ${erro ? 'text-red-600' : 'text-green-600'}`}>{mensagem}</p>
        )}
      </form>
    </div>
  );
}
