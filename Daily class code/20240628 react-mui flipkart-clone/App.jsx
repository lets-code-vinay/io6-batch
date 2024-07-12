import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomepageShimmer } from "./src/components/Shimmer";
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
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
