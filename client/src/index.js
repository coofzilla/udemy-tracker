import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import courseReducer from "../src/slices/courseSlice";
import App from "./components/App";

import axios from "axios";
window.axios = axios;

const store = configureStore({
  reducer: {
    courses: courseReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
