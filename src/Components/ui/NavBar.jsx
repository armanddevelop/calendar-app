import { Button, Toolbar, AppBar, Box, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuthStore, useCalendarStore } from "../../Hooks";
export const NavBar = () => {
  const { startLogOut, user } = useAuthStore();
  const { clearActiveEvent, startLogOutUser } = useCalendarStore();
  const logOut = () => {
    startLogOut();
    clearActiveEvent();
    startLogOutUser();
  };
  return (
    <Box sx={{ mb: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {user.name.toUpperCase()}
          </Typography>
          <Button
            onClick={logOut}
            color="inherit"
            size="medium"
            startIcon={<LogoutIcon />}
          >
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
