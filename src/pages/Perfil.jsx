import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function Perfil() {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const carregarPerfil = async () => {
      const { data } = await supabase.auth.getSession();
      const user = data?.session?.user;
      if (user) {
        const { data: perfil } = await supabase
          .from('usuarios')
          .select('nome, email, tipo')
          .eq('id', user.id)
          .single();

        if (perfil) setUsuario(perfil);
      }
    };

    carregarPerfil();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem('tipoUsuario');
    localStorage.removeItem('usuarioEmail');
    navigate('/login');
  };

  if (!usuario) return <p className="text-center mt-10">Carregando...</p>;

  return (
    <div className="max-w-md mx-auto bg-white shadow-md p-6 rounded text-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Bem-vindo, {usuario.nome.split(' ')[0]}</h1>
      <p><strong>Email:</strong> {usuario.email}</p>
      <p className="mb-4"><strong>Tipo:</strong> {usuario.tipo}</p>

      <div className="flex flex-col gap-3">
        <button
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          onClick={() => navigate('/admin/alterar-senha')}
        >
          Alterar senha
        </button>

        {(usuario.tipo === 'admin' || usuario.tipo === 'operacional') && (
          <>
            <button
              className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
              onClick={() => navigate('/admin')}
            >
              Produtos
            </button>

            <button
              className="bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
              onClick={() => navigate('/admin/newsletter')}
            >
              Newsletter
            </button>
          </>
        )}

        {usuario.tipo === 'admin' && (
          <button
            className="bg-gray-800 text-white py-2 rounded hover:bg-gray-900"
            onClick={() => navigate('/gerenciar-usuarios')}
          >
            👤 Gerenciar Usuários
          </button>
        )}

        <button
          className="bg-red-600 text-white py-2 rounded hover:bg-red-700"
          onClick={handleLogout}
        >
          Sair
        </button>
      </div>
    </div>
  );
}
