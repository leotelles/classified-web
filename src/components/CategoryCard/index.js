import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { CategoryStyle } from './styles';

import api from '../../services/api';

function CategoryCard({ category }) {
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    api.get(`categories/${category.id}`).then((response) => {
      setSubCategories(response.data);
    });
  }, []);

  return (
    <CategoryStyle>
      <h2>{category.title}</h2>

      {subCategories.map((sub) => (
        <p key={sub.id}>
          <Link to={`/ads/${sub.id}`}>{sub.title}</Link>
        </p>
      ))}
    </CategoryStyle>
  );
}

export default CategoryCard;
