import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import hair from '../../assets/hair_big.jpg';

function AdvertsDetail() {
  const { id } = useParams();

  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    api.get(`ad/${id}`).then((response) => {
      setAdverts(response.data);
    });
  }, []);

  return (
    <>
      {adverts.map((ad) => (
        <>
          <h1>{ad.title}</h1>
          <img src={hair}></img>
          <p>{ad.general_info}</p>
          <p>{ad.description}</p>
          <h3>{ad.price}</h3>
          <p>{ad.location}</p>
          <p>{ad.condition}</p>
        </>
      ))}
    </>
  );
}

export default AdvertsDetail;
