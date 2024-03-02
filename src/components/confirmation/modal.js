import React, { useEffect, useState } from "react";
import { TextInput, View, Text, Button, StyleSheet, Alert } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { addList } from "../../store/reducers/cardReducer";

const Modal = ({ child, event, cancel }) => {
  return (
    <View style={styles.view}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={{ fontSize: 20 }}>Certeza?</Text>
        </View>
        <View style={styles.viewButton}>
          <View style={styles.buttonContainer}>
            <Button title="Ok" onPress={() => event()} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={() => cancel()} />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: "center",
    alignContent: "center",
    // backgroundColor: "black",
    alignItems: "center",
    fontSize: 20,
  },
  container: {
    backgroundColor: "#E8F0FE",
    padding: 20,
    borderRadius: 14,
  },
  input: { backgroundColor: "lightgray", color: "white", margin: 10 },
  buttonContainer: {
    margin: "2%",
  },
  view: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "10%",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 10,
    alignContent: "center",
    justifyContent: "center",
  },
  viewButton: {
    flexDirection: "row",
    width: "100%",
    // backgroundColor: "blue",
    alignContent: "center",
    justifyContent: "center",
  },
});
export default Modal;
