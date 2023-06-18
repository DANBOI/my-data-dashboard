import { useMemo } from "react";
import { Palette } from "@mui/material";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import { Kpi } from "@/types";

import Widget from "@/layouts/WidgetContainer";
import {
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  XAxis,
  YAxis,
  Legend,
  Line,
  Tooltip,
} from "recharts";

type Props = {
  data?: Kpi[];
  error?: FetchBaseQueryError | SerializedError;
  isLoading: boolean;
  palette: Palette;
};

export default function Widget2({ data, error, isLoading, palette }: Props) {
  const revenueProfit = useMemo(
    () =>
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => ({
        name: month.slice(0, 3).toUpperCase(),
        profit: (revenue - expenses).toFixed(2),
        revenue,
      })),
    [data]
  );

  return (
    <Widget
      gridArea="Widget-2"
      title="Profit and Revenue"
      subtitle="top line represents revenue, bottom line represents expenses"
      sideText="+4%"
      error={error}
      isLoading={isLoading}
    >
      {revenueProfit && (
        <ResponsiveContainer width="100%" height="100%">
          {/* https://recharts.org/en-US/api/LineChart */}
          <LineChart
            width={500}
            height={400}
            data={revenueProfit}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="left"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <Tooltip />
            <Legend
              height={20}
              wrapperStyle={{
                margin: "0 0 10px",
              }}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="profit"
              stroke={palette.info[500]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="revenue"
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </Widget>
  );
}
