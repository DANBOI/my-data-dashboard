import Widget from "@/layouts/WidgetContainer";
import { Box, Palette, Typography } from "@mui/material";

type Props = {
  palette: Palette;
};

//UI only
export default function Widget10({ palette }: Props) {
  return (
    <Widget
      gridArea="Widget-10"
      title="Overall Summary and Explanation Data"
      sideText="+15%"
    >
      <Box
        height="15px"
        margin="1.25rem 1rem 0.4rem 1rem"
        bgcolor={palette.primary[800]}
        borderRadius="1rem"
      >
        <Box
          height="100%"
          bgcolor={palette.primary[600]}
          borderRadius="1rem"
          width="30%"
        ></Box>
      </Box>
      <Typography mx="1rem" variant="h6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia dicta
        neque fugit molestiae numquam. Hic laboriosam nulla earum fugiat iste,
        molestias, accusantium ducimus quae natus alias voluptatem quia harum
        veritatis.
      </Typography>
    </Widget>
  );
}
