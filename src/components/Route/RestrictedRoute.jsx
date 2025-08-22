import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ component, redirectTo = "/" }) => {
  if (isLoggedIn) {
    return <Navigate to={redirectTo} />;
  }

  return component;
};
export default RestrictedRoute;
