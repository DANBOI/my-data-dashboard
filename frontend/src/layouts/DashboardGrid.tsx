import { Box, useMediaQuery } from "@mui/material";
import React from "react";

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

type Props = {
  children: React.ReactNode;
};

export default function DashboardGrid({ children }: Props) {
  const gteLargeScreen = useMediaQuery("(min-width: 1200px)");

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
      {children}
    </Box>
  );
}
