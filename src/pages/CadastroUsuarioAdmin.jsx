import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function CadastroUsuarioAdmin() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [tipo, setTipo] = useState('cliente');
  const [erro, setErro] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleCadastro = async (e) => {
    e.preventDefault();
    setErro('');
    setMensagem('');

    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem.');
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password: senha,
    });

    if (error) {
      setErro(error.message);
      return;
    }

    const userId = data?.user?.id;

    const { error: insertError } = await supabase.from('usuarios').insert([
      {
        id: userId,
        nome,
        email,
        tipo,
      },
    ]);

    if (insertError) {
      setErro(insertError.message);
      return;
    }

    setMensagem('Usuário cadastrado com sucesso!');
    setNome('');
    setEmail('');
    setSenha('');
    setConfirmarSenha('');
    setTipo('cliente');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-xl font-bold mb-4 text-center">Cadastro de Usuário (Admin)</h1>
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

        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="cliente">Cliente</option>
          <option value="operacional">Operacional</option>
          <option value="admin">Administrador</option>
        </select>

        {erro && <p className="text-red-600 text-sm">{erro}</p>}
        {mensagem && <p className="text-green-600 text-sm">{mensagem}</p>}

        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Cadastrar Usuário
        </button>
      </form>
    </div>
  );
}
