import React, { Component } from 'react';


export default class Consultas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            realizadas: [],
            marcadas: []
        };
    }

    componentDidMount() {
        fetch("http://www.devup.com.br/php/api-dashboard/api/consultas")
            .then(resultado => resultado.json().then(
                dados => this.setState(dados)
            )
            );
    }

    render() {
        return (
            <div>
                <h2 className="mt-2 text-center" >Consultas</h2>
                <div className="row">
                    <div className="col">
                        <div className="card mt-2">
                            <div className="card-header text-center">Realizadas</div>
                            <table className="table">
                                <thead>
                                    <tr className="text-center">
                                        <th>Especialidades</th>
                                        <th>Quantidade</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {
                                        this.state.realizadas.map((item, indice) => {
                                            return (
                                                <tr key={indice}>
                                                    <td>{item.especialidade}</td>
                                                    <td>{item.quantidade}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mt-2">
                            <div className="card-header text-center">Marcadas</div>
                            <table className="table">
                                <thead>
                                    <tr className="text-center">
                                        <th>Especialidades</th>
                                        <th>Quantidade</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {
                                        this.state.marcadas.map((item, indice) => {
                                            return (
                                                <tr key={indice}>
                                                    <td>{item.especialidade}</td>
                                                    <td>{item.quantidade}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

