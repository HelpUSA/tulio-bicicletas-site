import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchProdutos() {
      const { data, error } = await supabase.from('produtos').select('*');
      if (error) {
        console.error('Erro ao carregar produtos:', error.message);
      } else {
        setProdutos(data);
      }
    }

    fetchProdutos();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Produtos disponíveis</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {produtos.map((produto) => (
          <div key={produto.id} style={{ border: '1px solid #ccc', padding: 10, width: 250 }}>
            <img
              src={produto.imagem_url}
              alt={produto.nome}
              style={{ width: '100%', height: 150, objectFit: 'cover' }}
            />
            <h3>{produto.nome}</h3>
            <p>{produto.descricao}</p>
            <p><strong>R$ {produto.preco}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}
