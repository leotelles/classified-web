import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

function CategoryRegister() {
  const history = useHistory();

  const [mothers, setMothers] = useState([]);
  const [selectedMother, setSelectedMother] = useState('0');

  const [formData, setFormData] = useState({
    title: '',
    level: 0,
    mother: null,
  });

  useEffect(() => {
    api.get('categories').then((response) => {
      setMothers(response.data);
    });
  }, []);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSelectMother(event) {
    const mother = event.target.value;
    setSelectedMother(mother);
    setFormData({ ...formData, mother: mother });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    console.log(formData);

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

        <label htmlFor="uf">Categoria Mãe</label>
        <select
          name="mother"
          id="mother"
          value={selectedMother}
          onChange={handleSelectMother}
        >
          <option value="0">Selecione uma Categoria</option>
          {mothers.map((mother) => (
            <option key={mother.id} value={mother.id}>
              {mother.title}
            </option>
          ))}
        </select>

        <button type="submit">Salvar Dados</button>
      </form>
    </>
  );
}

export default CategoryRegister;
