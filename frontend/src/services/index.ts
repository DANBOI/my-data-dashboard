import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//queries and mutations along with the loading and error state
const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["Kpis", "products"],
  endpoints: () => ({}),
});

export default mainApi;
