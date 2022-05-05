import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
export const PublicRoutes = ({ children, isLoged }) =>
  !isLoged ? children : <Redirect to="/" />;

PublicRoutes.propType = {
  isLoged: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};
