import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';
import videosRepository from '../../../repositories/videos';
import Base from '../../Base';

function CadastroVideo() {
  const history = useHistory();

  const [categorias, setCategorias] = useState([]);
  const titulosCategorias = categorias.map(({ titulo }) => titulo);

  const valoresIniciais = {
    titulo: '',
    url: '',
    categoria: ''
  };

  const { handleChange, values } = useForm(valoresIniciais);

  function handleSubmit(event) {
    event.preventDefault();

    const categoriaId = categorias.find(
      (categoria) => categoria.titulo === values.categoria
    );
    videosRepository
      .create({
        titulo: values.titulo,
        url: values.url,
        categoriaId
      })
      .then(() => {
        history.push('/');
      });
  }

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
  }, []);

  console.log(categorias);

  return (
    <Base>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => handleSubmit(event)}>
        <FormField
          label="Título do Vídeo"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />
        <FormField
          label="URL"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />
        <FormField
          label="Categoria"
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={titulosCategorias}
        />
        <Button>Cadastrar</Button>
      </form>
      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </Base>
  );
}

export default CadastroVideo;
