import React, { Component } from 'react';
import './Login.css'
class Login extends Component {
  constructor(props){
    super(props)

    this.state={
      error:false,
      usuario:"",
      contrasena:""
    }
    this.iniciar=this.iniciar.bind(this);
  }

  iniciar(){
    const {iniciar,usuarios} = this.props;
    var user=this.usuario.value;
    var cont=this.contrasena.value;
    var us=usuarios;
    var inicio=0;
    for(var i=0;i<us.length;i++)
    {
      if(us[i].pass==cont && us[i].usuario==user)
      {
        inicio=1;
      }
    }
    if(inicio!=1){
      this.setState({error:true})
    }
    else {
      this.setState({error:false})
    }
    this.usuario.value="";
    this.contrasena.value="";
    iniciar(inicio)
  }
  renderError()
  {
    if(this.state.error){
      return <label class="text-warning" >Usuario o Contraseña incorrecta </label>
    }
    return null
  }
  render() {
    const {iniciar} = this.props;
    return (
      <div className="login">
        <div class="fondo">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-2 col-md-offset-5">
              <div class="centrar">
                <h2 class="text-center">Inicio de Sesion</h2>
                <div class="form-group">
                  <label for="usr">Usuario:</label>
                  <input type="text" class="form-control" ref={usuario => this.usuario=usuario} />
                </div>
                <div class="form-group">
                  <label for="pwd">Contrasena:</label>
                  <input type="password" class="form-control" ref={contrasena => this.contrasena=contrasena}/>
                  {this.renderError()}
                </div>
                <button  onClick={this.iniciar}  class="btn btn-success">Ingresar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
