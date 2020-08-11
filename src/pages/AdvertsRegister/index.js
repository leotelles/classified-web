import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

function AdvertsRegister() {
  const history = useHistory();

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('0');

  const [formData, setFormData] = useState({
    category: 1,
    title: '',
    general_info: '',
    description: '',
    price: 0,
    location: '',
    condition: '',
  });

  useEffect(() => {
    api.get('categories/1').then((response) => {
      setCategories(response.data);
    });
  }, []);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSelectCategory(event) {
    const category = event.target.value;
    setSelectedCategory(category);
    setFormData({ ...formData, category: category });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    console.log(formData);

    await api.post('adverts', formData);

    alert('Anúncio Criado!');

    history.push('/');
  }

  return (
    <>
      <h1>Cadastro de Anúncio</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="category">Categoria</label>
        <select
          name="category"
          id="category"
          value={selectedCategory}
          onChange={handleSelectCategory}
        >
          <option value="0">Selecione uma Categoria</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>

        <label htmlFor="title">Título</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleInputChange}
        ></input>

        <label htmlFor="general_info">Informações Gerais</label>
        <input
          type="text"
          id="general_info"
          name="general_info"
          onChange={handleInputChange}
        ></input>

        <label htmlFor="description">Descrição</label>
        <input
          type="text"
          id="description"
          name="description"
          onChange={handleInputChange}
        ></input>

        <label htmlFor="price">Preço</label>
        <input
          type="number"
          id="price"
          name="price"
          onChange={handleInputChange}
        ></input>

        <label htmlFor="location">Localição</label>
        <input
          type="text"
          id="location"
          name="location"
          onChange={handleInputChange}
        ></input>

        <label htmlFor="condition">Condição</label>
        <input
          type="text"
          id="condition"
          name="condition"
          onChange={handleInputChange}
        ></input>

        <button type="submit">Salvar Dados</button>
      </form>
    </>
  );
}

export default AdvertsRegister;
