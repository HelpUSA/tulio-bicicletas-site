import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Link } from 'react-router-dom';

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscarProdutos() {
      const { data, error } = await supabase.from('produtos').select('*');
      if (!error) {
        setProdutos(data);
      } else {
        console.error("Erro ao buscar produtos:", error);
      }
      setCarregando(false);
    }

    buscarProdutos();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Produtos disponíveis</h1>
      {carregando ? (
        <p>Carregando produtos...</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {produtos.map((produto) => (
            <Link
              key={produto.id}
              to={`/produto/${produto.id}`}
              style={{
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <div style={{
                border: '1px solid #ccc',
                padding: '10px',
                width: '200px',
                textAlign: 'center',
                transition: '0.3s',
                borderRadius: '8px'
              }}>
                <img
                  src={produto.imagem_url}
                  alt={produto.nome}
                  style={{ width: '100%', height: 'auto' }}
                />
                <h3>{produto.nome}</h3>
                <p>R$ {produto.preco.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
