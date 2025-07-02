import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import UserIcon from './UserIcon';

export default function Header() {
  const [qtdItens, setQtdItens] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const atualizarQtd = () => {
      const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
      const total = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
      setQtdItens(total);
    };

    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    atualizarQtd();
    window.addEventListener('focus', atualizarQtd);
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('focus', atualizarQtd);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white/90 shadow-md backdrop-blur' : 'bg-white'
      } border-b border-gray-200`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo com animação */}
        <Link
          to="/"
          className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
        >
          <img
            src="/logo.png"
            alt="Túlio Bicicletas"
            className="h-10 w-auto"
            loading="lazy"
          />
          <span className="hidden sm:block text-lg font-extrabold text-green-700 tracking-tight">
            Túlio Bicicletas
          </span>
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-green-700 transition-colors">Início</Link>
          <Link to="/produtos" className="hover:text-green-700 transition-colors">Bicicletas</Link>
          <Link to="/sobre" className="hover:text-green-700 transition-colors">Sobre</Link>
          <Link to="/contato" className="hover:text-green-700 transition-colors">Contato</Link>
        </nav>

        {/* Ícones */}
        <div className="flex items-center gap-4">
          <UserIcon />
          <Link
            to="/carrinho"
            className="relative group text-gray-700 hover:text-green-700 transition-colors"
            aria-label="Carrinho de compras"
          >
            <ShoppingCart size={22} />
            {qtdItens > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[11px] w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
                {qtdItens}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
