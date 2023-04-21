import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ThemeProvider from 'react-bootstrap/ThemeProvider'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
>
  <div> <App /> </div>
</ThemeProvider>;
      
    </>
  </React.StrictMode>
);
