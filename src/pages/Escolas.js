import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import * as api from '../services/Services'
import { BarLoader } from 'react-spinners';
import { css } from '@emotion/core';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;`;

export default class Escolas extends Component {

    constructor(props) {
        super(props)

        this.state = {
            escolas: [],
            loading: true
        }
    }

    componentDidMount() {
        api.getEscola()
            .then(escolas => { this.setState({ escolas: escolas.data[1]})
                               this.setState({ loading: false }) })
            console.log(this.state.escolas)                               
    }

    render() {
        return (
            <div> 
                <section className="home_banner_area">
                    <div className="banner_inner">
                        <div className="container">
                            <div className="row">
                                <div align="center" className="col-lg-12">
                                    <div className="home_right_box">

                                        <div className="col-lg-12">
                                            <p>
                                                ESCOLAS PASSO FUNDO  - Enem mínimo 550
                                            </p>
                                            <BarLoader
                                                css={override}
                                                sizeUnit={"px"}                                                
                                                height= {10}
                                                with= {250}
                                                color={'white'}
                                                loading={this.state.loading}
                                            /> 
                                            <Table striped bordered hover variant="dark">
                                                <thead>
                                                    <tr>
                                                        <th>Escola</th>
                                                        <th>Cod.Escola</th>
                                                        <th>Enem</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {this.state.escolas.map((itens, i) => {
                                                        return <tr key={i}>
                                                            <td>{itens.nome} </td>
                                                            <td>{itens.cod}</td>
                                                            <td>{itens.enemMediaGeral}</td>                                                            
                                                        </tr>
                                                    })}
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

/*
                                                    {this.state.escolas.map((itens, i) => {
                                                        return <tr key={i}>
                                                            <td>{itens.nome} </td>                                                            
                                                            <td>{itens.cod}</td>
                                                            <td>{itens.enemMediaGeral}</td>
                                                        </tr>
                                                    })}
*/