import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#001038",
        marginLeft: -14,
        minWidth: "100vw",
        position: "absolute",
        bottom: 0,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        minHeight: "7vh",
      }}
    >
      <Typography
        sx={{
          fontSize: "13px",
          fontWeight: "400",
          color: "#fff",
        }}
      >
        ©2025 Pokémon. ©1995 - 2025 Nintendo/Creatures Inc./GAME FREAK inc. TM,
        ®Nintendo.
      </Typography>
    </Box>
  );
};

export default Footer;
