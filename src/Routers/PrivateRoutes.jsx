import { Redirect } from "react-router-dom";

export const PrivateRoutes = ({ children, logIn }) => {
  return logIn ? children : <Redirect to="/auth/register" />;
};
