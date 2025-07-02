import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErro('');

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });

    if (error) {
      setErro(error.message);
      return;
    }

    // Após login, busque o tipo do usuário
    const { data: perfil } = await supabase
      .from('usuarios')
      .select('tipo')
      .eq('id', data.user.id)
      .single();

    if (!perfil) {
      setErro('Usuário sem tipo definido.');
      return;
    }

    // Salva tipo no localStorage para controle de rotas
    localStorage.setItem('tipoUsuario', perfil.tipo);
    localStorage.setItem('usuarioEmail', email);

    if (perfil.tipo === 'admin') {
      navigate('/admin');
    } else if (perfil.tipo === 'operacional') {
      navigate('/admin/cadastrar');
    } else {
      navigate('/'); // cliente comum
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4 text-center">Entrar</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-3 py-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="border px-3 py-2 rounded"
          required
        />
        {erro && <p className="text-red-600 text-sm">{erro}</p>}
        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Entrar
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Ainda não tem conta?{' '}
        <a href="/cadastro" className="text-blue-600 hover:underline">
          Cadastre-se
        </a>
      </p>
    </div>
  );
}
