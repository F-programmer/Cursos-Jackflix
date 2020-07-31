import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/index';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Page404 from './pages/page404';
import CadastroVideo from './pages/cadastro/videos';
import CadastroCategoria from './pages/cadastro/categoria';

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/cadastro/video/' component={CadastroVideo} />
      <Route path='/cadastro/categoria/' component={CadastroCategoria} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


/* <Route component={() => (<div>Página 404</div>)} /> */