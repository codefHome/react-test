import { Box, ThemeProvider, Typography, createMuiTheme } from "@mui/material";


const theme = createMuiTheme({
  typography: {
    fontFamily: 'Verdana, sans-serif',
  },
});
interface HouseProps {
  color1: string;
  color2: string;
  roomName: string;
  animal: string;
  founder: string;
}

function House({ color1, color2, roomName, animal, founder }: HouseProps) {
  return (
    <ThemeProvider theme={theme}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        border: "1px solid white",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        width: "300px",
          fontFamily: "Verdana",
        padding: "15px 15px",
        borderRadius: "5px",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Typography
          sx={{
            fontWeight: 700,
          }}
        >
          {roomName}
        </Typography>
        <Typography>{animal}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "15px",
          background: `linear-gradient(to right, ${color1}, ${color2} )`,
          borderRadius: "5px",
        }}
      ></Box>
      <Box sx={{ display: "flex", gap: "3px" }}>
        <Typography>Founder:</Typography>
        <Typography sx={{ fontWeight: 700 }}>{founder}</Typography>
      </Box>
    </Box>
    </ThemeProvider>
  );
}

export default House;
