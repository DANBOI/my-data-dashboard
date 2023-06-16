import mainApi from "./index";
import { Product } from "@/types";

// subApi injected to the mainApi
const productApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Array<Product>, void>({
      query: () => "/products",
      providesTags: ["products"],
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
