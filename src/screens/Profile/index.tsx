import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import icon from "../../assets/pikachu.png";
import icon2 from "../../assets/pokeball.png";
import icon3 from "../../assets/bullbasaur.png";
import icon4 from "../../assets/pokeball2.png";

const Profile = () => {
  const fetchUser = async () => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      throw new Error("No access token found");
    }

    try {
      const response = await axios.get("https://dummyjson.com/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return (
      <Typography color="error">
        Error fetching data: {(error as Error).message}
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        margin: "auto",
        mt: 4,
        border: 1,
        borderColor: "#e6e8ec",
        boxShadow: 2,
        height: "72vh",
        width: "45vw",
        borderRadius: 3,
        // backgroundColor: "#fff",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "#",
        }}
      >
        User Details
      </Typography>
      <img
        style={{
          height: "10%",
          width: "5%",
          position: "absolute",
          bottom: "16vh",
          left: "59vw",
          opacity: 0.9,
          zIndex: -1,
          transform: "rotate(-35deg)", // Adjust the angle as needed
        }}
        src={icon}
        alt="Not Found"
      />
      <img
        style={{
          height: "70%",
          width: "40%",
          position: "absolute",
          bottom: "15vh",
          left: "29vw",
          opacity: 0.1,
          zIndex: -1,
          transform: "rotate(35deg)", // Adjust the angle as needed
        }}
        src={icon4}
        alt="Not Found"
      />
      <img
        style={{
          height: "35%",
          width: "20%",
          position: "absolute",
          bottom: "10vh",
          left: "62vw",
          opacity: 0.9,
          zIndex: 10,
          // border:2,
          borderWidth: 10,
          borderColor: "#fff",
          borderRadius: "100%",
          transform: "rotate(35deg)",
        }}
        src={icon2}
        alt="Not Found"
      />
      <img
        style={{
          height: "10%",
          width: "5%",
          position: "absolute",
          bottom: "42vh",
          left: "67vw",
          opacity: 0.9,
          zIndex: -1,
          transform: "rotate(35deg)",
        }}
        src={icon3}
        alt="Not Found"
      />
      <Box
        sx={{
          left: 0,
          width: "40vh",
          textAlign: "left",
          zIndex: 10,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#000",
            textTransform: "uppercase",
          }}
        >
          {data.username}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#000",
            textTransform: "uppercase",
          }}
        >
          {data.email}
        </Typography>
      </Box>
      {/* </Box> */}
    </Box>
  );
};

export default Profile;
