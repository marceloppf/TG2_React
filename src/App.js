import React, { Component } from 'react';
import './App.css';
import {isAuthenticated} from './services/auth'

//Cabeçalho e Rodapé
import Header from './components/Header';
import Footer from './components/Footer';

//Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Admarea from './pages/Admarea';
//import Escolas from './pages/Escolas';
import Ginasios from './pages/Ginasios';
import Horarios from './pages/Horarios';


import { HashRouter, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => (
    <Route
        render={props => isAuthenticated() === true ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: "/Login", state: { from: props.location } }} />
            )}
    />
)

class App extends React.Component {
	render() {
		return (
			<div>				
				<HashRouter>					
					<Header />
					<Switch>
						<Route path="/" exact={true} component={Home}/>						
						<Route path="/Contact" component={Contact}/>
						<Route path="/Login" component={Login}/>

						<PrivateRoute path="/Admarea" component={Admarea}/>
						<PrivateRoute path="/Ginasios" component={Ginasios}/>
						<PrivateRoute path="/Horarios" component={Horarios}/>

						<Route path='*' component={Home}/>
					</Switch>					
					<Footer />
				</HashRouter>
			</div>
		)
	}
}

export default App;

//props serve para comunicacao - Método CONSTRUTOR - Para carregar variáveis
/*

<Route path="/Escolas" component={Escolas}/>
						<Route path="/Starships" component={Starships}/>
constructor(props) {
	super(props)
	this.state = {
		msg: "Olá Mundo",
		contador: "0"
	}
}

somar = (valor) => {
	this.setState({ contador: this.state.contador + valor })
}

<BrowserRouter>
</BrowserRouter>	
*/	