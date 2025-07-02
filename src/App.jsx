import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Login from './pages/Login';
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
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/cadastrar" element={<CadastrarProduto />} />
          <Route path="/produto/:id" element={<ProdutoDetalhe />} />
          <Route path="/carrinho" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

