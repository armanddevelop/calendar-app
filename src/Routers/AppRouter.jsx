import { useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { CalendarScreen } from "../Components";
import { useAuthStore } from "../Hooks";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
  const { status, checkToken } = useAuthStore();

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route
            path="/authorice"
            children={
              <PublicRoutes isLoged={status}>
                <AuthRouter />
              </PublicRoutes>
            }
          />
          <Route
            path="/"
            children={
              <PrivateRoutes isLoged={status}>
                <CalendarScreen />
              </PrivateRoutes>
            }
          ></Route>
          <Redirect to="/authorice/login" />
        </Switch>
      </div>
    </Router>
  );
};
