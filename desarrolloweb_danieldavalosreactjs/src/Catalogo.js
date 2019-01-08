import React, { Component } from 'react';
import './Catalogo.css'
import Producto from './Producto'
class Catalogo extends Component {
  constructor(props){
    super(props)
    this.state={
      catalogocompleto:true,
    }
    this.verProducto=this.verProducto.bind(this)
    this.anadirProducto=this.anadirProducto.bind(this)
  }
  onChange(event)
  {

  }
  anadirProducto(nombre,precio,cantidad)
  {
    const anadirProducto=this.props.anadirProducto
    anadirProducto(nombre,precio,cantidad)
  }
  verProducto(nombre,precio,unidades)
  {
    const verProducto=this.props.verProducto
    verProducto(nombre,precio,unidades)
  }
  render() {
    const {productos} = this.props
    var f1=[],f2=[],f3=[],f4=[];
    var e1=0,e2=0,e3=0,e4=0;
    for(var i=0;i<productos.length;i++)
    {
      if(e1==0)
      {
        f1.push(productos[i])
        e1=1;
      }
      else{
        if(e2==0)
        {
          f2.push(productos[i])
          e2=1
        }
        else{
          if(e3==0)
          {
            f3.push(productos[i])
            e3=1
          }
          else{
            if(e4==0)
            {
              f4.push(productos[i])
              e1=0;
              e2=0;
              e3=0;
            }
          }
        }
      }
    }
    return (
      <div className="catalogo">
        <div class="bg-light text-dark">
          <div class="row">
            <div class="col-md-4" >
              <h2 class="text-dark">Catalogo de Productos</h2>
            </div>
            <div class="col-md-4 offset-md-4 " >
              <h4>¿Que estas buscando?</h4>
              <input type="text" name="" onChange={this.onChange}  placeholder="Buscar Producto" ref={busqueda => this.busqueda=busqueda} class="form-control" />
            </div>
          </div>
          <hr class="bg-white" />
          <div class="cat">
            {
              this.state.catalogocompleto ?
              <div class="">
                <div class="row">
                  <div class="col-md-3 filas"  >
                  {
                    f1.map(item=>{
                      return(
                        <Producto key={item.nombre} {...item} verProducto={this.verProducto} anadirProducto={this.anadirProducto}/>
                      );
                    })
                  }
                  </div>
                  <div class="col-md-3 filas">
                  {
                    f2.map(item=>{
                      return(
                        <Producto key={item.nombre} {...item} verProducto={this.verProducto} anadirProducto={this.anadirProducto}/>
                      );
                    })
                  }
                  </div>
                  <div class="col-md-3 filas" >
                  {
                    f3.map(item=>{
                      return(
                        <Producto key={item.nombre} {...item} verProducto={this.verProducto}  anadirProducto={this.anadirProducto}/>
                      );
                    })
                  }
                  </div>
                  <div class="col-md-3 filas">
                  {
                    f4.map(item=>{
                      return(
                        <Producto key={item.nombre} {...item} verProducto={this.verProducto} anadirProducto={this.anadirProducto}/>
                      );
                    })
                  }
                  </div>
                </div>
              </div>
              :
              null
            }
          </div>

        </div>
      </div>
    );
  }
}

export default Catalogo;
