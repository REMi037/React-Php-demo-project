import React,{StrictMode} from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker.js';
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import ToDoList from './components/ToDoList'
import {BrowserRouter as Router,Route,Link,NavLink,Switch} from 'react-router-dom'

const RoutingLink =(
<Router>
<Switch>
    <Route exact path="/" component={LoginPage}  />
    <Route exact path="/home" component={HomePage}  />
    <Route exact path="/crud" component={App}  />
    <Route exact path="/todolist" component={ToDoList}  />
</Switch>
</Router>
)
// ReactDOM.render(<StrictMode>routing</StrictMode>,document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
export default RoutingLink