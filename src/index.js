import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { FavoritesProvider } from "./store/favorites-contex";

ReactDOM.render(
  <FavoritesProvider>
    <Router>
      <App />
    </Router>
  </FavoritesProvider>,

  document.getElementById("root")
);
