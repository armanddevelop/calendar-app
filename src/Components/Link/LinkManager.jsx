import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export const LinkManager = ({ pageName }) => {
  const registerPath = "/authorice/register";
  const logInPath = "/authorice/login";

  return (
    <>
      <Link
        className="form__manager__link"
        to={pageName === "logIn" ? registerPath : logInPath}
      >
        {pageName === "logIn" ? "Register" : "LogIn"}
      </Link>
    </>
  );
};

LinkManager.propType = {
  pageName: PropTypes.string.isRequired,
};
