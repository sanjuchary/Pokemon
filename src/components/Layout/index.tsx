import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { Box } from "@mui/material";
import Footer from "../Footer";

const Layout = () => {
  return (
    <Box
      sx={{
        mt: -4,
        mb: -6,
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
