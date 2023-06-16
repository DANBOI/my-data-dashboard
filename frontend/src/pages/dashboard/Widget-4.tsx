import { useMemo } from "react";
import { Palette } from "@mui/material";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import { Kpi } from "@/types";

import Widget from "@/components/WidgetContainer";
import {
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  XAxis,
  YAxis,
  Line,
  Tooltip,
} from "recharts";

type Props = {
  data?: Kpi[];
  error?: FetchBaseQueryError | SerializedError;
  isLoading: boolean;
  palette: Palette;
};

export default function Widget4({ data, error, isLoading, palette }: Props) {
  const expenses = useMemo(
    () =>
      data &&
      data[0].monthlyData.map(
        ({ month, operationalExpenses, nonOperationalExpenses }) => ({
          name: month.slice(0, 3).toUpperCase(),
          operationalExpenses,
          nonOperationalExpenses,
        })
      ),
    [data]
  );

  return (
    <Widget
      gridArea="Widget-4"
      title="Operational vs Non-Operational Expenses"
      sideText="+4%"
    >
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : expenses ? (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={expenses}
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
              orientation="left"
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
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="nonOperationalExpenses"
              stroke={palette.info[500]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="operationalExpenses"
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <>DATA NOT FOUND!</>
      )}
    </Widget>
  );
}
