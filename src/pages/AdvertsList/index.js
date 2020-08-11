import React from 'react';
import { Link } from 'react-router-dom';

function AdvertsList() {
  return (
    <>
      <h1>Lista de Anúncios</h1>
      <Link to="/ad">
        <button>Novo Anúncio</button>
      </Link>
    </>
  );
}

export default AdvertsList;
