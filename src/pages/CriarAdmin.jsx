// src/pages/CriarAdmin.jsx
import React from 'react';
import { supabase } from '../lib/supabase';

export default function CriarAdmin() {
  const criarContaAdmin = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: 'helpus.ecommerce@gmail.com',
      password: 'admin1993',
    });

    if (error) {
      alert('Erro ao criar: ' + error.message);
    } else {
      alert('Conta criada com sucesso. Verifique o e-mail para ativação se necessário.');
    }
  };

  return (
    <div className="p-8 max-w-sm mx-auto text-center">
      <h1 className="text-xl font-bold mb-4">Criar Usuário Admin</h1>
      <button
        onClick={criarContaAdmin}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
      >
        Criar helpus.ecommerce@gmail.com
      </button>
    </div>
  );
}
