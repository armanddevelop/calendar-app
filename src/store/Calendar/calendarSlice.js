import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const temporalEvent = {
  _id: new Date().getTime(),
  title: "Cumpleaños de pruebas",
  start: moment().toDate(),
  end: moment().add(2, "hours").toDate(),
  bgcolor: "#fafafa",
  notes: "alicha hehuche",
  user: {
    _id: "12346",
    name: "licha",
  },
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: [temporalEvent],
    activeEvent: null,
  },
  reducers: {
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
      const { _id } = payload;
      state.events = state.events.map((event) => {
        if (event._id === _id) {
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
  onSetActiveEvent,
  onAddNewEvent,
  onClearActiveEvent,
  onUpdateEvent,
  onDeleteEvent,
} = calendarSlice.actions;
