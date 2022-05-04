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
            path="/"
            children={
              <PublicRoutes isLogIn={false}>
                <AuthRouter />
              </PublicRoutes>
            }
          />
          {/* <Route
            path="/auth/calendar"
            children={
              <PrivateRoutes isLogIn={true}>
                <CalendarScreen />
              </PrivateRoutes>
            }
          /> */}
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
