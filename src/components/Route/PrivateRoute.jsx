import { Navigate } from "react-router-dom";

export function PrivateRoute({ component, redirectTo }) {
  return isLoggedIn ? component : <Navigate to={redirectTo} />;
}

export default PrivateRoute;
