import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const OkCancelButton = ({ onPressHandler, text }) => {
  const handlePress = () => {
    onPressHandler();
  };
  return (
    <TouchableOpacity
      onPress={() => handlePress()}
      style={styles.buttonContainer}
    >
      <Text style={styles.textBtn}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textBtn: { color: "white" },
  buttonContainer: {
    width: 120,
    height: 38,
    backgroundColor: "#52C1DE",
    borderRadius: 20,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default OkCancelButton;
