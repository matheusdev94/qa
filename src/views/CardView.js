import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { View, Button, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { setList } from "../store/reducers/navigationReducer";

import { logState } from "../store/reducers/navigationReducer";
import { addCard, deleteCard } from "../store/reducers/cardReducer";

import Icon from "react-native-vector-icons/FontAwesome";

import CardItem from "../components/card/CardItem";
import AddCardComponent from "../components/card/AddCardComponent";
import EditCardComponent from "../components/card/EditCardComponent";

const CardView = ({ navigation, listName }) => {
  const dispatch = useDispatch();
  const [addState, setAddState] = useState(null);
  const [editState, setEditState] = useState(false);

  const [index, setIndex] = useState(0);
  const selectedList = useSelector((state) => state.navigation.list);

  const lists = useSelector((state) => state.cards.lists);

  let currentList = lists.find((l) => l.name === selectedList);
  console.log("CLCLCLCL> ", currentList);

  const handleAddIndex = () => {
    if (index >= currentList?.cards?.length - 1) {
      return;
    }
    setIndex(index + 1);
  };
  const handleDecreaseIndex = () => {
    if (index <= 0) {
      return;
    }
    setIndex(index - 1);
  };

  const handleDeleteCard = (index) => {
    const listName = currentList?.name;
    const question = currentList?.cards[index].question;
    dispatch(deleteCard({ listName, question }));
  };

  return (
    <View style={styles.container}>
      {addState && (
        <AddCardComponent
          listName={currentList.name}
          setAddState={() => setAddState(false)}
        />
      )}
      {editState && (
        <EditCardComponent
          currentCard={currentList?.cards[index]}
          listName={currentList.name}
          setEditState={() => setEditState(false)}
        />
      )}
      <View style={styles.header}>
        <View style={styles.plusButtonContainer}>
          <TouchableOpacity
            style={styles.plusButton}
            onPress={() => {
              navigation.navigate("Lists");
            }}
          >
            <Text style={styles.textButton}>
              <Icon name="chevron-left" size={20} color="white" />
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>{currentList?.name}</Text>
        <View style={styles.plusButtonContainer}>
          <TouchableOpacity
            style={styles.plusButton}
            onPress={() => {
              setAddState(true);
            }}
          >
            <Text style={styles.textButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.plusButtonContainer}>
        <View style={styles.navButtons}>
          <View style={{ margin: 2 }}>
            <Button
              // Defina a margem como 5 pixels
              title="Editar"
              onPress={() => setEditState(true)}
            />
          </View>
          <View style={{ margin: 2 }}>
            <Button
              title="Excluir"
              onPress={() => {
                handleDeleteCard(index, currentList.name);
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.cardContainer}>
        {currentList?.cards?.length > 0 ? (
          <CardItem card={currentList?.cards[index]} />
        ) : (
          <Text style={styles.text}>Lista vazia...</Text>
        )}
      </View>

      <View style={styles.navButtons}>
        <View style={{ margin: 2 }}>
          <Button
            // Defina a margem como 5 pixels
            title="< Anterior"
            onPress={() => handleDecreaseIndex()}
          />
        </View>
        <View style={{ margin: 2 }}>
          <Button title="Proximo >" onPress={() => handleAddIndex()} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    height: "100%",
    color: "white",
  },
  header: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignSelf: "center",
    // backgroundColor: "white",
    width: "100%",
  },
  textButton: {
    color: "white",
    padding: 0,
    fontSize: 30,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  plusButton: {
    backgroundColor: "#96C7F2",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    borderRadius: 70,
    height: 40,
    width: 40,
  },
  plusButtonContainer: {
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    margin: 5,
  },
  text: {
    width: "100%",
    height: "100%",
    backgroundColor: "aqua",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
  },
  listsContainer: {
    flex: 1,
    // backgroundColor: "",
    alignItems: "center",
    justifyContent: "top",
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "top",
    width: "100%",
    height: "100%",
  },
  navButtons: {
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: 4,
  },
  plusButtonContainer: {
    // paddingTop: 20, // Ajuste o espaçamento do topo conforme necessário
    // paddingHorizontal: 20, // Adicione preenchimento horizontal
    alignSelf: "stretch", // Estique o contêiner horizontalmente
    // backgroundColor: "white",
    bottom: 0,
    margin: 4,
    // width: "100%",
  },
  cardContainer: {
    backgroundColor: "black",
    width: "100%",
    height: "75%",
  },
});
export default CardView;
