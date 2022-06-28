import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isDateModalOpen: false,
  },
  reducers: {
    onOpenCloseDateModal: (state, isOpen) => {
      const { payload } = isOpen;
      state.isDateModalOpen = payload;
    },
  },
});

export const { onOpenCloseDateModal } = uiSlice.actions;
