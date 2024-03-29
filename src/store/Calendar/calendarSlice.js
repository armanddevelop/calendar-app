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
          ({ id }) => id !== state.activeEvent.id
        );
        state.activeEvent = null;
      }
    },

    onLogOutCalendar: (state) => {
      state.isLoadingEvents = true;
      state.events = [];
      state.activeEvent = null;
    },
  },
});

export const {
  onGetEvents,
  onSetActiveEvent,
  onAddNewEvent,
  onLogOutCalendar,
  onClearActiveEvent,
  onUpdateEvent,
  onDeleteEvent,
} = calendarSlice.actions;
