import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: red; */
  border: 1px solid gray;
`;

function Header() {
  return (
    <StyledHeader>
      <h1>CLASSIFICADOS</h1>
    </StyledHeader>
  );
}

export default Header;
