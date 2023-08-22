import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts";

export const PublicRoutes = () => {
  const { isLogged } = useAuth();

  if (isLogged) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PublicRoutes;
