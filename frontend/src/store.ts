import { configureStore } from "@reduxjs/toolkit";
import mainApi from "./services/index";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore({
  reducer: {
    [mainApi.reducerPath]: mainApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    //chainable middleware
    getDefaultMiddleware().concat(mainApi.middleware),
  devTools: true,
});

//required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

export default store;
