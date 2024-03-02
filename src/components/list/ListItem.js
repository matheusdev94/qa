import React, { useEffect, useState } from "react";
import { TextInput, View, Text, Button, StyleSheet, Alert } from "react-native";
import { useDispatch } from "react-redux/dist/react-redux";
import { setList } from "../../store/reducers/navigationReducer";
import { deleteList } from "../../store/reducers/cardReducer";

const ListItem = ({ list, navigation }) => {
  const [confiramtion, setConfirmation] = useState(false);
  const dispatch = useDispatch();

  const setSelectedList = () => {
    dispatch(setList(list.name));
    navigation.navigate("CardView");
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 19 }}>{list.name}</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => setSelectedList(list.name)}
            title="Selecionar"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => dispatch(deleteList(list.name))}
            title="Excluir"
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    margin: 5,
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
    justifyContent: "flex-start",
    alignSelf: "stretch",

    // height: 50,
  },
});
export default ListItem;
