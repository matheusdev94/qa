import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const DefaultButton = ({ onPresAction, children }) => {
  const handlePres = () => {
    onPresAction();
  };
  return (
    <TouchableOpacity onPress={() => handlePres()} style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#105BC7",
    padding: 10,
    borderRadius: 25,
    width: 150,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});

export default DefaultButton;
