// src/pages/EditarPerfil.jsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function EditarPerfil() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    async function carregarPerfil() {
      const { data: { session } } = await supabase.auth.getSession();
      const user = session?.user;
      if (!user) return;
      setEmail(user.email);
      const { data } = await supabase.from('usuarios').select('nome').eq('id', user.id).single();
      if (data) setNome(data.nome);
    }
    carregarPerfil();
  }, []);

  async function atualizarPerfil(e) {
    e.preventDefault();
    const { data: { session } } = await supabase.auth.getSession();
    const user = session?.user;
    if (!user) return;

    const { error } = await supabase.from('usuarios').update({ nome }).eq('id', user.id);
    if (error) setMensagem('Erro ao atualizar');
    else setMensagem('Perfil atualizado com sucesso!');
  }

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-xl font-bold mb-4 text-center">Editar Perfil</h1>
      <form onSubmit={atualizarPerfil} className="flex flex-col gap-4">
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Seu nome"
          className="border px-3 py-2 rounded"
        />
        <input
          type="email"
          value={email}
          disabled
          className="border px-3 py-2 rounded bg-gray-100"
        />
        <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Salvar
        </button>
        {mensagem && <p className="text-center text-sm text-green-600">{mensagem}</p>}
      </form>
    </div>
  );
}
