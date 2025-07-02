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
      navigate('/admin'); // pode ser alterado para painel do usuário futuramente
    } else {
      navigate('/login');
    }
  };

  return (
    <button onClick={handleClick}>
      <FaUserCircle className="text-3xl text-gray-700 hover:text-green-600" />
    </button>
  );
}
