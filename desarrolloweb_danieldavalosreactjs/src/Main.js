import React, { Component } from 'react';
import './Main.css'

import firebase from 'firebase'
import {db_config} from './Config'
import Barra from './Barra.js'
import Catalogo from './Catalogo.js'
import Ficha from './Ficha.js'
import Compra from './Compra.js'
class Main extends Component {
  constructor(props){
    super(props)
    this.database=this.props.app.database().ref().child('Productos')
    this.state={
      productos:[],
      vercatalogo:true,
      verproducto:false,
      vercanasta:false,
      nombreproducto:"",
      precioproducto:"",
      unidadesproducto:"",
      compras:false
    }
    this.verProducto=this.verProducto.bind(this)
    this.atras=this.atras.bind(this)
    this.anadirProducto=this.anadirProducto.bind(this)
    this.verCompras=this.verCompras.bind(this)
  }
  componentDidMount()
  {
    this.database.on('value',snap =>{
      this.setState({productos:snap.val()})
    })
    if(localStorage.getItem('carrito')!=null)
    {
      this.setState({compras:true})
    }
  }
  verCompras()
  {
    console.log("asd")
    this.setState({
            vercanasta:true,
      vercatalogo:false,
      verproducto:false,

    })
  }
  anadirProducto(nombre,precio,cantidad){
    this.setState({
      compras:true,
    })
    if(localStorage.getItem('carrito')!=null)
    {
      let carro=JSON.parse(localStorage.getItem("carrito"));
      let nueva_compra={"nombre":nombre,"precio":precio,"cantidad":cantidad};
      carro.push(nueva_compra);
      localStorage.setItem("carrito",JSON.stringify(carro));
    }
    else
    {
      let carro=[{"nombre":nombre,"precio":precio,"cantidad":cantidad}];
      localStorage.setItem("carrito",JSON.stringify(carro));
      console.log("se creo una compra al carro"+ carro);
    }

  }
  verProducto(nombre,precio,unidades)
  {
    this.setState({
      nombreproducto:nombre,
      precioproducto:precio,
      unidadesproducto:unidades,
      vercatalogo:false,
      verproducto:true
    })
  }
  atras()
  {
    this.setState({
      nombreproducto:"",
      precioproducto:"",
      unidadesproducto:"",
      vercatalogo:true,
      verproducto:false,
      vercanasta:false
    })
  }
  renderCatalogo()
  {
    if(this.state.vercatalogo)
    {
      return <Catalogo productos={this.state.productos} verProducto={this.verProducto} anadirProducto={this.anadirProducto} />
    }
    return null
  }
  renderProducto()
  {
    if(this.state.verproducto)
    {
      return <Ficha nombreproducto={this.state.nombreproducto} precioproducto={this.state.precioproducto} unidadesproducto={this.state.unidadesproducto} atras={this.atras}   />
    }
    return null
  }
  renderCanasta(){
    if(this.state.vercanasta)
    {
      return <Compra atras={this.atras}  />
    }
    return null
  }
  render() {
    return (
      <div className="main">
        <div class="fondo-main">
          <div class="container">
            <Barra compras={this.state.compras} verCompras={this.verCompras}  />
            <div>
              {
                this.renderCatalogo()
              }
            </div>
            <div>
              { this.renderProducto()}
            </div>
            <div>
              { this.renderCanasta()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
