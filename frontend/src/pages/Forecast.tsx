import { useMemo, useState } from "react";
import { useGetKpisQuery } from "@/services/kpiApi";
import regression, { DataPoint } from "regression";
import { useTheme } from "@mui/material";
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import WidgetContainer from "@/layouts/WidgetContainer";

export default function Forecast() {
  const { palette } = useTheme();
  const [showForcast, setShowForcast] = useState(false);
  const { data, error, isLoading } = useGetKpisQuery();

  const formattedData = useMemo(() => {
    if (!data) return;
    const { monthlyData } = data[0];
    const formatted: DataPoint[] = monthlyData.map(({ revenue }, index) => [
      index,
      revenue,
    ]);
    //pointsSet for regression
    const regressionLine = regression.linear(formatted);
    return monthlyData.map(({ month, revenue }, i) => ({
      name: month,
      "Actual Revenue": revenue,
      "Regression Line": regressionLine.points[i][1],
      "Forecasted Revenue": regressionLine.predict(i + 12)[1], //after 12months
    }));
  }, [data]);

  return (
    <WidgetContainer
      title="Actual Revenue and Forecasted Revenue"
      subtitle="charted revenue and forecasted revenue based on a simple linear
    regression model"
      sideText="Toggle Forecasted Revenue for Next Year"
      sideAction={() => setShowForcast(!showForcast)}
      error={error}
      isLoading={isLoading}
    >
      {formattedData && (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={formattedData}
            margin={{
              top: 20,
              right: 75,
              left: 20,
              bottom: 80,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={palette.grey[800]} />
            <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }}>
              <Label value="Month" offset={-5} position="insideBottom" />
            </XAxis>
            <YAxis
              domain={[12000, 26000]}
              axisLine={{ strokeWidth: "0" }}
              style={{ fontSize: "10px" }}
              tickFormatter={(value) => `$${value}`}
            >
              <Label
                value="Revenue in USD"
                angle={-90}
                offset={5}
                position="insideLeft"
              />
            </YAxis>
            <Tooltip />
            <Legend verticalAlign="top" />
            <Line
              type="monotone"
              dataKey="Actual Revenue"
              stroke={palette.primary.main}
              strokeWidth={0}
              dot={{ strokeWidth: 5 }}
            />
            <Line
              type="monotone"
              dataKey="Regression Line"
              stroke={palette.info[500]}
              dot={false}
            />
            {showForcast && (
              <Line
                strokeDasharray="5 5"
                dataKey="Forecasted Revenue"
                stroke={palette.secondary[300]}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      )}
    </WidgetContainer>
  );
}
