import { Container, Box } from "@mui/material";
import { FormManager } from "../form/FormManager";

export const RegisterScreen = () => {
  return (
    <Container fixed maxWidth="md">
      <Box sx={{ height: 600, width: 600 }}>
        <FormManager pageName="register" title="Register page" />
      </Box>
    </Container>
  );
};
