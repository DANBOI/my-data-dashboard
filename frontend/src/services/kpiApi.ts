import mainApi from "./index";
import { Kpi } from "./types";

// subApi injected to the mainApi
const kpiApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    getKpis: builder.query<Array<Kpi>, void>({
      query: () => "/kpis",
      providesTags: ["Kpis"],
    }),
  }),
});

export const { useGetKpisQuery } = kpiApi;
