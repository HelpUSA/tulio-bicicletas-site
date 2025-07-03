import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-6 text-center text-green-700">Painel do Administrador</h1>
      
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <Link
          to="/admin/cadastrar"
          className="p-4 bg-green-100 hover:bg-green-200 rounded shadow text-center font-semibold transition"
        >
          ➕ Cadastrar Produto
        </Link>

        <Link
          to="/admin/produtos"
          className="p-4 bg-blue-100 hover:bg-blue-200 rounded shadow text-center font-semibold transition"
        >
          📦 Gerenciar Produtos
        </Link>

        <Link
          to="/admin/cadastrar-usuario"
          className="p-4 bg-yellow-100 hover:bg-yellow-200 rounded shadow text-center font-semibold transition"
        >
          👤 Cadastrar Usuário
        </Link>

        <Link
          to="/admin/usuarios"
          className="p-4 bg-purple-100 hover:bg-purple-200 rounded shadow text-center font-semibold transition"
        >
          🧾 Gerenciar Usuários
        </Link>

        <Link
          to="/"
          className="p-4 bg-gray-100 hover:bg-gray-200 rounded shadow text-center font-semibold transition col-span-1 sm:col-span-2"
        >
          ⬅️ Voltar para Home
        </Link>
      </div>
    </div>
  );
}
