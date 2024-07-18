import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import appReducer from "./appReducer/appReducer";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

setupListeners(store.dispatch);
