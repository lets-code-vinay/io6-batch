import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomepageShimmer, ProductsShimmer } from "./src/components/Shimmer";
import SelectedProduct from "./src/pages/SelectedProduct";
const Homepage = lazy(() => import("./src/pages/Homepage"));
const ProductsPage = lazy(() => import("./src/pages/ProductsPage"));
const Login = lazy(() => import("./src/pages/Login"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Suspense fallback={<HomepageShimmer />}>
                <Homepage />
              </Suspense>
            }
          />
          <Route
            path="/homepage"
            element={
              <Suspense fallback={<HomepageShimmer />}>
                <Homepage />
              </Suspense>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/products"
            element={
              <Suspense fallback={<ProductsShimmer />}>
                <ProductsPage />
              </Suspense>
            }
          />

          <Route
            path="/selected-product/:id"
            element={
              <Suspense fallback={<HomepageShimmer />}>
                <SelectedProduct />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
