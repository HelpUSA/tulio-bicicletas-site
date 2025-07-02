import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem('carrinho')) || [];
    setCarrinho(dados);
  }, []);

  const atualizarQuantidade = (id, novaQtd) => {
    const atualizado = carrinho.map((item) =>
      item.id === id ? { ...item, quantidade: parseInt(novaQtd) || 1 } : item
    );
    setCarrinho(atualizado);
  };

  const removerProduto = (id) => {
    const atualizado = carrinho.filter((item) => item.id !== id);
    setCarrinho(atualizado);
  };

  const esvaziarCarrinho = () => {
    setCarrinho([]);
    localStorage.removeItem('carrinho');
  };

  const atualizarCarrinho = () => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert('Carrinho atualizado!');
  };

  const subtotal = carrinho.reduce(
    (total, item) => total + item.quantidade * (item.promotional_price || item.price),
    0
  );

  const formatarPreco = (valor) =>
    valor?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const gerarLinkWhatsApp = () => {
    let mensagem = '*Olá! Gostaria de comprar os seguintes produtos:*\n\n';

    carrinho.forEach((item, index) => {
      mensagem += `*${index + 1}. ${item.name}* (Qtd: ${item.quantidade})\n`;
      if (item.variacoes && Object.keys(item.variacoes).length > 0) {
        Object.entries(item.variacoes).forEach(([key, value]) => {
          mensagem += `  - ${key}: ${value}\n`;
        });
      }
      const precoUnitario = item.promotional_price || item.price;
      mensagem += `  Preço unitário: R$ ${precoUnitario.toFixed(2)}\n\n`;
    });

    mensagem += `*Total:* R$ ${subtotal.toFixed(2)}\n`;

    return `https://wa.me/5583998721848?text=${encodeURIComponent(mensagem)}`;
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Carrinho</h1>

      {carrinho.length === 0 ? (
        <p className="text-center text-gray-600">Seu carrinho está vazio.</p>
      ) : (
        <>
          <table className="w-full border-t text-sm mb-6">
            <thead className="text-left border-b">
              <tr>
                <th className="py-2">Produto</th>
                <th className="py-2">Preço</th>
                <th className="py-2">Quantidade</th>
                <th className="py-2">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {carrinho.map((item) => (
                <tr key={item.id} className="border-b align-middle">
                  <td className="py-3 flex gap-3 items-center">
                    <button
                      onClick={() => removerProduto(item.id)}
                      className="text-red-600 font-bold"
                    >
                      ×
                    </button>
                    <Link to={`/produto/${item.id}`} className="flex gap-3 items-center">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-14 h-14 object-contain"
                      />
                      <div>
                        <div className="font-semibold">{item.name}</div>
                        {item.variacoes && Object.keys(item.variacoes).length > 0 && (
                          <ul className="text-sm text-gray-500 mt-1">
                            {Object.entries(item.variacoes).map(([key, value]) => (
                              <li key={key}>{key}: <span className="font-medium">{value}</span></li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </Link>
                  </td>
                  <td>{formatarPreco(item.promotional_price || item.price)}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantidade}
                      onChange={(e) => atualizarQuantidade(item.id, e.target.value)}
                      className="w-16 border px-2 py-1 rounded text-center"
                      min={1}
                    />
                  </td>
                  <td>{formatarPreco(item.quantidade * (item.promotional_price || item.price))}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex gap-2 mb-6">
            <button
              onClick={atualizarCarrinho}
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              Atualizar Carrinho
            </button>
            <button
              onClick={esvaziarCarrinho}
              className="bg-gray-300 text-black px-6 py-2 rounded hover:bg-gray-400"
            >
              Esvaziar Carrinho
            </button>
          </div>

          <div className="bg-gray-50 p-4 rounded shadow max-w-md ml-auto mb-6">
            <h2 className="text-lg font-semibold mb-3">Total no Carrinho</h2>
            <div className="flex justify-between border-b py-1">
              <span>Subtotal</span>
              <span>{formatarPreco(subtotal)}</span>
            </div>
            <div className="flex justify-between border-b py-1">
              <span>Total no Pix</span>
              <span>{formatarPreco(subtotal)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg py-2">
              <span>Total</span>
              <span>{formatarPreco(subtotal)}</span>
            </div>
          </div>

          <a
            href={gerarLinkWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-red-600 text-white py-3 text-center text-lg font-semibold rounded hover:bg-red-700 flex items-center justify-center gap-2"
          >
            <FaWhatsapp />
            Comprar Agora
          </a>
        </>
      )}
    </div>
  );
};

export default Cart;
