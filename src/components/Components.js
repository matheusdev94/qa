import React, { useEffect, useState } from "react";
import { readFile } from "../data/data";

import { loadData } from "../store/reducers/cardReducer";
import { useDispatch } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CardView from "./views/CardView.js";
import ListView from "./views/ListView.js";

const Stack = createStackNavigator();

const Components = () => {
  const dispatch = useDispatch();

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

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Lists"
          component={ListView}
          options={{ title: "Lists", headerShown: false }}
        />
        <Stack.Screen
          name="CardView"
          component={CardView}
          options={{ title: "Card", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Components;
