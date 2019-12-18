import React from "react";
import Header from "./components/Header";

import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
};

export default App;
