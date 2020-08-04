import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Loader from '../../components/Loader';
import categoriasRepository from '../../repositories/categorias';
import Base from '../Base';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  useEffect(() => {
    categoriasRepository
      .getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Base paddingAll={0}>
      {dadosIniciais.length === 0 && <Loader />}

      {dadosIniciais.map((categoria, index) => {
        if (index === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].descricao}
              />

              <Carousel ignoreFirstVideo category={dadosIniciais[0]} />
            </div>
          );
        }
        return <Carousel key={categoria.id} category={categoria} />;
      })}
    </Base>
  );
}

export default Home;
