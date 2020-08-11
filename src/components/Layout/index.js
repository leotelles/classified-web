import React from 'react';

import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';

function Layout({ children }) {
  return (
    <>
      <Header />
      <Menu />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
