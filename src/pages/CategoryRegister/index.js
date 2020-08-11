import React from 'react';

function CategoryRegister() {
  return (
    <>
      <h1>Cadastro de Categorias</h1>
      <form>
        <label htmlFor="title">Título</label>
        <input type="text" id="title" name="title"></input>
      </form>
    </>
  );
}

export default CategoryRegister;
