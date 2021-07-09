import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ListarEmpresas from './pages/ListarEmpresas/ListarEmpresas';
import CadastrarEmpresas from './pages/Empresas/CadastrarEmpresas';
import EditarEmpresa from './pages/Empresas/EditarEmpresa';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
/*
*/
function App() {
  return (
    <Router>
      <Header/>
      <Switch>
      <Route exact path="/" >
      <Home/>
      </Route>
      <Route path="/lista">
      <ListarEmpresas/>
      </Route>
      <Route path="/cadastro">
      <CadastrarEmpresas/>
      </Route>
      <Route path="/editar">
      <EditarEmpresa/>
      </Route>
      <Route path="*">
      <header>
        ESSA PÁGINA NÃO EXISTE
      </header>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
