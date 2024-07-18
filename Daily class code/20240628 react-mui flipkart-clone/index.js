import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </>
);
