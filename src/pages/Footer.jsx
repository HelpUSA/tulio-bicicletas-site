import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { supabase } from '../lib/supabase';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState(false);

  const handleCadastro = async (e) => {
    e.preventDefault();
    setMensagem('');
    setErro(false);

    if (!email.includes('@')) {
      setErro(true);
      setMensagem('E-mail inválido.');
      return;
    }

    // Verifica duplicidade
    const { data: existente } = await supabase
      .from('newsletter')
      .select('*')
      .eq('email', email)
      .maybeSingle();

    if (existente) {
      setErro(true);
      setMensagem('Este e-mail já está cadastrado.');
      return;
    }

    const { error } = await supabase.from('newsletter').insert([{ email }]);
    if (error) {
      setErro(true);
      setMensagem('Erro ao cadastrar. Tente novamente.');
    } else {
      setMensagem('Cadastro realizado com sucesso!');
      setEmail('');
    }
  };

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">

        {/* Links institucionais */}
        <div>
          <h4 className="font-bold mb-2">INSTITUCIONAL</h4>
          <ul className="space-y-1">
            <li><Link to="/como-comprar" className="hover:text-green-700">Como comprar</Link></li>
            <li><Link to="/seguranca" className="hover:text-green-700">Segurança</Link></li>
            <li><Link to="/tempo-garantia" className="hover:text-green-700">Tempo de Garantia</Link></li>
            <li><Link to="/trocas" className="hover:text-green-700">Trocas, devoluções e arrependimento</Link></li>
          </ul>
        </div>

        {/* Atendimento */}
        <div>
          <h4 className="font-bold mb-2">ATENDIMENTO</h4>
          <ul className="space-y-1">
            <li>Campina Grande – 3201-9700</li>
            <li>João Pessoa –</li>
            <li>Centro – 3221-0233</li>
            <li>Manaíra – 3566-6689</li>
            <li>Mangabeira – 3576-3010</li>
          </ul>
        </div>

        {/* Newsletter e redes sociais */}
        <div>
          <h4 className="font-bold mb-2 text-center md:text-left">RECEBA AS NOVIDADES EXCLUSIVAS!</h4>
          <form onSubmit={handleCadastro} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu e-mail"
              className="border px-3 py-2 w-full"
              required
            />
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Cadastrar
            </button>
          </form>
          {mensagem && (
            <p className={`text-sm mt-2 text-center md:text-left ${erro ? 'text-red-600' : 'text-green-600'}`}>
              {mensagem}
            </p>
          )}
          <div className="flex gap-3 mt-4 justify-center md:justify-start text-green-700">
            <a href="https://facebook.com/tuliobicicletas" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20} />
            </a>
            <a href="https://instagram.com/tuliobicicletas" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </a>
            <a href="https://wa.me/5583998721848" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Direitos autorais */}
      <div className="text-center text-xs text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} Túlio Bicicletas. Todos os direitos reservados. Desenvolvido por{' '}
        <a href="https://helpusa.com.br" className="text-green-700 hover:underline">HelpUS</a>. Contato:{' '}
        <a href="mailto:helpus.ecommerce@gmail.com" className="hover:underline">helpus.ecommerce@gmail.com</a>
      </div>
    </footer>
  );
}
