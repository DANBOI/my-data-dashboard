import { Link, useLocation } from "react-router-dom";
import CameraIcon from "@mui/icons-material/Camera";
import { Box, Palette, Stack, Typography, useTheme } from "@mui/material";

type NavLinkProps = {
  label?: string;
  palette: Palette;
};
const NavLink = ({ label = "dashboard", palette }: NavLinkProps) => {
  const { pathname } = useLocation();

  return (
    <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
      <Link
        to={`/${label}`}
        style={{
          color: pathname.includes(label) ? "inherit" : palette.grey[700],
          textDecoration: "inherit",
        }}
      >
        {label}
      </Link>
    </Box>
  );
};

export default function Header() {
  const { palette } = useTheme();

  return (
    <Stack
      component="header"
      direction="row"
      justifyContent={"space-between"}
      alignItems={"center"}
      mb="0.25rem"
      py="0.5rem"
      color={palette.grey[300]}
    >
      {/* logo */}
      <Stack direction="row" alignItems="center" spacing={2}>
        <CameraIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          MERN
        </Typography>
      </Stack>

      {/* navlinks */}
      <Stack component="nav" direction="row" spacing="2rem">
        <NavLink palette={palette} />
        <NavLink label="forecast" palette={palette} />
      </Stack>
    </Stack>
  );
}
