import { Switch, Route, Redirect } from "react-router-dom";
import { LogInScreen, RegisterScreen } from "../Components";

export const AuthRouter = () => {
  const registerPath = "/auth/register";
  const logInPath = "/auth/login";
  return (
    <div>
      <Switch>
        <Route exact path={logInPath} component={LogInScreen} />
        <Route exact path={registerPath} component={RegisterScreen} />
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  );
};
