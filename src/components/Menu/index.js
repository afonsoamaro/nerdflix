import React from 'react';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';
// import ButtonLink from './ButtonLink';

import './styles.css';

function Menu() {
  return (
    <nav className='Menu'>
      <a href='/'>
        <img className='Logo' src={Logo} alt='Nerdflix' />
      </a>

      <Button as='a' className='ButtonLink' href='/'>
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
