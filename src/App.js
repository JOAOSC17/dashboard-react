import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ListarEmpresas from './pages/ListarEmpresas/ListarEmpresas';

/*<Home/>*/
function App() {
  return (
    <div className="App">
      <Header/>
      <ListarEmpresas/>
    </div>
  );
}

export default App;
