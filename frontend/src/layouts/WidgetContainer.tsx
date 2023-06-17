import { Box, Button, Stack, Typography, useTheme } from "@mui/material";

type Props = {
  gridArea?: string;
  title?: string;
  subtitle?: string;
  sideAction?: () => void;
  sideText?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
};

export default function Widget({
  gridArea = "",
  icon,
  title,
  subtitle = "",
  sideText,
  sideAction,
  children,
}: Props) {
  const { palette } = useTheme();
  return (
    <Box
      gridArea={gridArea}
      bgcolor={palette.background.paper}
      height="100%"
      overflow="hidden"
      borderRadius="1rem"
      boxShadow="0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)"
    >
      {/* widget header */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        color={palette.grey[400]}
        margin="1.5rem 1rem 0 1rem"
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {icon}
          <Box width="100%">
            <Typography variant="h4" mb="-0.1rem">
              {title}
            </Typography>
            <Typography variant="h6">{subtitle}</Typography>
          </Box>
        </Stack>
        {/* rightside */}
        {sideAction ? (
          <Button
            onClick={sideAction}
            sx={{
              color: palette.grey[900],
              ":hover": {
                color: palette.grey[700],
              },
              backgroundColor: palette.grey[700],
              boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,.4)",
            }}
          >
            {sideText}
          </Button>
        ) : (
          <Typography
            variant="h5"
            fontWeight="700"
            color={palette.secondary[200]}
          >
            {sideText}
          </Typography>
        )}
      </Stack>

      {/* widget body */}
      {children}
    </Box>
  );
}
