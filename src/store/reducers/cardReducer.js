import { createSlice } from "@reduxjs/toolkit";
import { readFile, writeFile } from "../../data/data";
import { Alert } from "react-native";

// const initialState = readFile();
const cardSlice = createSlice({
  name: "cards",
  initialState: {},
  reducers: {
    logState(state, action) {
      console.log("==============================================");
      console.log(state);
      console.log("==============================================");
    },
    loadData(state, action) {
      const lists = action.payload.lists;
      return { ...state, lists };
    },
    addList(state, action) {
      const newList = { name: action.payload, cards: [] };
      state.lists.push(newList);
    },
    deleteList(state, action) {
      const listName = action.payload;

      state.lists = state.lists.filter((item) => item.name !== listName);
      writeFile(state);
    },
    updateList(state, action) {
      const { oldName, newName } = action.payload;

      state.lists = state.lists.map((list) =>
        list.name === oldName ? { name: newName, cards: list.cards } : list
      );
      writeFile(state);
    },

    addCard(state, action) {
      console.log(action.payload);
      const { fieldImg, question, answer, listName } = action.payload;
      const list = state.lists.find((list) => list.name === listName);
      list.cards.push({
        imgField: fieldImg,
        question: question,
        answer: answer,
      });
      writeFile(state);
    },
    deleteCard(state, action) {
      const { listName, question } = action.payload;
      const list = state.lists.find((list) => list.name === listName);
      list.cards = list.cards.filter((item) => item.question !== question);
      writeFile(state);
    },
    // searchCard(state, action) {
    //   const { listName, question } = action.payload;
    //   const list = state.cardList.find((list) => list.listName === listName);
    //   return list.cards.find((card) => card.question === question);
    // },
    updateCard(state, action) {
      const { originalQuestion, question, answer, listName } = action.payload;
      const list = state.lists.find((list) => list.name === listName);
      list.cards = list.cards.map((c) =>
        c.question === originalQuestion
          ? { question: question, answer: answer }
          : c
      );
      writeFile(state);
    },
  },
});

export const {
  addCard,
  deleteCard,
  updateCard,
  loadData,
  addList,
  logState,
  searchCard,
  deleteList,
  updateList,
} = cardSlice.actions;

export default cardSlice.reducer;
