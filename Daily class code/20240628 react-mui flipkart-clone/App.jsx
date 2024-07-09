import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./src/pages/Homepage";
import Login from "./src/pages/Login";
import ProductsPageGrid from "./src/pages/ProductsPageGrid";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductsPageGrid />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
