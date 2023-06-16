import { Box, useMediaQuery, useTheme } from "@mui/material";
import Widget1 from "./Widget-1";
import Widget2 from "./Widget-2";
import Widget3 from "./Widget-3";
import Widget4 from "./Widget-4";
import Widget5 from "./Widget-5";
import Widget6 from "./Widget-6";
import Widget7 from "./Widget-7";
import Widget8 from "./Widget-8";
import Widget9 from "./Widget-9";
import Widget10 from "./Widget-10";
import { useGetKpisQuery } from "@/services/kpiApi";

const gridAreaLarge = `
  "Widget-1 Widget-2 Widget-3"
  "Widget-1 Widget-2 Widget-3"
  "Widget-1 Widget-2 Widget-3"
  "Widget-1 Widget-2 Widget-6"
  "Widget-4 Widget-5 Widget-6"
  "Widget-4 Widget-5 Widget-6"
  "Widget-4 Widget-8 Widget-9"
  "Widget-7 Widget-8 Widget-9"
  "Widget-7 Widget-8 Widget-10"
  "Widget-7 Widget-8 Widget-10"
`;
const gridAreaSmall = `
  "Widget-1"
  "Widget-1"
  "Widget-1"
  "Widget-1"
  "Widget-2"
  "Widget-2"
  "Widget-2"
  "Widget-2"
  "Widget-3"
  "Widget-3"
  "Widget-3"
  "Widget-4"
  "Widget-4"
  "Widget-4"
  "Widget-5"
  "Widget-5"
  "Widget-6"
  "Widget-6"
  "Widget-6"
  "Widget-7"
  "Widget-7"
  "Widget-7"
  "Widget-8"
  "Widget-8"
  "Widget-8"
  "Widget-8"
  "Widget-9"
  "Widget-9"
  "Widget-10"
  "Widget-10"
`;

export default function Dashboard() {
  const gteLargeScreen = useMediaQuery("(min-width: 1200px)");
  const { palette } = useTheme();
  const {
    data: kpiData,
    error: kpiError,
    isLoading: kpiLoading,
  } = useGetKpisQuery();

  return (
    <Box
      component="main"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        gteLargeScreen
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridAreaLarge,
            }
          : {
              gridAutoColumns: "minmax(370px, 1fr)",
              gridAutoRows: "80px",
              gridTemplateAreas: gridAreaSmall,
            }
      }
    >
      {/* row1 */}
      <Widget1
        data={kpiData}
        error={kpiError}
        isLoading={kpiLoading}
        palette={palette}
      />
      <Widget2
        data={kpiData}
        error={kpiError}
        isLoading={kpiLoading}
        palette={palette}
      />
      <Widget3
        data={kpiData}
        error={kpiError}
        isLoading={kpiLoading}
        palette={palette}
      />

      {/* row2 */}
      <Widget4
        data={kpiData}
        error={kpiError}
        isLoading={kpiLoading}
        palette={palette}
      />
      <Widget5 palette={palette} />
      <Widget6 />

      {/* row3 */}
      <Widget7 />
      <Widget8 />
      <Widget9 />
      <Widget10 />
    </Box>
  );
}
