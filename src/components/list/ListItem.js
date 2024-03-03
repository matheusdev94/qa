import React, { useEffect, useState } from "react";
import { TextInput, View, Text, Button, StyleSheet, Alert } from "react-native";
import { useDispatch } from "react-redux/dist/react-redux";
import { setList } from "../../store/reducers/navigationReducer";
import { deleteList } from "../../store/reducers/cardReducer";
import DefaultButton from "../buttons/default";

import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";

const ListItem = ({ list, navigation }) => {
  const [confiramtion, setConfirmation] = useState(false);
  const dispatch = useDispatch();

  const setSelectedList = () => {
    dispatch(setList(list.name));
    navigation.navigate("CardView");
  };
  const showAlertWithOptions = async () => {
    return await new Promise((resolve) => {
      Alert.alert(
        "Excluir?",
        "Essa ação não pode ser desfeita.",
        [
          {
            text: "Excluir",
            onPress: () => resolve(true),
          },
          {
            text: "Cancelar",
            onPress: () => resolve(false),
            style: "cancel",
          },
        ],
        { cancelable: true }
      );
    });
  };
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

      <View style={styles.itemContainer}>
        <Text style={{ fontSize: 21 }}>{list.name}</Text>
      </View>

      <TouchableOpacity
        onPress={() => setSelectedList(list.name)}
        style={styles.buttonNextContainer}
      >
        <Icon name="chevron-right" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonNextContainer: {
    backgroundColor: "#52C1DE",
    height: 45,
    width: 45,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 100,
    margin: 7,
  },
  itemContainer: {
    // flexDirection: 'row'
    // width: "80%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    margin: 5,
    backgroundColor: "red",
    color: "white",
    padding: 3,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
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
