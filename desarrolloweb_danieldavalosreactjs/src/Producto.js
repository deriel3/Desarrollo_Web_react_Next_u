import React, { Component } from 'react';
class Producto extends Component {
  constructor(props){
    super(props)

    this.state={
      nombre:"",
      precio:0,
      unidades:""
    }
    this.verProducto=this.verProducto.bind(this)
    this.anadirProducto=this.anadirProducto.bind(this)
  }
  anadirProducto()
  {
    var cant=this.cantidad.value;
    var nombre=this.state.nombre;
    var precio=this.state.precio;
    var uni=this.state.unidades;
    if(cant<=uni && cant!=0)
    {
      this.setState({unidades:uni-cant});
      this.props.anadirProducto(nombre,precio,cant)
    }
    this.cantidad.value="0"
  }
  verProducto()
  {
    const{nombre,precio,unidades,verProducto}=this.props
    verProducto(nombre,precio,unidades)
  }
  componentDidMount()
  {
    const {nombre,precio,unidades} =this.props
    this.setState({
      nombre:nombre,
      precio:precio,
      unidades:unidades
    })
  }
  render() {
    const {nombre,precio,unidades} =this.props
    var imagen='./images/'+nombre.toLowerCase()+".jpg"
    return (
      <div className="producto">
        <div class="card">
          <img class="card-img-top" src={process.env.PUBLIC_URL + imagen} />
          <div class="card-body">
            <h5 class="card-title">{nombre}</h5>
            <p class="card-text">Precio:{precio}</p>
            <p class="card-text">Unidades disponibles:{this.state.unidades}</p>
            <div class="row">
              <div class="col-md-3">
                <a onClick={this.verProducto} class="btn btn-primary" name="button">Ver</a>
              </div>
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-6">
                    <button onClick={this.anadirProducto} class="btn btn-warning" name="button">Añadir</button>
                  </div>
                  <div class="col-md-6">
                    <input type="number"  class="form-control"  name="" placeholder="0" ref={cantidad => this.cantidad=cantidad} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Producto;
