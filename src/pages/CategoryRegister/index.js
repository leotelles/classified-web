import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

function CategoryRegister() {
  const history = useHistory();

  const [formData, setFormData] = useState({
    title: '',
    level: 0,
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    console.log('entrou');

    await api.post('categories', formData);

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

        <label htmlFor="level">Nível</label>
        <input
          type="number"
          id="level"
          name="level"
          onChange={handleInputChange}
        ></input>

        <button type="submit">Salvar Dados</button>
      </form>
    </>
  );
}

export default CategoryRegister;
