import React, { Component } from 'react';
import {
Route,
BrowserRouter as Router,
Switch,
Redirect,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import PlayArea from './pages/playarea';
import Lobby from './pages/Lobby';
import { auth } from './services/firebase';
window.$count= 0;
function PrivateRoute({ component: Component, authenticated, ...rest }) {
return (
<Route
{...rest}
render={(props) => authenticated === true
? <Component {...props} />
: <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
/>
)
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
return (
<Route
{...rest}
render={(props) => authenticated === false
? <Component {...props} />
: <Redirect to='/Lobby' />}
/>
)
}

class App extends Component {

constructor() {
super();
this.state = {
authenticated: false,
loading: true
};
}

componentDidMount() {
auth().onAuthStateChanged(user => {
if (user) {
this.setState({
authenticated: true,
loading: false
});
} else {
this.setState({
authenticated: false,
loading: false
});
}
});
}

render() {
return this.state.loading === true ? (
<div className="spinner-border text-success" role="status">
<span className="sr-only">Loading...</span>
</div>
) : (
<Router>
<Switch>
<Route exact path="/" component={Home} />
<PrivateRoute
path="/Lobby"
authenticated={this.state.authenticated}
component={Lobby}
/>
<PrivateRoute
path="/playarea"
authenticated={this.state.authenticated}
component={PlayArea}
/>
<PublicRoute
path="/signup"
authenticated={this.state.authenticated}
component={Signup}
/>
<PublicRoute
path="/login"
authenticated={this.state.authenticated}
component={Login}
/>
</Switch>
</Router>
);
}

}


export default App;