import { Redirect } from "react-router-dom";

export const PublicRoutes = ({ children, isLoged }) =>
  isLoged ? children : <Redirect to="/login" />;
