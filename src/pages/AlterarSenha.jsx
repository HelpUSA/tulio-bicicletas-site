import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function AlterarSenha() {
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarNovaSenha, setConfirmarNovaSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleAlterarSenha = async (e) => {
    e.preventDefault();
    setMensagem('');

    if (novaSenha !== confirmarNovaSenha) {
      setMensagem('A nova senha e a confirmação não coincidem.');
      return;
    }

    const { error } = await supabase.auth.updateUser({ password: novaSenha });

    if (error) {
      setMensagem('Erro ao alterar a senha: ' + error.message);
    } else {
      setMensagem('Senha alterada com sucesso!');
      setSenhaAtual('');
      setNovaSenha('');
      setConfirmarNovaSenha('');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-xl font-bold mb-4 text-center">Alterar Senha</h1>
      <form onSubmit={handleAlterarSenha} className="flex flex-col gap-4">
        <input
          type="password"
          placeholder="Nova senha"
          value={novaSenha}
          onChange={(e) => setNovaSenha(e.target.value)}
          className="border px-3 py-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Confirmar nova senha"
          value={confirmarNovaSenha}
          onChange={(e) => setConfirmarNovaSenha(e.target.value)}
          className="border px-3 py-2 rounded"
          required
        />

        {mensagem && <p className="text-sm text-center text-green-600">{mensagem}</p>}

        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Alterar Senha
        </button>
      </form>
    </div>
  );
}
