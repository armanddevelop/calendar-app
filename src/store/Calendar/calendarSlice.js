import { createSlice } from "@reduxjs/toolkit";

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    isLoadingEvents: true,
    events: [],
    activeEvent: null,
  },
  reducers: {
    onGetEvents: (state, { payload = [] }) => {
      state.isLoadingEvents = false;
      console.log("esto vale payload ", payload);
      //state.events=payload;
      payload.forEach((event) => {
        const existEvent = state.events.some(
          (dbEvent) => dbEvent.id === event.id
        );
        if (!existEvent) {
          state.events.push(event);
        }
      });
    },
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
    onClearActiveEvent: (state) => {
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }) => {
      const { id } = payload;
      state.events = state.events.map((event) => {
        if (event.id === id) {
          event = payload;
        }
        return event;
      });
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          ({ _id }) => _id !== state.activeEvent._id
        );
        state.activeEvent = null;
      }
    },
  },
});

export const {
  onGetEvents,
  onSetActiveEvent,
  onAddNewEvent,
  onClearActiveEvent,
  onUpdateEvent,
  onDeleteEvent,
} = calendarSlice.actions;
