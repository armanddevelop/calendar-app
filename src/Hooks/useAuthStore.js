import { useDispatch, useSelector } from "react-redux";
import { calendarApi } from "../api";
import { onChecking, onLogIn, onLogOut } from "../store";

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { status, user, errorMessage } = useSelector((state) => state.auth);

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
        dispatch(onLogIn({ payload }));
      }
      console.log("esto vale el response ", data);
    } catch (error) {
      console.error("something go wrong ", error.message);
      const { data } = error.response;
      dispatch(onLogOut(data.resp));
    }
  };
  return { startLogin };
};
