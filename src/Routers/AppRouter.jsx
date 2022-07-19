import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { CalendarScreen } from "../Components";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            path="/authorice"
            children={
              <PublicRoutes isLoged={false}>
                <AuthRouter />
              </PublicRoutes>
            }
          />
          <Route
            path="/"
            children={
              <PrivateRoutes isLoged={false}>
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
