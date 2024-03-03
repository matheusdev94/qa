import React, { useEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { View, Button, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { setList } from "../store/reducers/navigationReducer";

import { logState } from "../store/reducers/navigationReducer";
import { addCard, deleteCard } from "../store/reducers/cardReducer";

import Icon from "react-native-vector-icons/FontAwesome";

import CardItem from "../components/card/CardItem";
import AddCardComponent from "../components/card/AddCardComponent";
import EditCardComponent from "../components/card/EditCardComponent";
import DefaultButton from "../components/buttons/default";

const CardView = ({ navigation, listName }) => {
  const dispatch = useDispatch();
  const [addState, setAddState] = useState(null);
  const [editState, setEditState] = useState(false);

  const [index, setIndex] = useState(0);
  const selectedList = useSelector((state) => state.navigation.list);

  const lists = useSelector((state) => state.cards.lists);

  let currentList = lists.find((l) => l.name === selectedList);

  const handleAddIndex = () => {
    if (index >= currentList?.cards?.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handleDecreaseIndex = () => {
    if (index <= 0) {
      setIndex(currentList?.cards?.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const showAlertWithOptions = async () => {
    return await new Promise((resolve) => {
      Alert.alert(
        "Excluir o card?",
        "Essa ação não pode ser desfeita",
        [
          {
            text: "Excluir",
            onPress: () => resolve("delete"),
          },
          {
            text: "Cancelar",
            onPress: () => resolve("cancel"),
            style: "cancel",
          },
        ],
        { cancelable: true }
      );
    });
  };
  const handleDeleteCard = async (index) => {
    const userChoice = await showAlertWithOptions();
    try {
      if (userChoice === "delete") {
        const listName = currentList.name;
        const question = currentList.cards[index].question;
        dispatch(deleteCard({ listName, question }));
        setIndex(index - 1);
      }
    } catch (error) {
      console.error("Erro ao lidar com a exclusão do cartão:", error);
    }
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
            style={styles.backButton}
            onPress={() => {
              navigation.navigate("Lists");
            }}
          >
            <Icon name="chevron-left" size={20} color="white" />
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
          <TouchableOpacity
            disabled={!currentList?.cards[index]}
            onPress={() => handleDeleteCard(index, currentList.name)}
            style={styles.cardButton}
          >
            <Text style={styles.cardButtonText}>Exluir</Text>
          </TouchableOpacity>

          <View
            style={{
              justifyContent: "flex-end",
              margin: 2,
            }}
          >
            <Text
              style={{
                color: "white",
                justifyContent: "flex-end",
                padding: 1,
              }}
            >
              {currentList.cards.length > 0 ? index + 1 : 0}/
              {currentList.cards.length}
            </Text>
          </View>

          <TouchableOpacity
            disabled={!currentList?.cards[index]}
            onPress={() => setEditState(true)}
            style={styles.cardButton}
          >
            <Text style={styles.cardButtonText}>Editar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cardContainer}>
        {currentList?.cards?.length > 0 ? (
          <CardItem card={currentList?.cards[index]} />
        ) : (
          <Text style={styles.text}>Lista vazia...</Text>
        )}
      </View>
      <View style={styles.navigationButtonsContainer}>
        <TouchableOpacity
          style={styles.cardButton}
          disabled={!currentList?.cards[index]}
          onPress={() => handleDecreaseIndex(index, currentList.name)}
        >
          <Text style={styles.cardButtonText}>Anterior</Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={!currentList?.cards[index]}
          onPress={() => handleAddIndex(index, currentList.name)}
          style={styles.cardButton}
        >
          <Text style={styles.cardButtonText}>Proximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    // height: "100%",
  },
  cardButtonText: { color: "white" },
  cardButton: {
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
    margin: 0,
  },
  backButton: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    borderRadius: 70,
    height: 40,
    width: 40,
    marginLeft: 15,
  },
  plusButton: {
    backgroundColor: "#96C7F2",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    borderRadius: 70,
    height: 40,
    marginRight: 15,
    width: 40,
  },
  plusButtonContainer: {
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  text: {
    width: "100%",
    height: "100%",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    padding: 10,
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
    justifyContent: "space-evenly",
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
