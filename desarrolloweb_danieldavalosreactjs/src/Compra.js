import React, { Component } from 'react';
class Compra extends Component {
  constructor(props){
    super(props)

    this.pagar=this.pagar.bind(this)
    this.atras=this.atras.bind(this)
  }
  atras()
  {
    this.props.atras()
  }
  pagar()
  {
    localStorage.removeItem("carrito");
    this.props.atras()
  }
  render() {
    let carro=JSON.parse(localStorage.getItem("carrito"));
    var total=0;
    for(var i=0;i<carro.length;i++)
    {
      var precio=0
      precio=carro[i].precio*carro[i].cantidad;
      total=total+precio
    }
    return (
      <div className="compra">
        <div class="bg-light text-dark">
          <div class="row">
            <div class="col-md-4 " >
              <h2 class="text-dark">Carrito de Compras</h2>
            </div>
          </div>
          <hr class="bg-white" />
          <div class="" >
            <div class="row">
              <div class="col-md-7">
                <ul class="list-group" >
                  {
                    carro.map(item=>{
                      return(<li class="list-group-item">
                        <div class="row">
                          <div class="col-md-4">
                            <img src={process.env.PUBLIC_URL + "./images/"+item.nombre+".jpg"}  width="100%" alt=""/>
                          </div>
                          <div class="col-md-8">
                            <h3></h3>
                            <h3>Unidades:{item.nombre}</h3>
                          </div>
                          <h3>Subtotal:{item.precio*item.cantidad}</h3>
                        </div>
                      </li>
                      )
                    })
                  }
                </ul>
              </div>
              <div class="col-md-5">
                <h1>Total:S/.{total}</h1>
                <a onClick={this.atras}  class="btn btn-light" >Cancelar</a>
                <a onClick={this.pagar}  class="btn btn-light" >Pagar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Compra;
