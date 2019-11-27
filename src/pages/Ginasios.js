import React, { Component } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import {saveGinasio, getGinasios, deleteGinasios} from '../services/api';

//Para o funcionamento do BarLoader (spinners)
import {BarLoader} from 'react-spinners'
import { css } from '@emotion/core';
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;`;

export default class Ginasios extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            endereco: '',
            telefone: '',
            errorMessage: '',
            successMessage: '',
            listaGinasios: [],
            loading: false
        }
    }

    limparDados = () => {
        this.setState({
            nome: '',
            endereco: '',
            telefone: ''
        })
    }

    componentDidMount = async () => {
        this.atualizarDados()
    }    
    
    atualizarDados = async () => {
        this.setState({ loading: true })
        await getGinasios()
          .then(dados => this.setState({listaGinasios: dados}))
          .catch(erro => this.props.history.push("/Ginasios"))
        this.setState({ loading: false })   

    }

    salvarDados = async () => {
        this.setState({ loading: true })
        await saveGinasio(this.state.nome, this.state.endereco, this.state.telefone)
            .then(msg => this.setState({ successMessage: msg, errorMessage: "" }))
            .catch(msg => this.setState({ errorMessage: msg.message, successMessage: "" }))
        this.setState({ loading: false })
        this.atualizarDados()
        this.limparDados()
    }

    deleteDados(chave) {
        deleteGinasios(chave)
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
                                        <p> CADASTRO DE GINASIOS </p>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Nome do Ginásio"
                                                value={this.state.nome}
                                                onChange={
                                                    (e) => this.setState({nome: e.target.value})
                                                }                                                                                    
                                            />
                                        </Form.Group>
                                                                    
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Endereço"
                                                value={this.state.endereco}
                                                onChange={
                                                    (e) => this.setState({endereco: e.target.value})
                                                }                                                                                                                                   
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Telefone"
                                                value={this.state.telefone}
                                                onChange={
                                                    (e) => this.setState({telefone: e.target.value})
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
                                                    <th>Nome</th>
                                                    <th>Endereço</th>
                                                    <th>Telefone</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {this.state.listaGinasios.map((item,i)=>{
                                                    return <tr key={i}>
                                                        <td>{item.nome}</td>
                                                        <td>{item.endereco}</td>
                                                        <td>{item.telefone}</td>
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


/*
<Form.Group controlId="formBasicPassword">
<Form.Control 
    type="password" 
    placeholder="Password"                                        
    value={this.state.password}
    onChange={
        (e) => this.setState({password: e.target.value})
    } />
</Form.Group>
<Form.Group>
<Button onClick={() => this.login()} 
        variant="primary" 
        type="submit">
    LOGIN
</Button>
</Form.Group>
<Form.Group>
<Button onClick={() => this.saveuser()}
        variant="primary" 
        type="submit">
    NEW USER
</Button>
</Form.Group>
*/