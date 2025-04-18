import { BrowserRouter } from 'react-router-dom';

import { Cabecalho, Conteudo, Rodape } from './components';
import { PaginaInicial } from './pages';

import { Router } from './Router';

import './App.css'

const App = () => {

  return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
  )
};

export { App };
