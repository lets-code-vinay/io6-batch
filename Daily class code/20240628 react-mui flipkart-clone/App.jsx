import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomepageShimmer, ProductsShimmer } from "./src/components/Shimmer";
const SelectedProduct = lazy(() => import("./src/pages/SelectedProduct"));
const CartPage = lazy(() => import("./src/pages/CartPage"));
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
          <Route
            path="/login"
            element={
              <Suspense fallback={<ProductsShimmer />}>
                <Login />
              </Suspense>
            }
          />
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
              <Suspense fallback={<ProductsShimmer />}>
                <SelectedProduct />
              </Suspense>
            }
          />

          <Route
            path="/cart"
            element={
              <Suspense fallback={<ProductsShimmer />}>
                <CartPage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
