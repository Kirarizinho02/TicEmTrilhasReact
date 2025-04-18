import { Cabecalho, Conteudo, Rodape } from './components';
import { PaginaInicial } from './pages';

import './App.css'

const App = () => {

  return (
      <>
        <Cabecalho/>
        <Conteudo> 
          <PaginaInicial/>
        </Conteudo>
        <Rodape nomeCriador="Kiras"/>
      </>
  )
};

export { App };
