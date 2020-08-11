import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get('categories-all').then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <>
      <h1>Lista de Categorias</h1>
      <Link to="/category">
        <button>Nova Categoria</button>
      </Link>
      <ul>
        {categories.map((category) => (
          <li>{category.title}</li>
        ))}
      </ul>
    </>
  );
}

export default CategoryList;
