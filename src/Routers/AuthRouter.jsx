import { Switch, Route, Redirect } from "react-router-dom";
import { LogInScreen, CalendarScreen, RegisterScreen } from "../Components";

export const AuthRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={LogInScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/" component={CalendarScreen} />
        <Redirect to="/register" />
      </Switch>
    </div>
  );
};
