import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../lib/useAuth';

/**
 * Componente para proteger rotas.
 *
 * @param {ReactNode} children - componente filho (a rota protegida).
 * @param {string[]} permitido - array com os tipos de usuário permitidos.
 */
export default function ProtectedRoute({ children, permitido = [] }) {
  const { usuario, carregando } = useAuth();

  if (carregando) return <p>Carregando...</p>;

  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  const tipo = localStorage.getItem('tipoUsuario');

  if (permitido.length > 0 && !permitido.includes(tipo)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
