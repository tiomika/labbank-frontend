import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts";

const PrivateRoutes = () => {
  const { isLogged } = useAuth();

  if (!isLogged) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
