import React from "react";
import { connect } from "react-redux";
import { mostrarProductos } from "../redux/actions/productosAction";
import Producto from "./Producto";

class Productos extends React.Component {
  componentDidMount() {
    this.props.mostrarProductos();
  }

  render() {
    const { productos } = this.props;

    return (
      <>
        <h2 className="text-center my-5">Productos</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <ul>
              {productos.map(producto => (
                <Producto key={producto.id} info={producto} />
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  productos: state.productos.productos
});

export default connect(mapStateToProps, { mostrarProductos })(Productos);
