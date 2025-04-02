import { Cabecalho, Conteudo, Rodape } from './components';

import './App.css'

const App = () => {

  return (
      <>
        <Cabecalho/>
        <Conteudo> 
          <h1>Titulo</h1>
          <p>Texto do parágrafo</p>
        </Conteudo>
        <Rodape nomeCriador="Kiras"/>
      </>
  )
};

export { App };
