import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import UserIcon from './UserIcon';

export default function Header() {
  const [qtdItens, setQtdItens] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const usuario = JSON.parse(localStorage.getItem('usuario')); // simulação

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
  }, [location]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur shadow-md' : 'bg-white'
      } border-b border-gray-200`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
        >
          <img
            src="/logo.png"
            alt="Túlio Bicicletas"
            className="h-10 w-auto"
          />
          <span className="hidden sm:block text-xl font-bold text-green-700 tracking-tight">
            Túlio Bicicletas
          </span>
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {[  // ✅ Removido: { label: 'Bicicletas', to: '/produtos' },
            { label: 'Início', to: '/' },
            { label: 'Sobre', to: '/sobre' },
            { label: 'Contato', to: '/contato' },
          ].map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="relative text-gray-700 font-medium hover:text-green-700 transition duration-200 group"
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          {/* 🔐 Links de admin/operacional */}
          {usuario && (usuario.tipo === 'admin' || usuario.tipo === 'operacional') && (
            <div className="flex items-center gap-6 ml-4 border-l pl-6 border-gray-300">
              <Link to="/admin" className="text-sm text-gray-700 hover:text-green-700">
                Admin
              </Link>
              <Link to="/admin/newsletter" className="text-sm text-gray-700 hover:text-green-700">
                Newsletter
              </Link>
            </div>
          )}
        </nav>

        {/* Ícones */}
        <div className="flex items-center gap-5">
          <UserIcon />
          <Link
            to="/carrinho"
            className="relative text-gray-700 hover:text-green-700 transition-colors"
          >
            <ShoppingCart size={22} />
            {qtdItens > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
                {qtdItens}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
