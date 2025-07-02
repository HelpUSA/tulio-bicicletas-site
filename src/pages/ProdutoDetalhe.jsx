// src/pages/ProdutoDetalhe.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const ProdutoDetalhe = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const fetchProduto = async () => {
      const { data: produtoData, error: produtoError } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

      const { data: brandData } = await supabase
        .from('brands')
        .select('name')
        .eq('id', produtoData?.brand_id)
        .single();

      const { data: imageData } = await supabase
        .from('product_images')
        .select('*')
        .eq('product_id', id)
        .maybeSingle();

      if (produtoError) {
        console.error('Erro ao carregar produto:', produtoError);
      } else {
        setProduto({
          ...produtoData,
          brandName: brandData?.name || '',
          imageUrl: imageData?.url || '',
        });
      }
    };

    fetchProduto();
  }, [id]);

  if (!produto) {
    return <div className="p-6">Carregando produto...</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{produto.name}</h1>
      {produto.imageUrl && (
        <img
          src={`https://nfiyjubkhqwpdyunngnp.supabase.co/storage/v1/object/public/${produto.imageUrl}`}
          alt={produto.name}
          className="w-full max-w-md mb-4"
        />
      )}
      <p className="text-gray-700">{produto.description}</p>
      <p className="mt-2 text-lg font-semibold">Marca: {produto.brandName}</p>
      <p className="text-green-600 text-xl font-bold mt-4">
        {produto.promo_price ? (
          <>
            <span className="line-through mr-2 text-gray-500">R$ {produto.price.toFixed(2)}</span>
            <span>R$ {produto.promo_price.toFixed(2)}</span>
          </>
        ) : (
          <>R$ {produto.price.toFixed(2)}</>
        )}
      </p>
    </div>
  );
};

export default ProdutoDetalhe;
