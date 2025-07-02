import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { FaUserCircle } from 'react-icons/fa';

export default function UserIcon() {
  const [usuarioEmail, setUsuarioEmail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const carregarSessao = async () => {
      const { data } = await supabase.auth.getSession();
      const user = data?.session?.user;
      if (user) {
        setUsuarioEmail(user.email);
      }
    };

    carregarSessao();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          setUsuarioEmail(session.user.email);
        } else {
          setUsuarioEmail(null);
        }
      }
    );

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const handleClick = () => {
    if (usuarioEmail) {
      navigate('/admin'); // redireciona se estiver logado
    } else {
      navigate('/login'); // redireciona para login se não estiver
    }
  };

  return (
    <button
      onClick={handleClick}
      className="z-50 p-1 bg-transparent hover:bg-gray-100 rounded-full focus:outline-none"
      title={usuarioEmail ? 'Acessar painel' : 'Entrar'}
    >
      <FaUserCircle className="text-3xl text-gray-700 hover:text-green-600" />
    </button>
  );
}
