import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./reducers/cardReducer";
import navigationReducer from "./reducers/navigationReducer";

const store = configureStore({
  reducer: {
    cards: cardReducer,
    navigation: navigationReducer,
  },
});
export default store;
