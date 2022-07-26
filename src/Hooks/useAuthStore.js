import { useDispatch, useSelector } from "react-redux";
import { calendarApi } from "../api";
import { onChecking, onLogIn, onLogOut, onLogOutCalendar } from "../store";

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { status, user } = useSelector((state) => state.auth);

  const startLogin = async ({ email, password }) => {
    try {
      dispatch(onChecking());
      const { data } = await calendarApi.post("/v1/authUser/login", {
        email,
        password,
      });
      if (data.resp?.token) {
        localStorage.setItem("token", data.resp.token);
        const payload = {
          name: data.resp.name,
          uid: data.resp.uid,
        };
        dispatch(onLogIn(payload));
      }
    } catch (error) {
      console.error("Error in startLogin ", error.message);
      const { data } = error.response;
      dispatch(onLogOut(data.resp));
    }
  };

  const startRegisterUser = async ({
    name,
    email,
    password,
    confirmPassword,
  }) => {
    try {
      dispatch(onChecking());
      const { data } = await calendarApi.post("/v1/authUser/register/user", {
        name,
        email,
        password,
        confirmPassword,
      });
      if (data.resp?.token) {
        localStorage.setItem("token", data.resp.token);
        const payload = {
          name: data.resp.name,
          uid: data.resp.uid,
        };
        dispatch(onLogIn(payload));
      }
    } catch (error) {
      const { response } = error;
      console.error("Error in startRegisterUser ", response.data.resp);
      dispatch(onLogOut(response.data.resp));
    }
  };

  const checkToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogOut());
    try {
      const { resp } = await calendarApi.get("/v1/authUser/renew/token");
      localStorage("token", resp.token);
    } catch (error) {
      console.error("Error in checkToken ", error);
      localStorage.clear();
      dispatch(onLogOut());
    }
  };

  const startLogOut = () => {
    localStorage.clear();
    dispatch(onLogOut());
    dispatch(onLogOutCalendar());
  };

  return {
    startLogin,
    startRegisterUser,
    checkToken,
    startLogOut,
    status,
    user,
  };
};
