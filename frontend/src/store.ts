import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import mainApi from "./services/index";

const store = configureStore({
  reducer: {
    [mainApi.reducerPath]: mainApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    //chainable middleware
    getDefaultMiddleware().concat(mainApi.middleware),
  devTools: false,
});

//required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

export default store;
