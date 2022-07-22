import { useLocation, Navigate } from 'react-router-dom';

const AuthRoute = ({ children }) => {
  const location = useLocation();
  const data = localStorage.getItem('credentials');

  if (!data) return <Navigate to="/login" state={{ from: location }} replace />

  return children;
}

export default AuthRoute;
