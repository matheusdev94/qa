import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const DefaultButton = ({ onPressHandler, text, disabledIf }) => {
  const handlePress = () => {
    onPressHandler();
  };
  return (
    <TouchableOpacity
      style={disabledIf ? styles.disableButon : styles.button}
      disabled={disabledIf}
      onPress={() => handlePress()}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: { color: "white" },
  button: {
    backgroundColor: "#52C1DE",
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    width: 100,
    margin: 3,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  disableButon: {
    backgroundColor: "lightgray",
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    width: 100,
    margin: 3,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DefaultButton;
