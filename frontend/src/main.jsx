import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router";
import Allroutes from "./Allroutes.jsx";
import  { Provider } from "react-redux";
import  store  from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Provider store={store}>
        <Allroutes />
      </Provider>
    </Router>
  </StrictMode>
);
