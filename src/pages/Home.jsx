// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsWithExtras();
  }, []);

  const fetchProductsWithExtras = async () => {
    try {
      const { data: productsData, error: productsError } = await supabase
        .from('products')
        .select('*');

      const { data: brandsData, error: brandsError } = await supabase
        .from('brands')
        .select('*');

      const { data: imagesData, error: imagesError } = await supabase
        .from('product_images')
        .select('*');

      if (productsError || brandsError || imagesError) {
        console.error('Erro ao buscar dados:', productsError || brandsError || imagesError);
        return;
      }

      const enrichedProducts = productsData.map((product) => {
        const brand = brandsData.find((b) => b.id === product.brand_id);
        const image = imagesData.find((img) => img.product_id === product.id);
        return {
          ...product,
          brandName: brand?.name || '',
          imageUrl: image?.url || '', // Corrigido para 'url'
        };
      });

      console.log('Produtos carregados:', enrichedProducts.map(p => ({ id: p.id, name: p.name })));

      setProducts(enrichedProducts);
    } catch (err) {
      console.error('Erro inesperado:', err);
    }
  };

  const formatarPreco = (valor) => {
    return valor?.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id}>
            <p className="text-xs text-gray-400">ID: {product.id}</p>
            <ProductCard product={product} formatarPreco={formatarPreco} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

