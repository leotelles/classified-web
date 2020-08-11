import React from 'react';
import { Link } from 'react-router-dom';

function Panel() {
  return (
    <>
      <h1>Painel</h1>
      <p>Será acessado por usuários logados e autenticados</p>
      <Link to="/categories">
        <button>Categorias</button>
      </Link>
      <Link to="/adverts">
        <button>Anúncios</button>
      </Link>
    </>
  );
}

export default Panel;
