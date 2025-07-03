import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/NewsletterForm'; // ✅ Import da newsletter

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

      const { data: brandsData } = await supabase.from('brands').select('*');
      const { data: imagesData } = await supabase.from('product_images').select('*');

      if (productsError) {
        console.error('Erro ao buscar produtos:', productsError);
        return;
      }

      const enriched = productsData.map((p) => {
        const brand = brandsData.find((b) => b.id === p.brand_id);
        const image = imagesData.find((img) => img.product_id === p.id);
        return {
          ...p,
          brandName: brand?.name || '',
          imageUrl: image?.url || '',
        };
      });

      setProducts(enriched);
    } catch (err) {
      console.error('Erro inesperado:', err);
    }
  };

  const formatarPreco = (valor) =>
    valor?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      {/* 🎥 Hero com vídeo de fundo */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/video-fundo.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold text-center drop-shadow-lg">
            Bem-vindo à Tulio Bicicletas
          </h1>
        </div>
      </div>

      {/* 🛍️ Lista de Produtos */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Nossos Produtos
        </h2>

        {products.length === 0 ? (
          <p className="text-center text-gray-500">Carregando produtos...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                formatarPreco={formatarPreco}
              />
            ))}
          </div>
        )}
      </section>

      {/* ⭐ Benefícios - Estilo institucional */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-green-700 mb-12">
            Por que escolher a Túlio Bicicletas?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">🚲 Atendimento Personalizado</h3>
              <p className="text-gray-600 text-sm">
                Suporte individual antes e depois da sua compra.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">🏆 Experiência de Mercado</h3>
              <p className="text-gray-600 text-sm">
                Anos de tradição no setor e conhecimento técnico.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">✅ Confiança e Transparência</h3>
              <p className="text-gray-600 text-sm">
                Comunicação clara e compromisso com a sua satisfação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✉️ Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Home;
