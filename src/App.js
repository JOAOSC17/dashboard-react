import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ListarEmpresas from './pages/ListarEmpresas/ListarEmpresas';
import CadastrarEmpresas from './pages/Empresas/CadastrarEmpresas';
import EditarEmpresa from './pages/Empresas/EditarEmpresa';

/*<Home/>
<ListarEmpresas/>

      <CadastrarEmpresas/>*/
function App() {
  return (
    <div className="App">
      <Header/>
      <EditarEmpresa/>
    </div>
  );
}

export default App;
