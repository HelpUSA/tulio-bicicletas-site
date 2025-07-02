import React, { useEffect, useState } from 'react';
import { FaWhatsapp, FaTrash } from 'react-icons/fa';

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
    localStorage.setItem('carrinho', JSON.stringify(atualizado));
  };

  const atualizarCarrinho = () => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert('Carrinho atualizado!');
  };

  const limparCarrinho = () => {
    setCarrinho([]);
    localStorage.removeItem('carrinho');
  };

  const subtotal = carrinho.reduce(
    (total, item) => total + item.quantidade * (item.promotional_price || item.price),
    0
  );

  const formatarPreco = (valor) =>
    valor?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const gerarMensagemWhatsApp = () => {
    let msg = 'Olá, gostaria de comprar:\n';
    carrinho.forEach((item) => {
      msg += `🛒 ${item.quantidade}x ${item.name} - ${formatarPreco(item.promotional_price || item.price)}\n`;
    });
    msg += `\n💰 Total: ${formatarPreco(subtotal)}`;
    return encodeURIComponent(msg);
  };

  const linkWhatsApp = `https://wa.me/5583998721848?text=${gerarMensagemWhatsApp()}`;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Carrinho</h1>

      {carrinho.length === 0 ? (
        <p className="text-center text-gray-600">Seu carrinho está vazio.</p>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {carrinho.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border rounded-lg p-4 shadow-sm">
                <button
                  onClick={() => removerProduto(item.id)}
                  className="text-red-600 text-xl"
                  title="Remover item"
                >
                  ×
                </button>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-20 h-20 object-contain border rounded"
                />
                <div className="flex-1">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">
                    {formatarPreco(item.promotional_price || item.price)} cada
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span>Qtd:</span>
                    <input
                      type="number"
                      value={item.quantidade}
                      onChange={(e) =>
                        atualizarQuantidade(item.id, e.target.value)
                      }
                      className="w-16 border px-2 py-1 rounded text-center"
                      min={1}
                    />
                  </div>
                </div>
                <div className="text-right font-bold text-lg">
                  {formatarPreco(
                    item.quantidade * (item.promotional_price || item.price)
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mb-6">
            <button
              onClick={atualizarCarrinho}
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              Atualizar Carrinho
            </button>
            <button
              onClick={limparCarrinho}
              className="bg-gray-300 text-black px-6 py-2 rounded hover:bg-gray-400 flex items-center gap-2"
            >
              <FaTrash /> Esvaziar Carrinho
            </button>
          </div>

          <div className="bg-white p-4 rounded shadow max-w-md ml-auto mb-6 border">
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
            href={linkWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-red-600 text-white py-3 text-center text-lg font-semibold rounded hover:bg-red-700 flex items-center justify-center gap-2"
          >
            <FaWhatsapp />
            Comprar Agora via WhatsApp
          </a>
        </>
      )}
    </div>
  );
};

export default Cart;
