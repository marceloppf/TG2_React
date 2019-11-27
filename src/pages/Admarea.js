import React, { Component } from 'react';
import {logout} from '../services/auth';
import * as api from '../services/Services'
import {getContact,deleteContact} from '../services/api';
import { Form, Button, Table } from 'react-bootstrap';

//Para o funcionamento do BarLoader (spinners)
import {BarLoader} from 'react-spinners'
import { css } from '@emotion/core';
import { async } from 'q';
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;`;

export default class Admarea extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            errorMessage: '',
            successMessage: '',
            listContact:[],
            escolas:[],
            loading: false
        }
    }    

    componentDidMount = async () => {
        this.atualizarDados()
        this.atualizarEscolas()      
    }

    atualizarEscolas = async () => {
        this.setState({ loading: true })        
        await api.getEscola()
            .then(escolas => { this.setState({ escolas: escolas.data[1]}) })
            .catch(erro => this.props.history.push("/Admarea"))
            this.setState({ loading: false })             
    }

    atualizarDados = async () => {
        //this.setState({ loading: true })
        await getContact()
          .then(dados => this.setState({listContact: dados}))
          .catch(erro => this.props.history.push("/Admarea"))
        //this.setState({ loading: false })   
    }

    deleteDados(chave) {
        deleteContact(chave)
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
                                    <div className="col-lg-2">
                                        <Form>
                                            <Form.Group>
                                                <Button onClick={() => logout() .then(() => this.props.history.push("/Login")) } 
                                                        type="submit">
                                                    LOGOUT
                                                </Button>
                                            </Form.Group>                                            
                                            <Form.Group>
                                                <Button onClick={() => this.props.history.push("/Ginasios") } 
                                                        type="submit">
                                                    GINASIOS
                                                </Button>
                                            </Form.Group>
                                            <Form.Group>
                                                <Button onClick={() => this.props.history.push("/Horarios") } 
                                                        type="submit">
                                                    HORARIOS
                                                </Button>
                                            </Form.Group>
                                            <Form.Group>
                                                <Button onClick={() => logout() .then(() => this.props.history.push("/Login")) } 
                                                        type="submit">
                                                    CLIENTES
                                                </Button>
                                            </Form.Group>                                                                                                                   
                                        </Form>
                                    </div>
                                    <div className="col-lg-10">
                                        <p>
                                            RECADOS
                                        </p>                                                                    
                                        <br/>
                                        <Table striped bordered hover variant="dark">
                                            <thead>
                                                <tr>
                                                    <th>NAME</th>
                                                    <th>EMAIL</th>
                                                    <th>SUBJECT</th>
                                                    <th>MESSAGE</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.listContact.map((item,i)=>{
                                                        return <tr key={i}>
                                                            <td>{item.name}</td>
                                                            <td>{item.email}</td>
                                                            <td>{item.subject}</td>
                                                            <td>{item.message}</td>
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
                                        <br/>
                                        <br/>
                                        <p>
                                            ESCOLAS PASSO FUNDO - Enem mínimo 550
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
                                        <br/>                                        
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