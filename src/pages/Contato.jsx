import React from 'react';

const Contato = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
        Fale Conosco
      </h1>

      <p className="text-gray-700 leading-relaxed mb-6 text-center">
        Estamos prontos para tirar suas dúvidas, receber sugestões e ouvir você!
      </p>

      <div className="text-center text-gray-800 space-y-2 mb-10">
        <p><strong>Telefone:</strong> (83) 3201-9700</p>
        <p><strong>E-mail:</strong> contato@tuliobicicletas.com.br</p>
        <p><strong>Instagram:</strong> @tuliobicicletas</p>
        <p><strong>Endereço:</strong> João Pessoa - PB</p>
      </div>
    </div>
  );
};

export default Contato;
