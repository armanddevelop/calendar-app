import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
export const PrivateRoutes = ({ children, isLoged }) =>
  isLoged ? children : <Redirect to="/authorice/login" />;

PrivateRoutes.propType = {
  isLoged: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};
