import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const Newsletter = () => {
  const [emails, setEmails] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [emailNovo, setEmailNovo] = useState('');
  const [editandoId, setEditandoId] = useState(null);
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState(false);

  useEffect(() => {
    buscarEmails();
  }, []);

  const buscarEmails = async () => {
    setCarregando(true);
    const { data, error } = await supabase
      .from('newsletter')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error) setEmails(data);
    else console.error('Erro ao buscar e-mails:', error);

    setCarregando(false);
  };

  const handleSalvar = async () => {
    if (!emailNovo || !emailNovo.includes('@')) {
      setErro(true);
      setMensagem('E-mail inválido.');
      return;
    }

    const { data: existente } = await supabase
      .from('newsletter')
      .select('*')
      .eq('email', emailNovo)
      .maybeSingle();

    if (existente && existente.id !== editandoId) {
      setErro(true);
      setMensagem('E-mail já cadastrado.');
      return;
    }

    let resposta;
    if (editandoId) {
      resposta = await supabase
        .from('newsletter')
        .update({ email: emailNovo })
        .eq('id', editandoId);
    } else {
      resposta = await supabase
        .from('newsletter')
        .insert([{ email: emailNovo }]);
    }

    if (resposta.error) {
      setErro(true);
      setMensagem('Erro ao salvar.');
    } else {
      setErro(false);
      setMensagem(editandoId ? 'Atualizado com sucesso!' : 'Adicionado com sucesso!');
      setEmailNovo('');
      setEditandoId(null);
      buscarEmails();
    }
  };

  const handleEditar = (item) => {
    setEmailNovo(item.email);
    setEditandoId(item.id);
    setMensagem('');
  };

  const handleCancelarEdicao = () => {
    setEmailNovo('');
    setEditandoId(null);
    setMensagem('');
  };

  const handleExcluir = async (id) => {
    const confirmacao = window.confirm('Deseja realmente excluir este e-mail?');
    if (!confirmacao) return;

    const { error } = await supabase
      .from('newsletter')
      .delete()
      .eq('id', id);

    if (error) {
      setErro(true);
      setMensagem('Erro ao excluir.');
    } else {
      setErro(false);
      setMensagem('Excluído com sucesso.');
      buscarEmails();
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mb-6 text-center text-green-700">
        Administração da Newsletter
      </h1>

      {/* Formulário de inclusão/edição */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="email"
          placeholder="Digite o e-mail"
          value={emailNovo}
          onChange={(e) => setEmailNovo(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleSalvar}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          {editandoId ? 'Atualizar' : 'Adicionar'}
        </button>

        {/* ✅ Botão de cancelar edição */}
        {editandoId && (
          <button
            onClick={handleCancelarEdicao}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
          >
            Cancelar
          </button>
        )}
      </div>

      {mensagem && (
        <p className={`mb-4 text-sm ${erro ? 'text-red-600' : 'text-green-600'}`}>
          {mensagem}
        </p>
      )}

      {/* Lista de e-mails */}
      {carregando ? (
        <p className="text-center text-gray-500">Carregando...</p>
      ) : emails.length === 0 ? (
        <p className="text-center text-gray-500">Nenhum e-mail cadastrado.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow rounded-lg overflow-hidden">
            <thead className="bg-green-600 text-white text-sm uppercase">
              <tr>
                <th className="p-4 text-left">E-mail</th>
                <th className="p-4 text-left">Data</th>
                <th className="p-4 text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
              {emails.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-4">{item.email}</td>
                  <td className="p-4 text-gray-500">
                    {new Date(item.created_at).toLocaleString('pt-BR')}
                  </td>
                  <td className="p-4 text-center space-x-2">
                    <button
                      onClick={() => handleEditar(item)}
                      className="text-blue-600 hover:underline"
                    >
                      ✏️ Editar
                    </button>
                    <button
                      onClick={() => handleExcluir(item.id)}
                      className="text-red-600 hover:underline"
                    >
                      🗑️ Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Newsletter;
