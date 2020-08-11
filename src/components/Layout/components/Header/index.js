import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  width: 100%;
  height: 150px;
  background: red;
`;

function Header() {
  return <StyledHeader />;
}

export default Header;
