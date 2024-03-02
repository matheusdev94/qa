import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./reducers/cardReducer";
import navigationReducer from "./reducers/navigationReducer";

const store = configureStore({
  reducer: {
    cards: cardReducer, // Nome do slice 'cards' para o reducer cardReducer
    navigation: navigationReducer,
  },
  // Middleware opcional, se necessário
  // middleware: [...middleware],
  // DevTools para desenvolvimento
  // devTools: process.env.NODE_ENV !== 'production',
});
export default store;
