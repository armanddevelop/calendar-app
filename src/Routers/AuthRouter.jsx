import { Switch, Route, Redirect } from "react-router-dom";
import { LogInScreen, RegisterScreen, CalendarScreen } from "../Components";

export const AuthRouter = () => {
  const registerPath = "/auth/register";
  const logInPath = "/auth/login";
  const calendarPath = "/auth/calendar";
  return (
    <div>
      <Switch>
        <Route exact path={logInPath} component={LogInScreen} />
        <Route exact path={registerPath} component={RegisterScreen} />
        <Route exact path={calendarPath} component={CalendarScreen} />
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  );
};
