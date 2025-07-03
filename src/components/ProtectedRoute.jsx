import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function ProtectedRoute({ children, permitido = [] }) {
  const [carregando, setCarregando] = useState(true);
  const [autorizado, setAutorizado] = useState(false);

  useEffect(() => {
    const verificarPermissao = async () => {
      const { data } = await supabase.auth.getSession();
      const usuario = data?.session?.user;

      if (!usuario) {
        setAutorizado(false);
        setCarregando(false);
        return;
      }

      const { data: perfil } = await supabase
        .from('usuarios')
        .select('tipo')
        .eq('id', usuario.id)
        .single();

      if (perfil && permitido.includes(perfil.tipo)) {
        setAutorizado(true);
      }

      setCarregando(false);
    };

    verificarPermissao();
  }, [permitido]);

  if (carregando) return null;

  if (!autorizado) {
    return <Navigate to="/login" />;
  }

  return children;
}
