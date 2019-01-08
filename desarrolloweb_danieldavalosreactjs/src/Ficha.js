import React, { Component } from 'react';
class Ficha extends Component {
  constructor(props){
    super(props)

    this.atras=this.atras.bind(this)
  }

  onClick()
  {

  }
  atras()
  {
    this.props.atras()
  }
  render() {
    const {nombreproducto,precioproducto,unidadesproducto} =this.props
    var imagen='./images/'+nombreproducto.toLowerCase()+".jpg"
    return (
      <div className="ficha">
        <div class="bg-light text-dark">
          <div class="row">
            <div class="col-md-4 " >
              <h2></h2>
            </div>
          </div>
          <hr class="bg-white" />
          <div class="" >
            <div class="row">
              <div class="col-md-8">
                <img src={process.env.PUBLIC_URL + imagen} alt=""/>
              </div>
              <div class="col-md-4">
                <p>Precio: {precioproducto}</p>
                <p>Unidades Disponibles: {unidadesproducto}</p>
              </div>
            </div>
          </div>
          <a onClick={this.atras}  class="btn btn-light" >Atras</a>
        </div>
      </div>
    );
  }
}

export default Ficha;
