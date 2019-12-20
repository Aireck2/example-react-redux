import {
  SHOW_PRODUCTS,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  SHOW_PRODUCT
} from "../actions/types";

const initialState = {
  productos: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_PRODUCTS:
      return {
        ...state,
        productos: action.payload
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        productos: state.productos.filter(
          producto => producto.id !== action.payload
        )
      };
    case ADD_PRODUCT:
      return {
        ...state,
        productos: [...state.productos, action.payload]
      }
      case SHOW_PRODUCT:
        return {
          ...state,
          productos: action.payload
        }
        default:
          return state;
  }
}