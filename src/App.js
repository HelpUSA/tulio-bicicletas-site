import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Produtos from './pages/Produtos';
import Login from './pages/Login'; // já criado
// import CadastroProduto from './pages/CadastroProduto'; // opcional para depois

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Início</Link>
          <Link to="/login">Login</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/cadastrar" element={<CadastroProduto />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
