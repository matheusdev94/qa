import React, { useEffect, useState } from "react";
import { TextInput, View, Text, Button, StyleSheet, Alert } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { addList } from "../../store/reducers/cardReducer";
import { TouchableOpacity } from "react-native-gesture-handler";

const AddList = ({ setAddListState }) => {
  const dispatch = useDispatch();
  const [listName, setListName] = useState("");
  const handleAddList = () => {
    dispatch(addList(listName));
    setAddListState(false);
  };
  return (
    <View style={styles.view}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={{ fontSize: 20 }}>Nova Lista</Text>
        </View>
        <Text style={{ margin: 10, marginBottom: 0 }}>Nome :</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => setListName(e)}
          value={listName}
          placeholder="Nome da lista"
        />
        <View style={styles.viewButton}>
          <View style={styles.buttonContainer}>
            <Button title="Ok" onPress={() => handleAddList()} />
          </View>
          <TouchableOpacity
            onPress={() => setAddListState()}
            style={styles.buttonContainer}
          >
            <Text>Cancel</Text>
          </TouchableOpacity>
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
export default AddList;
