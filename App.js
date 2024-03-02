import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/store/store.js";

import Components from "./src/components/Components.js";

export default function App() {
  return (
    <Provider store={store}>
      <Components />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    // position: "relative", // Certifique-se de que o container tenha posicionamento relativo
  },
});
