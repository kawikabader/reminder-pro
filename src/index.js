import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from './reducers';
import './index.css';

// Create the initial store
const store = createStore(reducer);

ReactDOM.render(
  // Pass store into redux provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
