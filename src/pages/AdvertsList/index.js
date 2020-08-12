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

  function handleDelete(id) {
    api.delete(`adverts/${id}`).then(() => {
      const newAdverts = adverts.filter((a) => a.id !== id);
      setAdverts(newAdverts);
    });
  }

  return (
    <>
      <h1>Lista de Anúncios</h1>
      <Link to="/ad-create">
        <button>Novo Anúncio</button>
      </Link>
      <ul>
        {adverts.map((ad) => (
          <li>
            {ad.title}
            <button onClick={() => handleDelete(ad.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default AdvertsList;
