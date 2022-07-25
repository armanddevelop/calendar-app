import { useSelector, useDispatch } from "react-redux";
import { calendarApi } from "../api";
import {
  onGetEvents,
  onSetActiveEvent,
  onAddNewEvent,
  onClearActiveEvent,
  onUpdateEvent,
  onDeleteEvent,
} from "../store";
import { convertDateEvents } from "../utils/covertDateEvents";

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
      const { id } = activeEvent;
      const { data } = await calendarApi.put(
        `/v1/events/update-event/${id}`,
        calendarEvent
      );
      if (data) dispatch(onUpdateEvent({ ...calendarEvent, id, user }));
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
        console.error("Error in  startSavingEvent", error);
      }
    }
  };
  const startDeleteActiveEvent = async () => {
    //todo: reach the backend
    dispatch(onDeleteEvent());
  };

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get("/v1/events");
      dispatch(onGetEvents(data.resp));
    } catch (error) {
      console.error("Fail to startLodingEvents ", error);
    }
  };

  return {
    events,
    activeEvent,
    hasEventSeleted: !!activeEvent,
    setActiveEvent,
    startLoadingEvents,
    startSavingEvent,
    clearActiveEvent,
    startDeleteActiveEvent,
  };
};
