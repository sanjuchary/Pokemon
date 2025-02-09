import { Box, TextField, Typography, Button, MenuItem } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";

type SignUpFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: number;
  address: string;
  dob: Date;
  gender: string;
  role: string;
};

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    console.log("Registration Data:", data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 500,
        margin: "auto",
        gap: 3,
        p: 3,
      }}
    >
      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "primary.main",
          mb: 2,
        }}
      >
        Registration
      </Typography>

      <TextField
        label="First Name"
        fullWidth
        {...register("firstName", { required: "First name is required" })}
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
      />

      <TextField
        label="Last Name"
        fullWidth
        {...register("lastName", { required: "Last name is required" })}
        error={!!errors.lastName}
        helperText={errors.lastName?.message}
      />

      <TextField
        label="Email"
        type="email"
        fullWidth
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address",
          },
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        label="Password"
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

      <TextField
        label="Phone Number"
        type="tel"
        fullWidth
        {...register("phoneNumber", {
          required: "Phone number is required",
          pattern: {
            value: /^[0-9]{10}$/,
            message: "Phone number must be 10 digits",
          },
        })}
        error={!!errors.phoneNumber}
        helperText={errors.phoneNumber?.message}
      />

      <TextField
        label="Address"
        fullWidth
        {...register("address", { required: "Address is required" })}
        error={!!errors.address}
        helperText={errors.address?.message}
      />

      <TextField
        label="Date of Birth"
        type="date"
        fullWidth
        InputLabelProps={{ shrink: true }}
        {...register("dob", { required: "Date of birth is required" })}
        error={!!errors.dob}
        helperText={errors.dob?.message}
      />

      <TextField
        label="Gender"
        select
        fullWidth
        {...register("gender", { required: "Gender is required" })}
        error={!!errors.gender}
        helperText={errors.gender?.message}
        defaultValue={""}
      >
        <MenuItem value="Male">Male</MenuItem>
        <MenuItem value="Female">Female</MenuItem>
        <MenuItem value="Other">Other</MenuItem>
      </TextField>

      <TextField
        label="Role"
        select
        fullWidth
        {...register("role", { required: "Role is required" })}
        error={!!errors.role}
        helperText={errors.role?.message}
        defaultValue={""}
      >
        <MenuItem value="Doctor">Doctor</MenuItem>
        <MenuItem value="Patient">Patient</MenuItem>
        <MenuItem value="Admin">Admin</MenuItem>
      </TextField>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          mt: 2,
          width: "100%",
        }}
      >
        Register
      </Button>
    </Box>
  );
};

export default Signup;
