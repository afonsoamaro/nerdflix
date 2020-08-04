import config from '../config';

const URL_CATEGORIES = `${config.URL_API}/categorias`;

function getAll(withVideos = '') {
  return fetch(URL_CATEGORIES + withVideos).then(async (respostaDoServer) => {
    if (respostaDoServer.ok) {
      const resposta = await respostaDoServer.json();
      return resposta;
    }
    throw new Error('Não foi possível pegar os dados');
  });
}

function getAllWithVideos() {
  return getAll('?_embed=videos');
}

export default {
  getAll,
  getAllWithVideos
};
