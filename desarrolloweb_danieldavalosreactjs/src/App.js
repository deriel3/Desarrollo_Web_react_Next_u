import React, { Component } from 'react';
import logo from './logo.svg';

import firebase from 'firebase'
import {db_config} from './Config'
import Login from './Login'
import Main from './Main'
class App extends Component {
  constructor(props){
    super(props)

    this.app = firebase .initializeApp(db_config);
    this.database=this.app.database().ref().child('Usuarios')
    this.state={
      usuarios:[],
      shouldrenderlogin:false,
      shouldrendermain:true,
    };

    this.iniciar=this.iniciar.bind(this);
  }

  componentDidMount()
  {
    this.database.on('value',snap =>{
      this.setState({usuarios:snap.val()})
    })
  }
  iniciar(inicio)
  {
    if(inicio==1)
    {
      console.log("si")
      this.setState({shouldrenderlogin:false,shouldrendermain:true})
    }
    else{
      console.log("no")
    }
  }
  renderlogin()
  {
    if(this.state.shouldrenderlogin)
    {
      return <Login iniciar={this.iniciar} usuarios={this.state.usuarios}/>
    }
    return null;
  }
  renderMain()
  {
    if(this.state.shouldrendermain)
    {
      return <Main app={this.app} />
    }
    return null;
  }
  render() {
    return (
      <div className="App">
        <div>
          {this.renderlogin()}
        </div>
        <div>
          {this.renderMain()}
        </div>
      </div>
    );
  }
}

export default App;
