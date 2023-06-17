import mainApi from "./index";
import { Transaction } from "@/types";
// subApi injected to the mainApi
const transactionApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query<Array<Transaction>, void>({
      query: () => "/transactions",
      providesTags: ["transactions"],
    }),
  }),
});
export const { useGetTransactionsQuery } = transactionApi;
