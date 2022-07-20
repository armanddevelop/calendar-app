import { Container, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { AlertMessage } from "../alert/AlertMessage";
import { FormManager } from "../form/FormManager";

export const RegisterScreen = () => {
  const { errorMessage } = useSelector((state) => state.auth);
  return (
    <Container fixed maxWidth="md">
      {errorMessage && <AlertMessage severity="error" message={errorMessage} />}
      <Box>
        <FormManager pageName="register" title="Register page" />
      </Box>
    </Container>
  );
};
