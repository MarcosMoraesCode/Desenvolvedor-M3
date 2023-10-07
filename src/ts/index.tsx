//import Product from "./Product";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProductProvider } from "../hooks/useProducts";

export const serverUrl = "http://localhost:5000";

function main() {
  console.log(serverUrl);
}

document.addEventListener("DOMContentLoaded", main);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>
);
