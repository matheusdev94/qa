import React, { useEffect, useState } from "react";
import { TextInput, View, Text, Button, StyleSheet, Alert } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { addList } from "../../store/reducers/cardReducer";
import { TouchableOpacity } from "react-native";

const AddList = ({ setAddListState }) => {
  const dispatch = useDispatch();
  const [listName, setListName] = useState("");

  // const doAddList = () => ;
  const AddList = () => {
    if (listName === "") {
      return;
    } else {
      dispatch(addList(listName));
      setAddListState(false);
    }
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
          <TouchableOpacity
            onPress={() => AddList()}
            style={styles.buttonContainer}
          >
            <Text style={styles.textBtn}>OK</Text>
          </TouchableOpacity>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => setAddListState()}
              style={styles.buttonContainer}
            >
              <Text style={styles.textBtn}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
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
  titleContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    fontSize: 20,
  },
  container: {
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

  view: {
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
  viewButton: {
    flexDirection: "row",
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
});
export default AddList;
