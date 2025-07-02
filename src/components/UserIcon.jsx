import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { FaUserCircle } from 'react-icons/fa';

export default function UserIcon() {
  const [usuarioEmail, setUsuarioEmail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const session = supabase.auth.getSession().then(({ data }) => {
      const user = data?.session?.user;
      if (user) {
        setUsuarioEmail(user.email);
      }
    });

    // Listener para manter sincronizado
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

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem('tipoUsuario');
    localStorage.removeItem('usuarioEmail');
    setUsuarioEmail(null);
    navigate('/');
  };

  return (
    <div className="absolute top-4 right-4 z-50">
      <div className="relative group">
        <FaUserCircle className="text-3xl text-gray-700 cursor-pointer hover:text-green-600" />

        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg hidden group-hover:block p-3 text-sm">
          {usuarioEmail ? (
            <>
              <p className="font-semibold mb-2">{usuarioEmail}</p>
              <button
                onClick={handleLogout}
                className="w-full bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Sair
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="w-full bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
            >
              Entrar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
