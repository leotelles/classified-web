import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

function Ads() {
  const { category } = useParams();

  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    api.get(`adverts/${category}`).then((response) => {
      setAdverts(response.data);
    });
  }, []);

  return (
    <>
      {adverts.map((ad) => (
        <p key={ad.id}>{ad.title}</p>
      ))}
    </>
  );
}

export default Ads;
