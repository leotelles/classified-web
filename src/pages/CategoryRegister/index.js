import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

function CategoryRegister() {
  const history = useHistory();

  const [formData, setFormData] = useState({
    title: '',
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const { title } = formData;

    const data = new FormData();

    data.append('title', title);

    await api.post('categories', data);

    alert('Categoria Criada!');

    history.push('/');
  }

  return (
    <>
      <h1>Cadastro de Categorias</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleInputChange}
        ></input>
      </form>
    </>
  );
}

export default CategoryRegister;
