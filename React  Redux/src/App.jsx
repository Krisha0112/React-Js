import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Keep from "./Pages/Keep";
import "./styles.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-card">
        <Keep />
      </div>
    </Provider>
  );
};

export default App;
