import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { onChecking } from "../../store";

export const LinkManager = ({ pageName }) => {
  const registerPath = "/authorice/register";
  const logInPath = "/authorice/login";
  const dispatch = useDispatch();
  return (
    <>
      <Link
        onClick={() => dispatch(onChecking())}
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
