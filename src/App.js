import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ItemListContainer greeting="¡Bienvenidos a mi tienda en línea!" />
            }
          />
          <Route
            exact
            path="/libros"
            element={
              <ItemListContainer greeting="Esta es la sección de libros" />
            }
          />
          <Route
            exact
            path="/electronica"
            element={
              <ItemListContainer greeting="Esta es la sección de electrónica" />
            }
          />
          <Route
            exact
            path="/muebles"
            element={
              <ItemListContainer greeting="Esta es la sección de muebles" />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
