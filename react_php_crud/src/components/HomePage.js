import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './HomePageCss.css'

export class HomePage extends Component {
    handleLink1 = (event) =>{
        event.preventDefault();
        window.location.href="http://localhost:3000/crud";
    }
    handleLink2 = (event) =>{
        event.preventDefault();
        window.location.href="http://localhost:3000/todolist";
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-sm-1" id="col1"></div>
                    <div className="col-md-10">
                    <br/><h2 className="text-center" id="homeWelcome">Hello, welcome to the project demo!<br/></h2>
                    <div className="card">
                        <div className="text-white" id="crudTitle"><h3>React-Php-Crud-Operations</h3>
                        </div>
                        <div className="card-text"><p id="CrudDefinition">
                        CRUD is an acronym for Create, Read, Update, and Delete. 
                        CRUD operations are basic data manipulation for database.
                        The CRUD functions are the user interfaces to databases, 
                        as they permit users to create, view, modify and alter data. 
                        CRUD works on entities in databases and manipulates these entities. 
                        {/* Any simple database table enforces CRUD constraints. */}
                        <hr/>
                        To use the crud operaions,click the below button
                        </p>
                        </div>
                        <div>
                            <button className="btn btn-warning"
                            onClick={this.handleLink1}>CRUD Operations</button>
                        </div><br/>
                    </div><br/>
                    <div className="card">
                        <div className="text-white" id="crudTitle1"><h3>React-ToDoList-App</h3>
                        </div>
                        <div className="card-text"><p id="CrudDefinition1">
                        What is a ToDo List? The definition is a simple one. 
                        It’s a list of tasks you need to complete, or things that you want to do.
                        When you write all your tasks in a list, they seem more manageable. 
                        When you’ve got a clear outline of the tasks you’ve got to do and those you’ve completed, 
                        it helps you stay focused. 
                        {/* While freeing up space in your mind for other more creative tasks.  */}
                        <hr/>
                        To use the ToDoList app,click the below button
                        </p>
                        </div>
                        <div><button className="btn btn-warning" onClick={this.handleLink2}>ToDoList App
                        </button>
                        </div><br/>
                    </div></div>
                    <div className="col-sm-1" id="col3"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage
