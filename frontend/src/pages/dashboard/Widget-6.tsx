import { useMemo } from "react";
import { Palette } from "@mui/material";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import { Product } from "@/types";

import Widget from "@/components/WidgetContainer";
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ZAxis,
} from "recharts";

type Props = {
  data?: Product[];
  error?: FetchBaseQueryError | SerializedError;
  isLoading: boolean;
  palette: Palette;
};

export default function Widget6({ data, error, isLoading, palette }: Props) {
  const productExpenseData = useMemo(
    () => data?.map(({ id, price, expense }) => ({ id, price, expense })),
    [data]
  );

  return (
    <Widget
      gridArea="Widget-6"
      title="Product Prices vs Expenses"
      sideText="+4%"
    >
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : productExpenseData ? (
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{
              top: 20,
              right: 25,
              bottom: 40,
              left: -10,
            }}
          >
            <CartesianGrid stroke={palette.grey[800]} />
            <XAxis
              type="number"
              dataKey="price"
              name="price"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            />
            <YAxis
              type="number"
              dataKey="expense"
              name="expense"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            />
            <ZAxis type="number" range={[20]} />
            <Tooltip formatter={(v) => `$${v}`} />
            <Scatter
              name="Product Expense Ratio"
              data={productExpenseData}
              fill={palette.info[500]}
            />
          </ScatterChart>
        </ResponsiveContainer>
      ) : null}
    </Widget>
  );
}
