import { Box, Button, Typography } from "@mui/material";
// import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
// import LogoutIcon from "@mui/icons-material/Logout";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isAnimationLoading, setIsAnimationLoading] = useState(true);
  const MotionText = motion(Typography);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimationLoading(false);
    }, 3000);
  }, []);

  const fetchUser = async () => {
    // const token = localStorage.getItem("accessToken");

    // if (!token) {
    //   throw new Error("No access token found");
    // }

    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon", {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });
      console.log("ResponseData", response.data);

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error("Error fetching user data: " + error.message);
      } else {
        throw new Error("Error fetching user data");
      }
    }
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });

  console.log("DataDe", data);

  if (isLoading) {
    return (
      <Box>
        <Typography variant="h6">Loading...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box>
        <Typography variant="h6" color="error">
          Error fetching data
        </Typography>
      </Box>
    );
  }

  const handleViewMore = (url: string) => {
    navigate(`/by-id?url=${encodeURIComponent(url)}`);
  };

  // const backgroundImageUrl1 = "https://wallpaper.dog/large/20603722.png";
  const backgroundImageUrl = "https://pngimg.com/d/pokeball_PNG31.png";

  const MotionBox = motion(Box);

  return isAnimationLoading ? (
    <></>
  ) : (
    <Box
      sx={{
        width: "90vw",
        marginLeft: -5,
        height: "83vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        position: "relative",
        padding: 3,
      }}
    >
      <Typography variant="h4">Pokemon's Collection</Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          overflowY: "auto",
          maxHeight: "80vh",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          ml: 7,
        }}
      >
        {data?.results?.map(
          (details: {
            id: number;
            avatar_url: string;
            name: string;
            url: string;
          }) => (
            <MotionBox
              key={details?.id}
              animate={{
                rotateY: 360,
              }}
              transition={{
                delay: 0.1 * details.id,
                duration: 3,
                ease: "anticipate",
              }}
              sx={{
                padding: 3,
                borderRadius: 2,
                overflow: "hidden",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "24vw",
                height: "9vw",
                position: "relative",
                background: "#002549",
                zIndex: 0,
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "30vh",
                  backgroundImage: `url(${backgroundImageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.9,
                  zIndex: -1,
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box>
                  <MotionText
                    animate={{
                      x: [0, 180, 0],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    sx={{
                      fontSize: "22px",
                      fontWeight: "600",
                      textTransform: "capitalize",
                      color: "#FED500",
                      // color: "#395992",
                      position: "absolute",
                      zIndex: 2,
                      fontFamily: "'Courier New', Courier, monospace",
                    }}
                  >
                    {details?.name}
                  </MotionText>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    width: "35%",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    zIndex: 2,
                    backgroundColor: "#c2d0d3",
                    color: "#395992",
                    "&:hover": {
                      backgroundColor: "#db0823",
                      color: "#c2d0d3",
                    },
                  }}
                  onClick={() => handleViewMore(details.url)}
                >
                  View More
                </Button>
              </Box>
            </MotionBox>
          )
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;
