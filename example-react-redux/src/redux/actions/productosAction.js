import {
  SHOW_PRODUCTS,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  SHOW_PRODUCT
} from "./types";
import axios from "axios";

export const mostrarProductos = () => async dispatch => {
  const respuesta = await axios.get("http://localhost:5000/productos/")

  dispatch({
    type: SHOW_PRODUCTS,
    payload: respuesta.data

  });
};

export const mostrarProducto = id => async dispatch => {
  const respuesta = await axios.get(`http://localhost:5000/productos/${id}`)
  dispatch({
    type: SHOW_PRODUCT,
    payload: respuesta.data
  })
};

export const deleteProduct = id => async dispatch => {
  await axios.delete(`http://localhost:5000/productos/${id}`);
  dispatch({
    type: DELETE_PRODUCT,
    payload: id
  });
};

export const addProduct = post => async dispatch => {
  const respuesta = await axios.post('http://localhost:5000/productos/', post)

  dispatch({
    type: ADD_PRODUCT,
    payload: respuesta.data
  })
}

export const editProduct = producto => async dispatch => {
  await axios.put(`http://localhost:5000/productos/${producto.id}`, producto)
  dispatch({
    type: EDIT_PRODUCT,
  })
}