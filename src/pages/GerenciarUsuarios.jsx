import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

export default function GerenciarUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [form, setForm] = useState({
    nome: '',
    email: '',
    confirmarEmail: '',
    tipo: 'cliente',
    confirmarSenha: '',
  });
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [editandoId, setEditandoId] = useState(null);
  const navigate = useNavigate();

  const tipoUsuario = localStorage.getItem('tipoUsuario');

  useEffect(() => {
    if (tipoUsuario !== 'admin') {
      navigate('/');
      return;
    }
    carregarUsuarios();
  }, []);

  async function carregarUsuarios() {
    const { data, error } = await supabase
      .from('usuarios')
      .select('*')
      .order('criado_em', { ascending: false });
    if (error) {
      console.error(error);
      return;
    }
    setUsuarios(data);
  }

  function iniciarEdicao(usuario) {
    setModoEdicao(true);
    setEditandoId(usuario.id);
    setForm({
      nome: usuario.nome,
      email: usuario.email,
      confirmarEmail: usuario.email,
      tipo: usuario.tipo,
      confirmarSenha: '',
    });
    setSenha('');
    setErro('');
  }

  async function excluirUsuario(id) {
    if (!window.confirm('Tem certeza que deseja excluir este usuário?')) return;
    await supabase.from('usuarios').delete().eq('id', id);
    carregarUsuarios();
  }

  async function salvarUsuario(e) {
    e.preventDefault();
    setErro('');

    const emailLimpo = form.email.trim().toLowerCase();
    const confirmarEmailLimpo = form.confirmarEmail.trim().toLowerCase();

    if (!form.nome || !emailLimpo) {
      setErro('Preencha nome e e-mail.');
      return;
    }

    if (emailLimpo !== confirmarEmailLimpo) {
      setErro('Os e-mails não coincidem.');
      return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(emailLimpo)) {
      setErro('Formato de e-mail inválido.');
      return;
    }

    if (!modoEdicao && senha !== form.confirmarSenha) {
      setErro('As senhas não coincidem.');
      return;
    }

    if (modoEdicao) {
      const { error } = await supabase
        .from('usuarios')
        .update({
          nome: form.nome,
          email: emailLimpo,
          tipo: form.tipo,
        })
        .eq('id', editandoId);

      if (senha) {
        setErro('Alteração de senha indisponível neste modo (frontend).');
        return;
      }

      if (error) {
        setErro('Erro ao atualizar usuário.');
        return;
      }
    } else {
      if (!senha) {
        setErro('Defina uma senha para o novo usuário.');
        return;
      }

      const { data, error } = await supabase.auth.signUp({
        email: emailLimpo,
        password: senha,
      });

      if (error) {
        setErro('Erro ao criar no auth: ' + error.message);
        return;
      }

      const userId = data?.user?.id;
      if (!userId) {
        setErro('Erro ao obter ID do usuário criado.');
        return;
      }

      const { error: insertError } = await supabase.from('usuarios').insert([
        {
          id: userId,
          nome: form.nome,
          email: emailLimpo,
          tipo: form.tipo,
        },
      ]);

      if (insertError) {
        setErro('Erro ao salvar usuário.');
        return;
      }
    }

    setForm({
      nome: '',
      email: '',
      confirmarEmail: '',
      tipo: 'cliente',
      confirmarSenha: '',
    });
    setSenha('');
    setModoEdicao(false);
    setEditandoId(null);
    carregarUsuarios();
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Gerenciar Usuários</h1>

      <form
        onSubmit={salvarUsuario}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 bg-white p-4 rounded shadow"
      >
        <input
          type="text"
          placeholder="Nome"
          className="border p-2 rounded"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
        />

        <input
          type="email"
          placeholder="E-mail"
          className="border p-2 rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="email"
          placeholder="Confirmar E-mail"
          className="border p-2 rounded"
          value={form.confirmarEmail}
          onChange={(e) => setForm({ ...form, confirmarEmail: e.target.value })}
        />

        <select
          className="border p-2 rounded"
          value={form.tipo}
          onChange={(e) => setForm({ ...form, tipo: e.target.value })}
        >
          <option value="cliente">Cliente</option>
          <option value="operacional">Operacional</option>
          <option value="admin">Administrador</option>
        </select>

        <input
          type="password"
          placeholder={modoEdicao ? 'Nova senha (indisponível)' : 'Senha'}
          className="border p-2 rounded"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirmar senha"
          className="border p-2 rounded"
          value={form.confirmarSenha}
          onChange={(e) => setForm({ ...form, confirmarSenha: e.target.value })}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 md:col-span-3"
        >
          {modoEdicao ? 'Salvar Alterações' : 'Criar Usuário'}
        </button>

        {erro && <p className="text-red-600 col-span-3">{erro}</p>}
      </form>

      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Nome</th>
            <th className="p-3">E-mail</th>
            <th className="p-3">Tipo</th>
            <th className="p-3">Criado em</th>
            <th className="p-3">Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id} className="border-t">
              <td className="p-3">{u.nome}</td>
              <td className="p-3">{u.email}</td>
              <td className="p-3 capitalize">{u.tipo}</td>
              <td className="p-3 text-sm text-gray-500">
                {new Date(u.criado_em).toLocaleString()}
              </td>
              <td className="p-3 flex gap-2">
                <button
                  onClick={() => iniciarEdicao(u)}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Editar
                </button>
                <button
                  onClick={() => excluirUsuario(u.id)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
          {usuarios.length === 0 && (
            <tr>
              <td colSpan="5" className="p-4 text-center text-gray-500">
                Nenhum usuário encontrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
