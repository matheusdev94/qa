import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

import { useDispatch } from "react-redux";
import {
  addList,
  loadData,
  updateList,
} from "../../store/reducers/cardReducer";
import OkCancelButton from "../buttons/OkCancelButton";

const EditList = ({ setEditListState, originalListName }) => {
  const dispatch = useDispatch();
  const [listName, setListName] = useState(
    originalListName ? originalListName : null
  );

  const editList = () => {
    if (listName) {
      dispatch(updateList({ originalListName, listName }));
    }
    setEditListState(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.title}>Editar Lista</Text>
        <Text style={styles.text}>Nome :</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => setListName(e)}
          value={listName}
          placeholder="Nome da lista"
          maxLength={50}
        />
        <View style={styles.buttonContainer}>
          <OkCancelButton onPressHandler={() => editList()} text={"Ok"} />
          <OkCancelButton
            onPressHandler={() => setEditListState(false)}
            text={"Cancelar"}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    fontSize: 23,
    color: "gray",
  },
  text: {
    margin: 10,
    marginBottom: 0,
    color: "gray",
  },
  view: {
    backgroundColor: "#E8F0FE",
    padding: 20,
    borderRadius: 14,
  },
  input: {
    backgroundColor: "white",
    color: "gray",
    margin: 10,
    borderRadius: 5,
    padding: 4,
  },
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "10%",
    position: "absolute",
    width: "100%",
    height: "110%",
    zIndex: 10,
    alignContent: "center",
    justifyContent: "center",
    bottom: 0,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
});
export default EditList;
