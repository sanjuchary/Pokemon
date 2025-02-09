import { Box, TextField, Typography, Button } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../../redux/reducers/authReducer";
// import { useEffect } from "react";
import icon from "../../../assets/pikachu.png";
import icon2 from "../../../assets/pokeball.png";
import icon3 from "../../../assets/bullbasaur.png";

import { motion } from "motion/react";
import { useEffect } from "react";

type SigninFormData = {
  username: string;
  password: string;
};

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const shakeKeyframes = {
    x: [0, -10, 10, -10, 10, -10, 10, -10, 10, 0],
    transition: { duration: 1 },
  };

  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") === "true") {
      navigate("/");
    }
  }, [navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>();

  const signinMutation = useMutation({
    mutationFn: async (data: SigninFormData) => {
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        data
      );
      return response.data;
    },
    onSuccess: (data) => {
      console.log("User Signed in", data);
      dispatch(
        loginSuccess({
          userDetails: data,
        })
      );
      // setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("accessToken", data.accessToken);
      navigate("/");
    },
    onError: (error: AxiosError) => {
      console.log("SignIn Failed", error.response?.data || error.message);
    },
  });

  const onSubmit: SubmitHandler<SigninFormData> = (data) => {
    signinMutation.mutate(data);
    console.log(data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
        width: "30vw",
        boxShadow: 3,
        borderRadius: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "30vw",
          gap: 3,
          p: 2,
          position: "relative",
          backgroundColor: "#f5f7fb",
          borderRadius: 3,
        }}
      >
        <motion.img
          initial={{
            y: -100,
          }}
          animate={{
            y: 2,
            rotateZ: -375,
          }}
          transition={{
            duration: 2,
          }}
          style={{
            height: "15%",
            width: "14%",
            position: "absolute",
            top: "7vh",
            left: "-3vw",
            opacity: 0.9,
            zIndex: -1,
            transform: "rotate(-35deg)", // Adjust the angle as needed
          }}
          src={icon}
          alt="Not Found"
        />
        <motion.img
          initial={{
            x: -500,
            y: -340,
          }}
          animate={{
            x: 2,
            y: 2,
            // rotateZ: 360,
          }}
          transition={{
            duration: 2,
            delay: 0.9,
          }}
          style={{
            height: "50%",
            width: "50%",
            position: "absolute",
            bottom: "-40vh",
            right: "-35vw",
            opacity: 0.9,
            zIndex: -1,
            // transform: "rotate(35deg)", // Adjust the angle as needed
          }}
          src="https://www.freeiconspng.com/thumbs/pikachu-transparent/pikachu-transparent-hd-1.png"
          alt="Not Found"
        />
        <motion.img
          initial={{
            x: -500,
            y: -340,
          }}
          animate={{
            x: 2,
            y: -200,
            // rotateZ: 360,
          }}
          transition={{
            duration: 2,
            delay: 0.9,
          }}
          style={{
            height: "50%",
            width: "50%",
            position: "absolute",
            bottom: "-40vh",
            right: "-35vw",
            opacity: 0.9,
            zIndex: -1,
            // transform: "rotate(35deg)", // Adjust the angle as needed
          }}
          src="https://pngimg.com/d/pokemon_PNG2.png"
          alt="Not Found"
        />
        <motion.img
          initial={{
            x: -500,
            y: -340,
          }}
          animate={{
            x: 2,
            y: -410,
            // rotateZ: 360,
          }}
          transition={{
            duration: 2,
            delay: 0.9,
          }}
          style={{
            height: "40%",
            width: "40%",
            position: "absolute",
            bottom: "-40vh",
            right: "-33vw",
            opacity: 0.9,
            zIndex: -1,
            // transform: "rotate(35deg)", // Adjust the angle as needed
          }}
          src="https://www.pngmart.com/files/22/Bulbasaur-Pokemon-PNG-File.png"
          alt="Not Found"
        />
        <motion.img
          initial={{
            x: -500,
            y: -340,
          }}
          animate={{
            x: 2,
            y: -550,
            // rotateZ: 360,
          }}
          transition={{
            duration: 2,
            delay: 0.9,
          }}
          style={{
            height: "50%",
            width: "50%",
            position: "absolute",
            bottom: "-40vh",
            right: "-35vw",
            opacity: 0.9,
            zIndex: -1,
            // transform: "rotate(35deg)", // Adjust the angle as needed
          }}
          src="https://gpng.net/wp-content/uploads/Charizard-Flying-png.png"
          alt="Not Found"
        />
        <motion.img
          initial={{
            x: -500,
            y: -340,
          }}
          animate={{
            x: -210,
            y: 20,
            // rotateZ: 360,
            scaleX: -1,
          }}
          transition={{
            duration: 2,
            delay: 0.9,
          }}
          style={{
            height: "50%",
            width: "50%",
            position: "absolute",
            bottom: "-40vh",
            right: "-35vw",
            opacity: 0.9,
            zIndex: -1,
            transform: "scaleX(-1)",
          }}
          src="https://freepngimg.com/save/16236-pokemon-png/1185x1215"
          alt="Not Found"
        />
        <motion.img
          initial={{
            x: -500,
            y: -340,
          }}
          animate={{
            x: -160,
            y: -160,
            // rotateZ: 360,
            // scaleX: -1,
          }}
          transition={{
            duration: 2,
            delay: 0.9,
          }}
          style={{
            height: "50%",
            width: "50%",
            position: "absolute",
            bottom: "-40vh",
            right: "-35vw",
            opacity: 0.9,
            zIndex: -1,
            transform: "scaleX(-1)",
          }}
          src="https://images.seeklogo.com/logo-png/28/2/eevee-logo-png_seeklogo-286618.png"
          alt="Not Found"
        />
        <motion.img
          initial={{
            x: -500,
            y: -340,
          }}
          animate={{
            x: -420,
            y: 2,
            // rotateZ: 360,
            // scaleX: -1,
          }}
          transition={{
            duration: 2,
            delay: 0.9,
          }}
          drag
          dragConstraints={{
            top: 500,
            left: 1000,
          }}
          style={{
            height: "50%",
            width: "50%",
            position: "absolute",
            bottom: "-40vh",
            right: "-35vw",
            opacity: 0.9,
            zIndex: -1,
            transform: "scaleX(-1)",
          }}
          src="https://www.pngkey.com/png/full/62-623326_stats-moves-evolution-locations-other-forms-pokemon-caterpie.png"
          alt="Not Found"
        />
        <motion.img
          initial={{ z: -100 }}
          animate={{ z: 2, ...shakeKeyframes }}
          transition={{ duration: 2 }}
          style={{
            height: "55%",
            width: "50%",
            position: "absolute",
            bottom: "-12vh",
            left: "22vw",
            opacity: 1,
            zIndex: 10,
            // border:2,
            borderWidth: 10,
            borderColor: "#fff",
            borderRadius: "100%",
            // transform: "rotate(35deg)",
          }}
          src={icon2}
          alt="Not Found"
        />
        <motion.img
          initial={{
            y: -100,
          }}
          animate={{
            y: 2,
            rotateZ: 395,
          }}
          transition={{
            duration: 2,
          }}
          style={{
            height: "12%",
            width: "10%",
            position: "absolute",
            // bottom: "40vh",
            top: "7vh",
            left: "29vw",
            opacity: 0.9,
            zIndex: -10,
            transform: "rotate(35deg)",
          }}
          src={icon3}
          alt="Not Found"
        />
        <Typography
          sx={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#ed5564",
          }}
        >
          Sign In
        </Typography>

        <TextField
          id="username"
          label="User Name"
          variant="outlined"
          type="text"
          fullWidth
          {...register("username", {
            required: "username is required",
          })}
          error={!!errors.username}
          helperText={errors.username?.message}
        />

        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 2,
            width: "100%",
            color: "#f5f7fb",
            backgroundColor: "#ed5564",
          }}
        >
          Sign In
        </Button>
        {/* <Typography>
          Create an Account{" "}
          <span onClick={() => navigate("/Signup")}>Register?</span>
        </Typography> */}
      </Box>
    </Box>
  );
};

export default Signin;
