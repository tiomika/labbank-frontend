import { useAuth } from './../../contexts/AuthContext';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  const { isLogged } = useAuth();

  if (!isLogged) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
