import { useSelector, useDispatch } from "react-redux";
import { calendarApi } from "../api";
import {
  onSetActiveEvent,
  onAddNewEvent,
  onClearActiveEvent,
  onUpdateEvent,
  onDeleteEvent,
} from "../store";

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);
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
    if (activeEvent?.id) {
      //updateEvent
      const { id, user } = activeEvent;
      dispatch(
        onUpdateEvent({
          ...calendarEvent,
          id,
          user,
        })
      );
    } else {
      //creating event
      try {
        const { data } = await calendarApi.post(
          "/v1/events/create-new-event",
          calendarEvent
        );
        const id = data && data.resp && data.resp.id;
        dispatch(
          onAddNewEvent({
            ...calendarEvent,
            id,
            user,
          })
        );
      } catch (error) {
        console.error("Somthing happend ", error);
      }
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
