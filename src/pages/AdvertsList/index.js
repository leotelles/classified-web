import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

function AdvertsList() {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    api.get('adverts-all').then((response) => {
      setAdverts(response.data);
    });
  }, []);

  return (
    <>
      <h1>Lista de Anúncios</h1>
      <Link to="/ad-create">
        <button>Novo Anúncio</button>
      </Link>
      <ul>
        {adverts.map((ad) => (
          <li>{ad.title}</li>
        ))}
      </ul>
    </>
  );
}

export default AdvertsList;
