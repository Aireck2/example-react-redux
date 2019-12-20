import React from "react";
import { connect } from "react-redux";
import { addProduct } from "../redux/actions/productosAction";
class NuevoProducto extends React.Component {
  state = {
    nombre: "",
    precio: "",
    error: false
  };

  nombreProducto = e => {
    this.setState({
      nombre: e.target.value
    });
  };

  precioProducto = e => {
    this.setState({
      precio: e.target.value
    });
  };
  nuevoProducto = e => {
    e.preventDefault();
    const { nombre, precio } = this.state;
    if (nombre === "" || precio === "") {
      this.setState({
        error: true
      });
      return;
    } else {
      this.setState({
        error: false
      });
    }

    const infoProducto = {
      nombre: this.state.nombre,
      precio: this.state.precio
    };
    this.props.addProduct(infoProducto);
    this.props.history.push("/");

    console.log(infoProducto);
  };
  render() {
    const { error } = this.state;
    return (
      <>
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h2>Agregar Nuevo Producto</h2>
                <form onSubmit={this.nuevoProducto}>
                  <div className="form-group">
                    <label>Titulo </label>
                    <input
                      onChange={this.nombreProducto}
                      type="text"
                      className="form-control"
                      placeholder="Titulo"
                    />
                  </div>
                  <div className="form-group">
                    <label>Precio del Producto </label>
                    <input
                      onChange={this.precioProducto}
                      type="text"
                      className="form-control"
                      placeholder="Precio"
                    />
                  </div>
                  <button className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                    Agregar
                  </button>
                </form>
                {error ? (
                  <div className="font-weight-bold alert alert-danger text-center mt-4">
                    Rellena bien los campos
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default connect(null, { addProduct })(NuevoProducto);
