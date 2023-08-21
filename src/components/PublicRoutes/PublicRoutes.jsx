import { useAuth } from './../../contexts/AuthContext';
import { Outlet, Navigate } from 'react-router-dom';

export const PublicRoutes = () => {
  const { isLogged } = useAuth();

  if (isLogged) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PublicRoutes;
