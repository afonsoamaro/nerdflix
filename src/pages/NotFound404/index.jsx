import React from 'react';

// import { Container } from './styles';

// Desafio master blaster na descrição
// Colocar um jogo ou brincadeira nessa página:
function NotFound404() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Ops, quebrou tudo :O</h1>
      <p>
        <a href="/">Você pode jogar ou voltar pra home :)</a>
      </p>
      <p>
        Ou
        <a href="https://www.youtube.com/watch?v=jOAU81jdi-c&list=PLTcmLKdIkOWmeNferJ292VYKBXydGeDej">
          aprender a fazer o jogo
        </a>
      </p>
      {/*
      Pessoal, quem quiser fazer o desafio do Flappy Bird, da pra usar esse iframe aqui:
      - https://codepen.io/omariosouto/pen/pogmdGE

      E quem quiser programar o jogo:
      - https://www.youtube.com/watch?v=jOAU81jdi-c&list=PLTcmLKdIkOWmeNferJ292VYKBXydGeDej
    */}
      <iframe
        title="Flappy Bird Game"
        src="https://mariosouto.com/flappy-bird-devsoutinho/"
        width="340"
        height="600"
      />
    </div>
  );
}

export default NotFound404;
