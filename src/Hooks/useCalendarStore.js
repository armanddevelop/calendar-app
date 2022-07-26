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
    try {
      //update-event
      if (activeEvent?.id) {
        const { id } = activeEvent;
        const { data } = await calendarApi.put(
          `/v1/events/update-event/${id}`,
          calendarEvent
        );
        if (data) dispatch(onUpdateEvent({ ...calendarEvent, id, user }));
        return;
      }
      //create-event
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
      console.error("Error in  startSavingEvent ", error);
    }
  };

  const startDeleteActiveEvent = async () => {
    try {
      const { id } = activeEvent;
      const { data } = await calendarApi.delete(
        `/v1/events/delete-event/${id}`
      );
      if (data.resp) dispatch(onDeleteEvent());
    } catch (error) {
      console.error("Fail to startDeleteActiveEvent ", error);
    }
  };

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get("/v1/events");
      const events = convertDateEvents(data.resp);
      //dispatch(onGetEvents(data.resp));
      dispatch(onGetEvents(events));
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
