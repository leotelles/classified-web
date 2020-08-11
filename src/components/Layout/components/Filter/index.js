import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import api from '../../../../services/api';

const StyledFilter = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: yellow; */
  border: 1px solid gray;
`;

function Filter() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('0');

  const [formData, setFormData] = useState({
    search: '',
    category: 1,
  });

  useEffect(() => {
    api.get('categories').then((response) => {
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

  return (
    <StyledFilter>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Digite algo para pesquisar"
        onChange={handleInputChange}
      ></input>

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
    </StyledFilter>
  );
}

export default Filter;
