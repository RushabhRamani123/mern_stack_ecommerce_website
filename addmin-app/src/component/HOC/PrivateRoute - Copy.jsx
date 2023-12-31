import Homepage from '../../container/Homepage/Homepage';
import { Navigate } from 'react-router';

const PrivateRoute = () => {
  const token = window.localStorage.getItem("token");
  return token ? <Homepage /> : <Navigate to="/signin" />;
};

export default PrivateRoute;