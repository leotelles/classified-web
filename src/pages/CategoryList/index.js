import React from 'react';
import { Link } from 'react-router-dom';

function CategoryList() {
  return (
    <>
      <h1>Lista de Categorias</h1>
      <Link to="/category">
        <button>Nova Categoria</button>
      </Link>
    </>
  );
}

export default CategoryList;
