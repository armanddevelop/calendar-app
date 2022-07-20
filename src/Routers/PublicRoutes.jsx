import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
export const PublicRoutes = ({ children, isLoged }) =>
  isLoged === "not-authenticated" || isLoged === "checking" ? (
    children
  ) : (
    <Redirect to="/" />
  );

PublicRoutes.propType = {
  isLoged: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
