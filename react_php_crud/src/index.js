import React,{StrictMode} from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { Component } from 'react'
import RoutingLink from './RoutingLink'
import Demo1 from './components/Demo1'
// import LoginPage from './components/LoginPage'
// import HomePage from './components/HomePage';

export class Demo extends Component {
    render() {
        return (
            <div>
                {RoutingLink}
                {/* <Demo1/> */}
            </div>
        )
    }
}


ReactDOM.render(<StrictMode><Demo/></StrictMode>,document.getElementById("root"));
// ReactDOM.render(<StrictMode><ReactCrudMain /></StrictMode>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
export default Demo