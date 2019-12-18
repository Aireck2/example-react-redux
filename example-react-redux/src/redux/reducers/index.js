function mainReducer(state = [], action) {
  switch (action.type) {
    case "ADD_SMTHNG":
      return state.concat([action.text]);
    default:
      return state;
  }
}

export default mainReducer;
