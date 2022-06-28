import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const temporalEvent = {
  _id: new Date().getTime(),
  title: "Cumpleaños alicha",
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
  },
});

export const { onSetActiveEvent } = calendarSlice.actions;
