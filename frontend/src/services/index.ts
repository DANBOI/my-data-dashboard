import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//queries and mutations along with the loading and error state
const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.API_BASE_URL }),
  tagTypes: ["Kpis", "products", "transactions"],
  endpoints: () => ({}),
});

export default mainApi;
