import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Login from './pages/Login';
import CadastroUsuario from './pages/CadastroUsuario';
import Admin from './pages/Admin';
import CadastrarProduto from './pages/CadastrarProduto';
import ProdutoDetalhe from './pages/ProdutoDetalhe';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Header />
      <div className="pt-20">
        <Routes>
          {/* Rotas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produto/:id" element={<ProdutoDetalhe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/carrinho" element={<Cart />} />

          {/* Rotas protegidas */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute permitido={['admin']}>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/cadastrar"
            element={
              <ProtectedRoute permitido={['admin', 'operacional']}>
                <CadastrarProduto />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
