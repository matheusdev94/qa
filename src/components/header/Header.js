import React from "react";
import { View, Button } from "react-native";

export const Header = ({ backPage }) => {
  return (
    <View style={{ position: "absolute", top: 0 }}>
      <Button title="Voltar" onPress={() => backPage()} />
    </View>
  );
};
