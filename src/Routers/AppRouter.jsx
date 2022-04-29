import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            children={
              <PublicRoutes isLoged={true}>
                <AuthRouter />
              </PublicRoutes>
            }
          />
          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
};
