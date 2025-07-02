import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCreditCard, FaWhatsapp, FaTimesCircle } from 'react-icons/fa';

const ProductCard = ({ product, formatarPreco }) => {
  const navigate = useNavigate();

  const {
    name,
    description,
    price,
    promotional_price,
    brandName,
    imageUrl,
    id,
  } = product;

  const precoParcelado = price / 10;

  const adicionarAoCarrinho = (e) => {
    e.stopPropagation();
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    const existente = carrinho.find(item => item.id === id);

    if (existente) {
      existente.quantidade += 1;
    } else {
      carrinho.push({ ...product, quantidade: 1 });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    navigate("/carrinho");
  };

  const irParaDetalhe = () => {
    navigate(`/produto/${id}`);
  };

  return (
    <div
      onClick={irParaDetalhe}
      className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-all duration-300 group flex flex-col cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
    >
      {/* Imagem */}
      <div className="w-full aspect-square bg-white flex items-center justify-center overflow-hidden rounded-lg mb-3">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
            Sem imagem
          </div>
        )}
      </div>

      {/* Título e marca */}
      <h2 className="text-base md:text-lg font-bold mb-1 text-center text-gray-800 line-clamp-2">{name}</h2>
      {brandName && (
        <p className="text-xs md:text-sm text-gray-500 mb-1 text-center">Marca: {brandName}</p>
      )}
      {description && (
        <p className="text-xs md:text-sm text-gray-600 mb-2 text-center line-clamp-2">{description}</p>
      )}

      {/* Preço normal ou promocional */}
      <div className="text-center text-lg md:text-xl font-semibold text-green-700 mb-1">
        {formatarPreco(promotional_price || price)}
      </div>

      {/* Preço parcelado */}
      <div className="text-xs md:text-sm text-gray-700 text-center flex items-center justify-center gap-2 mb-1">
        <FaCreditCard />
        10x de {formatarPreco(precoParcelado)} sem juros
      </div>

      {/* Preço Pix */}
      <div className="bg-red-100 text-red-700 text-center text-xs md:text-sm px-3 py-1 rounded mb-3 flex items-center justify-center gap-1">
        <FaTimesCircle />
        À vista {formatarPreco(promotional_price || price)} no Pix
      </div>

      {/* Botões */}
      <div className="flex flex-col gap-2 mt-auto">
        <button
          onClick={adicionarAoCarrinho}
          className="bg-green-600 text-white rounded-full py-2 text-sm hover:bg-green-700 transition"
        >
          Adicionar ao Carrinho
        </button>
        <a
          href="https://wa.me/5583998721848"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="bg-red-600 text-white rounded-full py-2 text-sm flex items-center justify-center gap-2 hover:bg-red-700 transition"
        >
          <FaWhatsapp />
          Comprar agora
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
