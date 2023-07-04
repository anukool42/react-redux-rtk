import React from "react";
import { render } from "react-dom";
import { configureStore } from "@reduxjs/toolkit";

import App from "./App";
import rootReducer from "./slices";

import "./index.css";

import { Provider } from "react-redux";

const store = configureStore({ reducer: rootReducer });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
