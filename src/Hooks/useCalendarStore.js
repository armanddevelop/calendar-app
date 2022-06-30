import { useSelector, useDispatch } from "react-redux";
import { onSetActiveEvent, onAddNewEvent, onClearActiveEvent } from "../store";

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();
  const setActiveEvent = (event) => {
    dispatch(onSetActiveEvent(event));
  };
  const clearActiveEvent = () => {
    dispatch(onClearActiveEvent());
  };
  const startSavingEvent = async (calendarEvent) => {
    //TODO: make the backend conexion
    //happy path
    if (calendarEvent._id) {
      //updateEvent
    } else {
      //creating
      dispatch(
        onAddNewEvent({
          ...calendarEvent,
          _id: new Date().getTime(),
          bgcolor: "#fafafa",
          user: {
            _id: "12346",
            name: "Nalleli",
          },
        })
      );
    }
  };
  return {
    events,
    activeEvent,
    setActiveEvent,
    startSavingEvent,
    clearActiveEvent,
  };
};
