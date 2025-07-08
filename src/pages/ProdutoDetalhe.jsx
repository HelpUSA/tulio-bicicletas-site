// ProdutoDetalhe.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { FaWhatsapp, FaShoppingCart } from 'react-icons/fa';
import '../styles/zoom.css'; // mantém se houver estilos personalizados

const ProdutoDetalhe = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [variacoes, setVariacoes] = useState([]);
  const [selecionadas, setSelecionadas] = useState({});
  const [imagens, setImagens] = useState([]);
  const [imagemAtual, setImagemAtual] = useState('');

  useEffect(() => {
    const fetchProduto = async () => {
      const { data: produtoData, error: produtoError } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

      if (produtoError) {
        console.error('Erro ao carregar produto:', produtoError);
        return;
      }

      const { data: brandData } = await supabase
        .from('brands')
        .select('name')
        .eq('id', produtoData.brand_id)
        .single();

      const { data: imagesData } = await supabase
        .from('product_images')
        .select('*')
        .eq('product_id', id);

      const { data: variacoesData } = await supabase
        .from('product_variants')
        .select('*')
        .eq('product_id', id);

      const agrupadasTemp = variacoesData?.reduce((acc, v) => {
        if (!acc[v.variant_name]) acc[v.variant_name] = [];
        if (!acc[v.variant_name].includes(v.variant_value)) {
          acc[v.variant_name].push(v.variant_value);
        }
        return acc;
      }, {}) || {};

      const preSelecionadas = {};
      for (const nome in agrupadasTemp) {
        if (agrupadasTemp[nome].length === 1) {
          preSelecionadas[nome] = agrupadasTemp[nome][0];
        }
      }

      setProduto({
        ...produtoData,
        brandName: brandData?.name || '',
      });

      const urls = [...new Set(imagesData?.map((img) => img.url))];
      setImagens(urls);
      setImagemAtual(urls[0] || '');
      setVariacoes(variacoesData || []);
      setSelecionadas(preSelecionadas);
    };

    fetchProduto();
  }, [id]);

  const agrupadas = variacoes.reduce((acc, v) => {
    if (!acc[v.variant_name]) acc[v.variant_name] = [];
    if (!acc[v.variant_name].includes(v.variant_value)) {
      acc[v.variant_name].push(v.variant_value);
    }
    return acc;
  }, {});

  const handleSelecionar = (nome, valor) => {
    setSelecionadas((prev) => ({ ...prev, [nome]: valor }));
  };

  const adicionarAoCarrinho = () => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const item = {
      ...produto,
      quantidade: 1,
      variacoes: selecionadas,
    };
    carrinho.push(item);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert('Produto adicionado ao carrinho!');
  };

  const formatarPreco = (valor) =>
    valor?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  if (!produto) return <div className="p-6">Carregando produto...</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagem principal sem lupa */}
        <div>
          {imagemAtual && (
            <div className="border rounded-lg overflow-hidden mb-3 max-w-md mx-auto">
              <img
                src={imagemAtual}
                alt={produto.name}
                className="rounded-lg w-full"
              />
            </div>
          )}
          {imagens.length > 1 && (
            <div className="flex gap-2 overflow-x-auto py-2 px-1 scrollbar-thin scrollbar-thumb-gray-300">
              {imagens.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setImagemAtual(img)}
                  alt={`Miniatura ${index + 1}`}
                  className={`w-20 h-20 object-cover rounded border cursor-pointer hover:scale-105 transition-transform duration-200 ${
                    imagemAtual === img
                      ? 'border-green-600'
                      : 'border-gray-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Informações do Produto */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{produto.name}</h1>
          <p className="text-sm text-gray-500 mb-1">Marca: {produto.brandName}</p>
          <p className="text-gray-700 mb-4">{produto.description}</p>

          <div className="text-green-700 text-2xl font-bold mb-4">
            {formatarPreco(produto.price)}
          </div>

          {Object.entries(selecionadas).length > 0 && (
            <p className="text-sm mb-2 text-gray-600">
              Selecionado:{' '}
              {Object.entries(selecionadas)
                .map(([nome, valor]) => `${nome}: ${valor}`)
                .join(', ')}
            </p>
          )}

          {Object.keys(agrupadas).map((nome) => (
            <div key={nome} className="mb-4">
              <h2 className="font-semibold">{nome}:</h2>
              <div className="flex gap-2 mt-1 flex-wrap">
                {agrupadas[nome].map((valor) => (
                  <button
                    key={valor}
                    onClick={() => handleSelecionar(nome, valor)}
                    className={`px-3 py-1 rounded border ${
                      selecionadas[nome] === valor
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {valor}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="flex gap-3 mt-6 flex-col sm:flex-row">
            <button
              onClick={adicionarAoCarrinho}
              className="bg-green-600 text-white px-4 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-green-700"
            >
              <FaShoppingCart /> Adicionar ao Carrinho
            </button>

            <a
              href="https://wa.me/5592999970102"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-4 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-red-700"
            >
              <FaWhatsapp /> Comprar via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdutoDetalhe;
