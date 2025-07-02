import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { FaWhatsapp, FaShoppingCart } from 'react-icons/fa';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

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

      const urls = imagesData?.map((img) => img.url) || [];

      setProduto({
        ...produtoData,
        brandName: brandData?.name || '',
      });

      setImagens(urls);
      setImagemAtual(urls[0] || '');
      setVariacoes(variacoesData);
    };

    fetchProduto();
  }, [id]);

  const agrupadas = variacoes.reduce((acc, v) => {
    if (!acc[v.name]) acc[v.name] = [];
    if (!acc[v.name].includes(v.value)) acc[v.name].push(v.value);
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
      variacoes: selecionadas
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
        {/* Imagem com zoom clicável */}
        <div>
          {imagemAtual && (
            <div className="border rounded-lg overflow-hidden mb-3 max-w-md mx-auto">
              <Zoom>
                <img
                  src={imagemAtual}
                  alt={produto.name}
                  className="w-full h-auto object-contain rounded-lg cursor-zoom-in"
                />
              </Zoom>
            </div>
          )}

          {/* Miniaturas */}
          {imagens.length > 1 && (
            <div className="flex gap-2 justify-center flex-wrap">
              {imagens.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setImagemAtual(img)}
                  alt={`Miniatura ${index + 1}`}
                  className={`w-16 h-16 object-cover rounded border cursor-pointer ${
                    imagemAtual === img ? 'border-green-600' : 'border-gray-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Informações do produto */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{produto.name}</h1>
          <p className="text-sm text-gray-500 mb-1">Marca: {produto.brandName}</p>
          <p className="text-gray-700 mb-4">{produto.description}</p>

          <div className="text-green-700 text-2xl font-bold mb-4">
            {produto.promotional_price ? (
              <>
                <span className="line-through text-gray-500 mr-2">
                  {formatarPreco(produto.price)}
                </span>
                <span>{formatarPreco(produto.promotional_price)}</span>
              </>
            ) : (
              <span>{formatarPreco(produto.price)}</span>
            )}
          </div>

          {/* Variações */}
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

          {/* Botões de ação */}
          <div className="flex gap-3 mt-6 flex-col sm:flex-row">
            <button
              onClick={adicionarAoCarrinho}
              className="bg-green-600 text-white px-4 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-green-700"
            >
              <FaShoppingCart /> Adicionar ao Carrinho
            </button>

            <a
              href="https://wa.me/5583998721848"
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
