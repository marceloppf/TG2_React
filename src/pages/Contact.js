import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import {saveContact} from '../services/api'

//Para o funcionamento do BarLoader (spinners)
import {BarLoader} from 'react-spinners'
import { css } from '@emotion/core';
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;`;

export default class Contact extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            errorMessage: '',
            successMessage: '',
            loading: false
        }
    }

    limparDados = () => {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }

    salvarDados = async () => {
        this.setState({ loading: true })
        await saveContact(this.state.name, this.state.email, this.state.subject, this.state.message )
            .then(msg => this.setState({ successMessage: msg, errorMessage: "" }))
            .catch(msg => this.setState({ errorMessage: msg.message, successMessage: "" }))
        this.setState({ loading: false })
        this.limparDados()
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
                                    <div className="col-lg-4"></div>
                                    <div className="col-lg-4">
                                    <Form>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Control type="text" 
                                                          placeholder="Name"
                                                          value={this.state.name}
                                                          onChange={(e) => this.setState({name: e.target.value})} />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Control type="email" 
                                                          placeholder="name@example.com"
                                                          value={this.state.email} 
                                                          onChange={(e) => this.setState({email: e.target.value})}/>
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Control type="text" 
                                                          placeholder="Subject"
                                                          value={this.state.subject}
                                                          onChange={(e) => this.setState({subject: e.target.value})}/>
                                        </Form.Group>  
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Control as="textarea" 
                                                          rows="3" 
                                                          placeholder="Message" 
                                                          value={this.state.message}
                                                          onChange={(e) => this.setState({message: e.target.value})}/>
                                        </Form.Group>
                                        <Button variant="primary" 
                                                type="submit"
                                                onClick={() => this.salvarDados()}>
                                            Submit
                                        </Button>  
                                    </Form>
                                    </div>
                                    <div className="col-lg-4"></div> 
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

//<Form.Label>Name</Form.Label>