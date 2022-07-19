import Alert from "@mui/material/Alert";
import PropTypes from "prop-types";

export const AlertMessage = ({ severity, message }) => {
  return (
    <Alert className="alert-message" variant="outlined" severity={severity}>
      {message}
    </Alert>
  );
};
AlertMessage.propTypes = {
  message: PropTypes.string.isRequired,
  sevetiry: PropTypes.string.isRequired,
};
