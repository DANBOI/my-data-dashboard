import { useMemo } from "react";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import { Kpi } from "@/types";

import { Box, Stack, Palette, Typography } from "@mui/material";
import { PieChart, Pie, Cell } from "recharts";
import Widget from "@/layouts/WidgetContainer";

type Props = {
  data?: Kpi[];
  error?: FetchBaseQueryError | SerializedError;
  isLoading?: boolean;
  palette: Palette;
};

export default function Widget9({ data, error, isLoading, palette }: Props) {
  //2 x 3 array[][]
  const pieDataSet = useMemo(() => {
    if (!data?.length) return;
    const { totalExpenses, expensesByCategory } = data[0];
    return Object.entries(expensesByCategory).map(
      ([key, value]: [string, number]) => [
        {
          name: key,
          value,
        },
        {
          name: `${key} of Total`,
          value: totalExpenses - value,
        },
      ]
    );
  }, [data]);

  const cellColors = [palette.primary[800], palette.primary[500]];
  return (
    <Widget
      gridArea="Widget-9"
      title="Expense Breakdown By Category"
      sideText="+4%"
      error={error}
      isLoading={isLoading}
    >
      {pieDataSet && (
        <Stack
          height="60%"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing=".5rem"
          my=".5rem"
          px="1rem"
          textAlign="center"
        >
          {pieDataSet.map((pieData) => (
            <Box key={pieData[0].name}>
              <PieChart width={110} height={100}>
                <Pie
                  stroke="none"
                  data={pieData}
                  innerRadius={18}
                  outerRadius={35}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {pieData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={cellColors[index]} />
                  ))}
                </Pie>
              </PieChart>
              <Typography variant="h5">{pieData[0].name}</Typography>
            </Box>
          ))}
        </Stack>
      )}
    </Widget>
  );
}
