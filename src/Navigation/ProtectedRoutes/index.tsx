import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
