import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "../screens/Auth/Signin";
import Signup from "../screens/Auth/Signup";
import Dashboard from "../screens/Dashboard/Homepage";
import ById from "../screens/Dashboard/ById";
import ProtectedRoute from "./ProtectedRoutes";
import Layout from "../components/Layout";
import Profile from "../screens/Profile";

const MainStack = () => {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/by-id" element={<ById />} />
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes> */}
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/by-id" element={<ById />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainStack;
