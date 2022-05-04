import { Box, Container } from "@mui/material";
import { FormManager } from "../form/FormManager";

export const LogInScreen = () => {
  return (
    <>
      <Container fixed maxWidth="md">
        <Box sx={{ height: 600, width: 600 }}>
          <FormManager pageName="logIn" title="LogIn page" />
        </Box>
      </Container>
    </>
  );
};
