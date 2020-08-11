import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledMenu = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: green;
`;

function Menu() {
  return (
    <StyledMenu>
      <Link to="/panel">
        <button>Painel</button>
      </Link>
    </StyledMenu>
  );
}

export default Menu;
