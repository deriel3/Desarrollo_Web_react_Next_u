import React, { Component } from 'react';

class Barra extends Component {
  constructor(props){
    super(props)

    this.state={
    }
    this.verCompras=this.verCompras.bind(this)
  }
  verCompras()
  {
    this.props.verCompras()
  }
  renderCarroRojo()
  {
    if(this.props.compras)
    {
      return <a onClick={this.verCompras}  class=" bg-light nav-link" ><i class="fas fa-shopping-cart text-danger"></i></a>
    }
    else {
      return <a  class=" bg-light nav-link" ><i class="fas fa-shopping-cart text-muted"></i></a>
    }
  }
  render() {
    return (
      <div className="barra">
          <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">Tiendita</span>
            <ul class="nav justify-content-end ">
              <li class="nav-item">
                <a class="bg-light nav-link active" href="#"><i class="fab fa-buromobelexperte text-muted"></i></a>
              </li>
              <li class="nav-item">
                {this.renderCarroRojo()}
              </li>
              <li class="nav-item">
                <a class="bg-light nav-link" href="#"><i class="fas fa-envelope-open-text text-muted"></i></a>
              </li>
              <li class="nav-item">
                <a class="bg-light nav-link" href="#"><i class="fas fa-sign-in-alt text-muted"></i></a>
              </li>
            </ul>
          </nav>

      </div>
    );
  }
}

export default Barra;
