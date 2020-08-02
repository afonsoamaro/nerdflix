import React from 'react';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

import { Main } from './styles';

function Base({ children }) {
  return (
    <>
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

export default Base;
