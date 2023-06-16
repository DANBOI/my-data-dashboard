import { Box, Stack, Palette, Typography } from "@mui/material";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import { Kpi } from "@/types";

import Widget from "@/components/WidgetContainer";
import { PieChart, Pie, Cell } from "recharts";

type Props = {
  data?: Kpi[] | object[];
  error?: FetchBaseQueryError | SerializedError;
  isLoading?: boolean;
  palette: Palette;
};

//mock data
const pieData = [
  { name: "Group A", value: 600 },
  { name: "Group B", value: 400 },
];

export default function Widget5({
  data = pieData,
  error,
  isLoading,
  palette,
}: Props) {
  const cellColors = [palette.primary[800], palette.primary[300]];
  return (
    <Widget gridArea="Widget-5" title="Campaigns and Targets" sideText="+4%">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <Stack
          height="80%"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing="1.5rem"
          mb="1rem"
          px="1rem"
        >
          <PieChart
            width={110}
            height={100}
            margin={{
              top: 0,
              right: -10,
              left: 10,
              bottom: 0,
            }}
          >
            <Pie
              stroke="none"
              data={data}
              innerRadius={18}
              outerRadius={38}
              paddingAngle={2}
              dataKey="value"
            >
              {/* Cell can be wrapped by Pie, Bar, or RadialBar to specify attributes of each child */}
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={cellColors[index]} />
              ))}
            </Pie>
          </PieChart>
          <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
            <Typography variant="h5">Target Sales</Typography>
            <Typography m="0.3rem 0" variant="h3" color={palette.primary[300]}>
              83
            </Typography>
            <Typography variant="h6">
              Finance goals of the campaign that is desired
            </Typography>
          </Box>
          <Box flexBasis="30%">
            <Typography variant="h5">Losses in Revenue</Typography>
            <Typography variant="h6">Losses are down 25%</Typography>
            <Typography mt="0.4rem" variant="h5">
              Profit Margins
            </Typography>
            <Typography variant="h6">
              Margins are up by 30% from last month.
            </Typography>
          </Box>
        </Stack>
      ) : null}
    </Widget>
  );
}
