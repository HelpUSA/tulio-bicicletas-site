import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function usePermissoes() {
  const [permissoes, setPermissoes] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregar() {
      setCarregando(true);

      const { data: session, error: erroSessao } = await supabase.auth.getUser();
      const userId = session?.user?.id;

      if (!userId || erroSessao) {
        console.error('Usuário não autenticado ou erro ao obter sessão.', erroSessao);
        setCarregando(false);
        return;
      }

      const { data: usuario, error: erroUsuario } = await supabase
        .from('usuarios')
        .select('role_id')
        .eq('id', userId)
        .single();

      if (erroUsuario || !usuario?.role_id) {
        console.error('Erro ao buscar role_id do usuário:', erroUsuario);
        setCarregando(false);
        return;
      }

      const { data: permissao, error: erroPermissao } = await supabase
        .from('permissions')
        .select(`
          can_view_products,
          can_edit_products,
          can_create_users,
          can_edit_users,
          can_manage_newsletter
        `)
        .eq('role_id', usuario.role_id)
        .single();

      const { data: role, error: erroRole } = await supabase
        .from('roles')
        .select('name')
        .eq('id', usuario.role_id)
        .single();

      if (erroPermissao || erroRole || !permissao) {
        console.error('Erro ao buscar permissões ou role:', erroPermissao, erroRole);
        setCarregando(false);
        return;
      }

      setPermissoes({
        ...permissao,
        role_id: usuario.role_id,
        role_name: role.name,
        user_id: userId,
      });

      setCarregando(false);
    }

    carregar();
  }, []);

  return { permissoes, carregando };
}
