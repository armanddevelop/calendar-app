import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
export const PrivateRoutes = ({ children, isLoged }) =>
  isLoged === "authenticated" ? children : <Redirect to="/authorice/login" />;

PrivateRoutes.propType = {
  isLoged: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
