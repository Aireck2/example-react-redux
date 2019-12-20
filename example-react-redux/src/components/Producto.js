import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteProduct } from "../redux/actions/productosAction";

class Producto extends React.Component {
  deleteProducto = () => {
    console.log(this.props.info.id);
    const { id } = this.props.info;
    this.props.deleteProduct(id);
  };

  render() {
    const { id, nombre, precio } = this.props.info;

    return (
      <li className="list-group-item">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-8 d-flex justify-context-between align-items-center">
            <h4 className="text-dark mb-0 mx-5"> {nombre} </h4>
            <span className="badge badge-warning text-dark py-3 px-3 align-items-center">
              $ {precio}
            </span>
          </div>
          <div className="col-md-4 d-flex justify-content-end ">
            <Link
              to={`productos/editar/${id}`}
              className="btn btn-primary mr-2"
            >
              Editar
            </Link>
            <button
              onClick={this.deleteProducto}
              type="button"
              className="btn btn-danger"
            >
              Borrar
            </button>
          </div>
        </div>
      </li>
    );
  }
}
export default connect(null, { deleteProduct })(Producto);
