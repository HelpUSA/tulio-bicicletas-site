import { useEffect, useState } from 'react';
import { supabase } from './supabase';

export default function useAuth() {
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const carregarSessao = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUsuario(session?.user || null);
      setCarregando(false);
    };

    carregarSessao();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUsuario(session?.user || null);
      }
    );

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  return { usuario, carregando };
}
