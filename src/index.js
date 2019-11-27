import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*
import { isAuthenticated } from './services/auth'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Admarea from './pages/Admarea';

const PrivateRoute = ({ component: Component }) => (
    <Route
        render={props => isAuthenticated() === true ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )}
    />
)

ReactDOM.render(
    <BrowserRouter>
		<Header />    
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/Contact" component={Contact}/>
            <Route path="/Login" component={Login}/>
            <PrivateRoute path="/Admarea" component={Admarea} />
            <Route path='*' component={Home} />
        </Switch>
        <Footer />        
    </ BrowserRouter>
    , document.getElementById('root'));
*/
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

