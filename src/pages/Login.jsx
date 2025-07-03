import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErro('');
    setCarregando(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });

    if (error) {
      setErro('E-mail ou senha inválidos.');
      setCarregando(false);
      return;
    }

    const userId = data?.user?.id;
    if (!userId) {
      setErro('Erro ao obter usuário.');
      setCarregando(false);
      return;
    }

    const { data: usuarioPerfil, error: erroPerfil } = await supabase
      .from('usuarios')
      .select('tipo')
      .eq('id', userId)
      .single();

    if (erroPerfil || !usuarioPerfil) {
      setErro('Tipo de usuário não encontrado.');
      setCarregando(false);
      return;
    }

    localStorage.setItem('tipoUsuario', usuarioPerfil.tipo);
    localStorage.setItem('usuarioEmail', email);

    // ✅ Agora redireciona para a página de perfil
    navigate('/perfil');

    setCarregando(false);
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

        {erro && <p className="text-red-600 text-sm text-center">{erro}</p>}

        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700 disabled:opacity-50"
          disabled={carregando}
        >
          {carregando ? 'Entrando...' : 'Entrar'}
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
