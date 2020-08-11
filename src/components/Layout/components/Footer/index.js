import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  width: 100%;
  height: 50px;
  bottom: 0;
  background: blue;
`;

function Header() {
  return <StyledFooter />;
}

export default Header;
