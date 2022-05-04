import { Button, Toolbar, AppBar, Box, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
export const NavBar = () => {
  return (
    <Box sx={{ mb: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Licha
          </Typography>
          <Button color="inherit" size="medium" startIcon={<LogoutIcon />}>
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
