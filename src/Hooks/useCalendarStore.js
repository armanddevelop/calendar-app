import { useSelector, useDispatch } from "react-redux";
import {
  onSetActiveEvent,
  onAddNewEvent,
  onClearActiveEvent,
  onUpdateEvent,
  onDeleteEvent,
} from "../store";

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
    if (activeEvent?._id) {
      //updateEvent
      const { _id, bgcolor, user } = activeEvent;
      dispatch(
        onUpdateEvent({
          ...calendarEvent,
          _id,
          bgcolor,
          user,
        })
      );
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
  const startDeleteActiveEvent = async () => {
    //todo: reach the backend
    dispatch(onDeleteEvent());
  };
  return {
    events,
    activeEvent,
    hasEventSeleted: !!activeEvent,
    setActiveEvent,
    startSavingEvent,
    clearActiveEvent,
    startDeleteActiveEvent,
  };
};
