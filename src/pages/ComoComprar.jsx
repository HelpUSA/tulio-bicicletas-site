// pages/ComoComprar.jsx
import React from 'react';

export default function ComoComprar() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Como comprar</h1>
      <p className="mb-4">Facilitamos sua experiência de compra:</p>
      <ol className="list-decimal ml-6 space-y-2">
        <li>Explore nossas páginas de produtos e clique no ícone "Comprar" ou "Ver Detalhes" para mais informações.</li>
        <li>Prossiga navegando até escolher todos os produtos desejados. Clique em "Finalizar" para concluir sua compra.</li>
        <li>Faça login com seu e-mail e senha ou cadastre-se rapidamente, se necessário.</li>
        <li>Escolha a opção de envio, trabalhamos com transportadora terceirizada.</li>
        <li>Selecione a forma de pagamento desejada.</li>
        <li>Instruções finais serão enviadas por e-mail após a conclusão da compra.</li>
      </ol>
    </div>
  );
}