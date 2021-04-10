import React from 'react';
import { Component } from 'react'
import ReactDOM from 'react-dom'
import {Provider} from './Context';
import AllUsers from './components/GetUsers';
import AddUser from './components/AddUser';
import Actions from './Actions/Actions';
import './App.css'

export class App extends Actions {
  render(){
    const contextValue = {
        all_users:this.state.users,
        get_users:this.fetchUsers,
        editMode:this.editMode,
        cancelEdit:this.cancelEdit,
        handleUpdate:this.handleUpdate,
        handleDelete:this.handleDelete,
        insertUser:this.insertUser
    }
    return (
      <Provider value={contextValue}>
        <div className="container-fluid bg-light">
              <div className="container p-5">
                  <div className="card shadow-sm">
                      <div id="crudheader1"><h1 className="card-header text-center text-uppercase ">
                        React-Js CRUD Operation!</h1></div>
                      <div className="card-body">
                          <div className="row">
                              <div className="col-md-4">
                                  <AddUser/>
                              </div>
                              <div className="col-md-8">
                                <AllUsers/>
                              </div>
                          </div>
                      </div>
                  </div>
               </div>
              </div>
      </Provider>
    );
  }
}

export default App;