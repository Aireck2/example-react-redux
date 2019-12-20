import React from "react";
import { connect } from "react-redux";
import { mostrarProducto, editProduct } from "../redux/actions/productosAction";

class EditarProducto extends React.Component {
  state = {
    nombre: "",
    precio: "",
    error: false
  };
  componentDidMount() {
    console.log(this.props);
    const { id } = this.props.match.params;
    this.props.mostrarProducto(id);
  }

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
  actualizarProducto = e => {
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
  };
  render() {
    const { error, nombre, precio } = this.state;
    return (
      <>
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h2>Agregar Nuevo Producto</h2>
                <form onSubmit={this.actualizarProducto}>
                  <div className="form-group">
                    <label>Titulo </label>
                    <input
                      defaultValue={nombre}
                      onChange={this.nombreProducto}
                      type="text"
                      className="form-control"
                      placeholder="Titulo"
                    />
                  </div>
                  <div className="form-group">
                    <label>Precio del Producto </label>
                    <input
                      defaultValue={precio}
                      onChange={this.precioProducto}
                      type="text"
                      className="form-control"
                      placeholder="Precio"
                    />
                  </div>
                  <button className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                    Guardar Cambios
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

const mapStatetoProps = state => ({
  productos: state.productos.productos
});
export default connect(mapStatetoProps, { mostrarProducto, editProduct })(
  EditarProducto
);
