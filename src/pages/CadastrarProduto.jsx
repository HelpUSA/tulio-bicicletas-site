import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function CadastrarProduto() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from('products').insert([
      {
        name: nome,
        description: descricao,
        price: parseFloat(preco),
      },
    ]);

    if (error) {
      setMensagem('Erro ao cadastrar: ' + error.message);
    } else {
      setMensagem('Produto cadastrado com sucesso!');
      setNome('');
      setDescricao('');
      setPreco('');
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Cadastrar Produto</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Descrição</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            rows="3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Preço</label>
          <input
            type="number"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Salvar
        </button>
      </form>

      {mensagem && (
        <p className="mt-4 text-sm text-center text-blue-600">{mensagem}</p>
      )}
    </div>
  );
}
