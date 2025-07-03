import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton'; // ✅ novo import
import ProtectedRoute from './components/ProtectedRoute';

// 📦 Páginas principais
import Home from './pages/Home';
import ProdutoDetalhe from './pages/ProdutoDetalhe';
import Cart from './pages/Cart';
import Login from './pages/Login';

// 👤 Usuário
import CadastroUsuario from './pages/CadastroUsuario';
import CadastroUsuarioAdmin from './pages/CadastroUsuarioAdmin';
import Perfil from './pages/Perfil';
import AlterarSenha from './pages/AlterarSenha';

// ⚙️ Administração
import ListaProdutosAdmin from './pages/ListaProdutosAdmin';
import CadastrarProduto from './pages/CadastrarProduto';
import EditarProduto from './pages/EditarProduto';
import Newsletter from './pages/NewsletterAdmin';

// 🧾 Institucional
import ComoComprar from './pages/ComoComprar';
import Seguranca from './pages/Seguranca';
import TempoGarantia from './pages/TempoGarantia';
import Trocas from './pages/Trocas';

// 📄 Informações públicas
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

function App() {
  return (
    <Router>
      <Header />
      <div className="pt-20 min-h-screen bg-gray-50 text-gray-900">
        <Routes>

          {/* 🌐 Rotas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/produto/:id" element={<ProdutoDetalhe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />

          {/* 🧾 Páginas institucionais */}
          <Route path="/como-comprar" element={<ComoComprar />} />
          <Route path="/seguranca" element={<Seguranca />} />
          <Route path="/tempo-garantia" element={<TempoGarantia />} />
          <Route path="/trocas" element={<Trocas />} />

          {/* 🔐 Rotas protegidas */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute permitido={['admin']}>
                <ListaProdutosAdmin />
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
          <Route
            path="/admin/editar/:id"
            element={
              <ProtectedRoute permitido={['admin', 'operacional']}>
                <EditarProduto />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/cadastrar-usuario"
            element={
              <ProtectedRoute permitido={['admin']}>
                <CadastroUsuarioAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/alterar-senha"
            element={
              <ProtectedRoute permitido={['admin', 'operacional', 'cliente']}>
                <AlterarSenha />
              </ProtectedRoute>
            }
          />
          <Route
            path="/perfil"
            element={
              <ProtectedRoute permitido={['admin', 'operacional', 'cliente']}>
                <Perfil />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/newsletter"
            element={
              <ProtectedRoute permitido={['admin', 'operacional']}>
                <Newsletter />
              </ProtectedRoute>
            }
          />

        </Routes>
      </div>
      <Footer />
      <WhatsAppButton /> {/* ✅ botão sempre visível */}
    </Router>
  );
}

export default App;
