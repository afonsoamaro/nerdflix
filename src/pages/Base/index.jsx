import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import Main from './styles';

function Base({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>{children}</Main>
      <Footer />
    </>
  );
}

Base.defaultProps = {
  paddingAll: undefined
};

Base.propTypes = {
  paddingAll: PropTypes.number,
  children: PropTypes.array.isRequired
};

export default Base;
