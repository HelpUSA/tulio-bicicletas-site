import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import UserIcon from './UserIcon';

const Header = () => {
  const [qtdItens, setQtdItens] = useState(0);

  useEffect(() => {
    const atualizarQtd = () => {
      const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
      const total = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
      setQtdItens(total);
    };

    atualizarQtd();

    window.addEventListener('focus', atualizarQtd);
    return () => window.removeEventListener('focus', atualizarQtd);
  }, []);

  return (
    <header className="w-full fixed top-0 z-50 bg-white shadow border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src="/logo.png" alt="Túlio Bicicletas" className="h-10" />
          </Link>
        </div>

        {/* Menu principal */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-green-700">Início</Link>
          <Link to="/produtos" className="hover:text-green-700">Bicicletas</Link>
          <Link to="/sobre" className="hover:text-green-700">Sobre</Link>
          <Link to="/contato" className="hover:text-green-700">Contato</Link>
        </nav>

        {/* Ícones do topo */}
        <div className="flex items-center space-x-4">
          <UserIcon />
          <Link to="/carrinho" className="relative hover:text-green-700">
            <ShoppingCart size={20} />
            {qtdItens > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {qtdItens}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
