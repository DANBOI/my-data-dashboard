import { useMemo } from "react";
import { Palette } from "@mui/material";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import { Kpi } from "@/types";

import Widget from "@/components/WidgetContainer";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";

type Props = {
  data?: Kpi[];
  error?: FetchBaseQueryError | SerializedError;
  isLoading: boolean;
  palette: Palette;
};

export default function Widget1({ data, error, isLoading, palette }: Props) {
  const revenueExpenses = useMemo(
    () =>
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => ({
        name: month.slice(0, 3).toUpperCase(),
        revenue,
        expenses,
      })),
    [data]
  );

  return (
    <Widget
      gridArea="Widget-1"
      title="Revenue and Expenses"
      subtitle="top line represents revenue, bottom line represents expenses"
      sideText="+4%"
    >
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : revenueExpenses ? (
        <ResponsiveContainer width="100%" height="100%">
          {/* https://recharts.org/en-US/api/AreaChart */}
          <AreaChart
            width={500}
            height={400}
            data={revenueExpenses}
            margin={{
              top: 15,
              right: 25,
              left: -10,
              bottom: 60,
            }}
          >
            {/* style definitions */}
            <defs>
              <linearGradient id="gradientStyle-w1" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              tickLine={false}
              axisLine={{ strokeWidth: "0" }}
              style={{ fontSize: "10px" }}
              domain={[8000, 23000]}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="revenue"
              dot={true}
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#gradientStyle-w1)"
            />
            <Area
              type="monotone"
              dataKey="expenses"
              dot={true}
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#gradientStyle-w1)"
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : null}
    </Widget>
  );
}
