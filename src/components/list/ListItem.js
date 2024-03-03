import React, { useEffect, useState } from "react";
import { TextInput, View, Text, Button, StyleSheet, Alert } from "react-native";
import { useDispatch } from "react-redux/dist/react-redux";
import { setList } from "../../store/reducers/navigationReducer";
import { deleteList } from "../../store/reducers/cardReducer";
import DefaultButton from "../buttons/defaultButton";

import { confirmationAlert } from "../confirmation/ConfirmationAlert";

import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import IconButton from "../buttons/IconButton";

const ListItem = ({ list, navigation }) => {
  const [confiramtion, setConfirmation] = useState(false);
  const dispatch = useDispatch();

  const setSelectedList = () => {
    dispatch(setList(list.name));
    navigation.navigate("CardView");
  };
  const showAlertWithOptions = async () =>
    confirmationAlert("Excluir a lista?", "Essa ação não pode ser desfeita.");

  const handleDeleteList = async () => {
    const userChoice = await showAlertWithOptions();

    if (userChoice) {
      dispatch(deleteList(list.name));
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => handleDeleteList()}
      >
        <Text style={{ color: "white" }}>Exluir</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => setSelectedList(list.name)}
      >
        <Text style={{ fontSize: 21 }}>{list.name}</Text>
      </TouchableOpacity>

      <IconButton
        onPressHandler={() => setSelectedList(list.name)}
        iconName="chevron-right"
        size={20}
        iconColor="#fff"
        background="#52C1DE"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: "100%",
    width: 200,
  },
  buttonContainer: {
    margin: 5,
    backgroundColor: "red",
    color: "white",
    padding: 3,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    height: "80%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "none",
    // paddingTop: 20, // Ajuste o espaçamento do topo conforme necessário
    // paddingHorizontal: 20, // Adicione preenchimento horizontal
    alignSelf: "stretch", // Estique o contêiner horizontalmente
    backgroundColor: "transparent",
    // width: "100%",
  },
  container: {
    flex: 1,
    // backgroundColor: "red",
    // backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch",
    flexDirection: "row",
    // height: 50,
  },
});
export default ListItem;
