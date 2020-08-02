import React from 'react';
import { Link } from 'react-router-dom';
import Base from '../../Base';

function CadastroVideo() {
  return (
    <Base>
      <h1>Cadastro de Video</h1>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </Base>
  );
}

export default CadastroVideo;
