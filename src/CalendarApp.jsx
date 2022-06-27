import { Provider } from "react-redux";
import { AppRouter } from "./Routers/AppRouter";
import { store } from "./store";
export const CalendarApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
