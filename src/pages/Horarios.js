import React, { Component } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import {saveHorarios, getHorarios, deleteHorarios} from '../services/api';

//Para o funcionamento do BarLoader (spinners)
import {BarLoader} from 'react-spinners'
import { css } from '@emotion/core';
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;`;

export default class Horarios extends Component {

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

    limparDados = () => {
        this.setState({
            hrini: '',
            hrfim: '',
            diasemana: ''
        })
    }
    
    componentDidMount = async () => {
        this.atualizarDados()
    }    
    
    atualizarDados = async () => {
        this.setState({ loading: true })
        await getHorarios()
          .then(dados => this.setState({listaHorarios: dados}))
          .catch(erro => this.props.history.push("/Horarios"))
        this.setState({ loading: false })   

    }

    salvarDados = async () => {
        this.setState({ loading: true })
        await saveHorarios(this.state.hrini, this.state.hrfim, this.state.diasemana)
            .then(msg => this.setState({ successMessage: msg, errorMessage: "" }))
            .catch(msg => this.setState({ errorMessage: msg.message, successMessage: "" }))
        this.setState({ loading: false })
        this.atualizarDados()
        this.limparDados()
    }

    deleteDados(chave) {
        deleteHorarios(chave)
            .then(() => this.atualizarDados())
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
                                <div className="col-lg-1">                            
                                </div>                                
                                <div className="col-lg-10">                                                                                                       
                                    <Form>
                                        <Form.Group>
                                        <p> CADASTRO DE HORARIOS </p>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control 
                                                type="text" 
                                                placeholder="horário Início"
                                                value={this.state.hrini}
                                                onChange={
                                                    (e) => this.setState({hrini: e.target.value})
                                                }                                                                                    
                                            />
                                        </Form.Group>
                                                                    
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Horário Fim"
                                                value={this.state.hrfim}
                                                onChange={
                                                    (e) => this.setState({hrfim: e.target.value})
                                                }                                                                                                                                   
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Dia Semana"
                                                value={this.state.diasemana}
                                                onChange={
                                                    (e) => this.setState({diasemana: e.target.value})
                                                }                                                
                                            />
                                        </Form.Group>                                        

                                        <Form.Group>
                                            <Button onClick={() => this.salvarDados()}
                                                        variant="primary" 
                                                        type="submit">
                                                    GRAVAR
                                            </Button>
                                            &nbsp;&nbsp;&nbsp;&nbsp;                                   
                                            <Button onClick={() => this.props.history.push("/Admarea")}
                                                    variant="primary" 
                                                    type="submit">
                                                VOLTAR
                                            </Button>
                                        </Form.Group>     
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
                                            <p> LISTA </p>

                                            <Table striped bordered hover variant="dark">
                                                <thead>
                                                    <tr>
                                                    <th>HR INICIO</th>
                                                    <th>HR FIM</th>
                                                    <th>DIA SEMANA</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {this.state.listaHorarios.map((item,i)=>{
                                                    return <tr key={i}>
                                                        <td>{item.hrini}</td>
                                                        <td>{item.hrfim}</td>
                                                        <td>{item.diasemana}</td>
                                                        <td>
                                                            <button
                                                                onClick={() => {
                                                                    var agree = window.confirm("deseja deletar os dados??");
                                                                    if (agree)
                                                                        this.deleteDados(item.id)
                                                                    else
                                                                        return false;                                                                    
                                                                }}
                                                            >Excluir</button>                                                            
                                                        </td>
                                                    </tr>
                                                })}
                                                </tbody>                                        
                                            </Table>                                    

                                        </Form.Group>                                                                                                         
                                    </Form>                                    
                                </div>
                                <div className="col-lg-1">                                     
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
