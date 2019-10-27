import React, { Component } from 'react';

import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import Resumo from './components/Resumo/Resumo';
import Consulta from './components/Consultas/Consulta';
import Faturamento from './components/Faturamento/Faturamento';

class App extends Component {
  render() {
    return (
      <div>
        <MenuSuperior />
        <Resumo />
        <Consulta />
        <Faturamento />
      </div>
    )
  }
}
export default App;
