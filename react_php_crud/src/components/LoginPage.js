import React, { Component } from 'react'
// import { useHistory } from "react-router-dom";
import './LoginPageCss.css'
import './HomePage.js'

export class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
             username : "",
             password : "",
             //errorMsg:""
        }        
    }
    handleChange =(event) =>{
        this.setState({
            [event.target.name]:event.target.value,
        });
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        if(this.state.username == "admin" && this.state.password == "test123"){
            window.location.href="http://localhost:3000/home";
        }
        else{
            alert("Your username or password is incorrect");
        }
    }
    
    render(){
        return(
            <div id="Login-Component">
            <div id="logincomponent2">
            <center><form className="justify-content-center" id="myForm"
             onSubmit={this.handleSubmit} method="post">
                <table>
                    <tr id="note3"><th>வணக்கம்!</th></tr><br/>
                    <tr id="uname"><td >Username</td></tr>
                    <tr><input type="text" id="usernameId"  name="username" placeholder="Enter your email" 
                    onChange={this.handleChange}  required/></tr>
                    <tr id="pass"><td >Password</td></tr>
                    <tr><input type="password" id="passwordId"  name="password" 
                    placeholder="Enter your password" 
                    onChange={this.handleChange}  required/></tr><br/>
                    <tr><td><button type="submit" className="btn btn-success " id="btn1">Login</button> </td></tr>
                    <br/>
                    <tr className="text-center" id="sign"><td>Don't have an account?</td></tr>
                    <tr><td><button className="btn btn-danger" id="btn2">Signup</button> </td></tr><br/>
                </table>
            </form></center>
            </div>
        </div>
            
        )
    }
}


//ReactDOM.render(<LoginPage/>,document.getElementById("root"));
export default LoginPage
