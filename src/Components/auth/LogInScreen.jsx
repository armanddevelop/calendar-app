import { Box, Container } from "@mui/material";
import { useSelector } from "react-redux";
import { AlertMessage } from "../alert/AlertMessage";
import { FormManager } from "../form/FormManager";

export const LogInScreen = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  return (
    <>
      <Container fixed maxWidth="md">
        {status === "not-authenticated" && (
          <AlertMessage severity="error" message={errorMessage} />
        )}
        <Box>
          <FormManager pageName="logIn" title="LogIn page" />
        </Box>
      </Container>
    </>
  );
};
