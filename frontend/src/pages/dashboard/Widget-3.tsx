import { useMemo } from "react";
import { Palette } from "@mui/material";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import { Kpi } from "@/types";

import Widget from "@/components/WidgetContainer";
import {
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

type Props = {
  data?: Kpi[];
  error?: FetchBaseQueryError | SerializedError;
  isLoading: boolean;
  palette: Palette;
};

export default function Widget3({ data, error, isLoading, palette }: Props) {
  const revenue = useMemo(
    () =>
      data &&
      data[0].monthlyData.map(({ month, revenue }) => ({
        name: month.slice(0, 3).toUpperCase(),
        revenue,
      })),
    [data]
  );

  return (
    <Widget
      gridArea="Widget-3"
      title="Revenue Month by Month"
      subtitle="graph representing the revenue month by month"
      sideText="+4%"
    >
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : revenue ? (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={revenue}
            margin={{
              top: 17,
              right: 15,
              left: -5,
              bottom: 58,
            }}
          >
            <defs>
              <linearGradient id="gradientStyle-w3" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <Tooltip />
            <Bar dataKey="revenue" fill="url(#gradientStyle-w3)" />
          </BarChart>
        </ResponsiveContainer>
      ) : null}
    </Widget>
  );
}
