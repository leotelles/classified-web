import React from 'react';

import Header from './components/Header';
import Menu from './components/Menu';
import Filter from './components/Filter';
import Footer from './components/Footer';

function Layout({ children }) {
  return (
    <>
      <Header />
      <Menu />
      <Filter />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
