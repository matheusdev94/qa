import { createSlice } from "@reduxjs/toolkit";
import { readFile } from "../../data/data";
const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    list: null,
    card: null,
  },
  reducers: {
    logState(state) {
      console.log("======================================================");
      console.log(state);
      console.log("======================================================");
    },
    setList(state, action) {
      const list = action.payload;
      state.list = list;
    },
    setCard(state, action) {
      const card = action.payload.card;
      return { ...state.card, card };
    },
  },
});

export const { setList, setCard, logState } = navigationSlice.actions;

export default navigationSlice.reducer;
