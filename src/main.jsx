import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Carousel from "./Componentes/Carousel";
import Redes from './Componentes/Redes'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <Carousel/>
      <App />
      <Redes/>
    </>
  </React.StrictMode>
);
