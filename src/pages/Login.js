import React, { Component } from 'react';
import {login, signUp} from '../services/auth'
import { Form, Button } from 'react-bootstrap';

//Para o funcionamento do BarLoader (spinners)
import {BarLoader} from 'react-spinners'
import { css } from '@emotion/core';
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
          email: "",
          password: "",
          remember: "0",
          errorMessage: "",
          successMessage: "",
          loading: false,
          check: false
        }
    }    

    //Stado do checkbox
    changeState=()=> {
        this.setState({
          check: !this.state.check
        });
    }    

    //Testes para gravar e-mail na Local Storage
    componentWillMount(){
        var checkboxStorange = localStorage.getItem('check');
        console.log(checkboxStorange)
        if (checkboxStorange === true || checkboxStorange === 'true'){
          this.setState({ check: true })
        }
        if (checkboxStorange === false || checkboxStorange === 'false'){
          this.setState({ check: false })
        }
        if (checkboxStorange === true || checkboxStorange === 'true') {
         var email = localStorage.getItem('email');
         this.setState({email: email})
        }
        if (checkboxStorange === false || checkboxStorange === 'false') {
            var email = localStorage.removeItem('email');
            this.setState({email: email})
           }        
    }

    login = async() => {
        this.setState({ loading: true })

        var checkbox = this.state.check
        if (checkbox === true || checkbox === 'true'){
          localStorage.setItem('check', this.state.check)
          localStorage.setItem('email', this.state.email)
        }else{
          localStorage.setItem('check', this.state.check)
        }

        await login(this.state.email, this.state.password)
          .then(() => this.props.history.push("/Admarea"))
          .catch(erro => this.setState({ errorMessage: erro.message }))
        this.setState({ loading: false })
    }

    saveuser = async () => {
        this.setState({ loading: true })
        await signUp(this.state.email, this.state.password)
          .then(msg => this.setState({ successMessage: msg, errorMessage: "Não Criou Usuário" }))
          .catch(msg => this.setState({ errorMessage: msg.message, successMessage: "Usuário Criádo" }))
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
                                <div className="col-lg-4"></div>                                
                                <div className="col-lg-4">                                                                                                       
                                <Form>
                                    <Form.Group>
                                    <p> ACESS ADMINISTRATIVE AREA </p>
                                    <br/>                                   
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <p>
                                        <Form.Check defaultChecked={this.state.check} 
			                                        onChange={this.changeState}
                                                    type= "checkbox"
                                                    label= "Remember e-mail"/>
                                        </p>
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
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control 
                                            type="email" 
                                            placeholder="Enter email"                                        
                                            value={this.state.email}
                                            onChange={
                                                (e) => this.setState({email: e.target.value})
                                            }/>
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                                    </Form.Group>                                   
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
                                    <p>
                                        <h4 style={{ color: "green" }} >{this.state.successMessage}</h4>
                                    </p>
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
/*
<h4 style={{ color: "red" }} >{this.state.errorMessage}</h4>

    <Form.Group controlId="formBasicCheckbox">    
        <Form.Check defaultChecked= {}
                        onChange= {} 
                        type="checkbox" 
                    label="Check me out"
        />
    </Form.Group>
*/