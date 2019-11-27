import React, { Component } from 'react';
import { Form, Table } from 'react-bootstrap';
import {getHorarios} from '../services/api';

//Para o funcionamento do BarLoader (spinners)
import {BarLoader} from 'react-spinners'
import { css } from '@emotion/core';
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;`;

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hrini: '',
            hrfim: '',
            diasemana: '',
            errorMessage: '',
            successMessage: '',
            listaHorarios: [],
            loading: false
        }
    }

    componentDidMount = async () => {
        this.atualizarDados()
    }    
    
    atualizarDados = async () => {
        this.setState({ loading: true })
        await getHorarios()
          .then(dados => this.setState({listaHorarios: dados}))
          .catch(erro => this.props.history.push("/Home"))
        this.setState({ loading: false })   

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
                                    <div className="col-lg-1"></div>
                                    <div className="col-lg-10">
                                        <p>
                                            <br/>
                                            SEJA BEM VINDO AO HORA DA PELADA
                                            <br/>
                                            MARQUE AQUI SUA PELADA
                                            <br/>
                                            ESCOLHA SEU HORÁRIO E BORA LÁ
                                        </p>
                                        <Form.Group>
                                                <BarLoader
                                                    css={override}
                                                    sizeUnit={"px"}
                                                    size={150}
                                                    color={'#123abc'}
                                                    loading={this.state.loading}
                                                />
                                        </Form.Group>                                        
                                        <Form.Group>
                                            <Table striped bordered hover variant="dark">
                                                <thead>
                                                    <tr>
                                                    <th>HR.INICIO</th>
                                                    <th>HR.FIM</th>
                                                    <th>DIA DA SEMANA</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {this.state.listaHorarios.map((item,i)=>{
                                                    return <tr key={i}>
                                                        <td>{item.hrini}</td>
                                                        <td>{item.hrfim}</td>
                                                        <td>{item.diasemana}</td>

                                                    </tr>
                                                })}
                                                </tbody>                                        
                                            </Table>                                    

                                        </Form.Group>                                                                                                         

                                    </div>
                                    <div className="col-lg-1"></div> 
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
    {this.state.listaGinasios.map((item,i)=>{
        return <tr key={i}>
            <td>{item.nome}</td>
            <td>{item.endereco}</td>
            <td>{item.telefone}</td>
        </tr>
    })}
*/