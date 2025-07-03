import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-100 text-gray-700 text-sm mt-10 pt-10 border-t">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-8 pb-6">

      {/* Seção Institucional */}
      <div>
        <h4 className="font-semibold mb-2 uppercase text-gray-800">Institucional</h4>
        <ul className="space-y-1 text-blue-600">
          <li><Link to="/como-comprar" className="hover:underline">Como comprar</Link></li>
          <li><Link to="/seguranca" className="hover:underline">Segurança</Link></li>
          <li><Link to="/tempo-garantia" className="hover:underline">Pagamento Tempo de Garantia</Link></li>
          <li><Link to="/trocas" className="hover:underline">Trocas, devoluções e arrependimento</Link></li>
        </ul>
      </div>

      {/* Seção Atendimento */}
      <div>
        <h4 className="font-semibold mb-2 uppercase text-gray-800">Atendimento</h4>
        <ul className="space-y-1">
          <li>– CAMPINA GRANDE – 3201-9700</li>
          <li>– JOÃO PESSOA</li>
          <li>– CENTRO – 3221-0233</li>
          <li>– MANAÍRA – 3566-6689</li>
          <li>– MANGABEIRA – 3576-3010</li>
        </ul>
      </div>
    </div>

    {/* Rodapé final com créditos */}
    <div className="text-center border-t border-gray-200 py-4 text-gray-500 text-xs leading-relaxed">
      © {new Date().getFullYear()} Túlio Bicicletas. Todos os direitos reservados.
      <br />
      Site desenvolvido por{' '}
      <a
        href="https://helpusa.com.br"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-700 hover:underline font-semibold"
      >
        HelpUS
      </a>{' '}
      – HelpUS LLC · USA
      <div className="mt-2 flex justify-center">
        <img src="/helpus-logo.png" alt="HelpUS Logo" className="h-6" />
      </div>
    </div>
  </footer>
);

export default Footer;
