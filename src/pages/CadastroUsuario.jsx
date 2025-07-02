import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function CadastroUsuario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [tipo, setTipo] = useState('cliente');
  const [erro, setErro] = useState('');
  const [tipoUsuarioLogado, setTipoUsuarioLogado] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const tipoLocal = localStorage.getItem('tipoUsuario');
    if (tipoLocal) {
      setTipoUsuarioLogado(tipoLocal);
    }
  }, []);

  const handleCadastro = async (e) => {
    e.preventDefault();
    setErro('');

    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem.');
      return;
    }

    // 1. Cria o usuário no Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password: senha,
    });

    if (error) {
      setErro(error.message);
      return;
    }

    const userId = data?.user?.id;

    // 2. Validação de tipo (caso tentem forçar via inspeção)
    const tipoFinal =
      tipoUsuarioLogado === 'admin' && ['admin', 'operacional'].includes(tipo)
        ? tipo
        : 'cliente';

    // 3. Insere os dados na tabela 'usuarios'
    const { error: insertError } = await supabase.from('usuarios').insert([
      {
        id: userId,
        nome,
        email,
        tipo: tipoFinal,
      },
    ]);

    if (insertError) {
      setErro(insertError.message);
      return;
    }

    alert('Cadastro realizado com sucesso!');
    navigate('/login');
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4 text-center">Cadastro</h1>
      <form onSubmit={handleCadastro} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border px-3 py-2 rounded"
          required
        />

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-3 py-2 rounded"
          required
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="border px-3 py-2 rounded"
          required
        />

        <input
          type="password"
          placeholder="Confirmar senha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          className="border px-3 py-2 rounded"
          required
        />

        {/* Tipo de usuário: só aparece se quem estiver logado for admin */}
        {tipoUsuarioLogado === 'admin' && (
          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="border px-3 py-2 rounded"
          >
            <option value="cliente">Cliente</option>
            <option value="operacional">Operacional</option>
            <option value="admin">Administrador</option>
          </select>
        )}

        {erro && <p className="text-red-600 text-sm">{erro}</p>}

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Criar Conta
        </button>
      </form>

      <p className="mt-4 text-sm text-center">
        Já tem conta?{' '}
        <a href="/login" className="text-green-600 hover:underline">
          Entrar
        </a>
      </p>
    </div>
  );
}
