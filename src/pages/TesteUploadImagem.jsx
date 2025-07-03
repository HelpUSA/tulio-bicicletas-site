import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function TesteUploadImagem() {
  const [imagem, setImagem] = useState(null);
  const [mensagem, setMensagem] = useState('');
  const [urlImagem, setUrlImagem] = useState('');

  const handleUpload = async () => {
    if (!imagem) {
      setMensagem('Selecione uma imagem primeiro.');
      return;
    }

    const nomeArquivo = `${Date.now()}-${imagem.name}`;

    const { data, error } = await supabase.storage
      .from('produtos')
      .upload(nomeArquivo, imagem);

    if (error) {
      setMensagem(`❌ Erro: ${error.message}`);
    } else {
      const url = `https://nfiyjubkhqwpdyunngnp.supabase.co/storage/v1/object/public/produtos/${data.path}`;
      setUrlImagem(url);
      setMensagem('✅ Upload realizado com sucesso!');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow text-center">
      <h2 className="text-xl font-bold mb-4">Teste de Upload de Imagem</h2>
      
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImagem(e.target.files[0])}
        className="mb-4"
      />
      
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Enviar
      </button>

      {mensagem && <p className="mt-4">{mensagem}</p>}

      {urlImagem && (
        <div className="mt-4">
          <p>Imagem enviada:</p>
          <img src={urlImagem} alt="Upload" className="mt-2 max-h-64 mx-auto" />
        </div>
      )}
    </div>
  );
}
