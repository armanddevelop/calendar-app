import { Switch, Route, Redirect } from "react-router-dom";
import { LogInScreen, RegisterScreen } from "../Components";

export const AuthRouter = () => {
  const registerPath = "/authorice/register";
  const logInPath = "/authorice/login";
  return (
    <div>
      <Switch>
        <Route exact path={logInPath} component={LogInScreen} />
        <Route exact path={registerPath} component={RegisterScreen} />
        <Redirect to="/authorice/login" />
      </Switch>
    </div>
  );
};
