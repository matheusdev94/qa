import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { readFile } from "../data/data";
import { View, Text } from "react-native";

import { loadData, logState } from "../store/reducers/cardReducer";
import { useDispatch, useSelector } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CardView from "../views/CardView.js";
import ListView from "../views/ListView.js";

const Stack = createStackNavigator();

const Components = () => {
  const [listName, setListName] = useState(null);

  const dispatch = useDispatch();
  // const lists = useSelector((state) => state.cards.lists);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await readFile();
        dispatch(loadData(data));
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    }
    fetchData();
  }, []);
  // console.log(lists);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Lists"
          component={ListView}
          options={{ title: "Lists", headerShown: false }}
          setListName={setListName}
        />
        <Stack.Screen
          name="CardView"
          component={CardView}
          options={{ title: "Card", headerShown: false }}
          listName={listName}
          // lists={lists}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Components;
