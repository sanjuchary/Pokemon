import { AppBar, Box, Button } from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useDispatch } from "react-redux";
import { logoutSuccess } from "../../redux/reducers/authReducer";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/pikachu.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { motion } from "motion/react";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem("accessToken");

  const handleLogout = () => {
    dispatch(logoutSuccess());
    localStorage.setItem("isAuthenticated", "false");
    localStorage.removeItem("accessToken");
    navigate("/signin");
  };

  const imageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png";

  return (
    <AppBar position="sticky">
      <Box
        sx={{
          backgroundColor: "#001038",
          marginLeft: -14,
          minWidth: "100vw",
          position: "sticky",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 2,
          boxShadow: 5,
        }}
      >
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <motion.img
            initial={{
              scale: 10,
              y: 300,
              x: 600,
            }}
            animate={{
              x: 0,
              y: 0,
              scale: 1,
              // rotate: 360,
            }}
            transition={{
              // repeat: Infinity,
              duration: 5,
              ease: "anticipate",
            }}
            style={{ height: "10%", width: "10%" }}
            src={imageUrl}
            alt="Not Found"
          />
          <motion.img
            initial={{
              x: 100,
            }}
            animate={{
              x: [50, 950, 50],
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 7,
              ease: "anticipate",
            }}
            style={{ height: "4%", width: "4%" }}
            src={icon}
            alt="Not Found"
          />
        </Box>
        {token ? (
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            {/* <Button
              onClick={() => navigate("/profile")}
              startIcon={
                
              }
            /> */}
            <Box
              onClick={() => navigate("/profile")}
              sx={{ cursor: "pointer" }}
            >
              <AccountCircleOutlinedIcon sx={{ fontSize: "35px" }} />
            </Box>
            <Button
              variant="outlined"
              onClick={handleLogout}
              sx={{
                // position: "absolute",
                // right: 0,
                marginRight: 3,
                backgroundColor: "#001B60",
                color: "#fff",
                px: 4,

                "&:hover": {
                  backgroundColor: "#1C2E5C",
                  color: "#c2d0d3",
                },
              }}
              startIcon={<LogoutOutlinedIcon />}
            >
              Logout
            </Button>
          </Box>
        ) : (
          <Button
            variant="outlined"
            onClick={() => navigate("/signin")}
            sx={{
              // position: "absolute",
              // right: 0,
              marginRight: 3,
              backgroundColor: "#001B60",
              color: "#fff",
              px: 4,
              "&:hover": {
                backgroundColor: "#1C2E5C",
                color: "#c2d0d3",
              },
            }}
            startIcon={<LogoutOutlinedIcon />}
          >
            Login
          </Button>
        )}
      </Box>
    </AppBar>
  );
};

export default Navbar;
