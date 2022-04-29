import { Switch, Route, Redirect } from "react-router-dom";
import { LogInScreen, CalendarScreen, RegisterScreen } from "../Components";

export const AuthRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/auth/login" component={LogInScreen} />
        <Route exact path="/auth/register" component={RegisterScreen} />
        <Route exact path="/auth/calendar" component={CalendarScreen} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
