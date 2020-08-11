import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import { DivAdverts } from './styles';

import AdCard from '../../components/AdCard';

function Ads() {
  const { category } = useParams();

  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    api.get(`adverts/${category}`).then((response) => {
      setAdverts(response.data);
    });
  }, []);

  return (
    <DivAdverts>
      {adverts.map((ad) => (
        <AdCard key={ad.id} ad={ad} />
      ))}
    </DivAdverts>
  );
}

export default Ads;
