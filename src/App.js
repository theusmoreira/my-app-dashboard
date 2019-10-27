import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import Resumo from './components/Resumo/Resumo';
import Consulta from './components/Consultas/Consulta';
import Faturamento from './components/Faturamento/Faturamento';

class App extends Component {
  render() {
    return (
      <div>
        <MenuSuperior />
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Switch>
                <Route path="/" exact component={Resumo} />
                <Route path="/consultas" component={Consulta} />
                <Route path="/faturamento" component={Faturamento} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
