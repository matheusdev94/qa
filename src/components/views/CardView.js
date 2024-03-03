import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { deleteCard } from "../../store/reducers/cardReducer";

import CardItem from "../card/CardItem";
import AddCardComponent from "../card/AddCard";
import EditCardComponent from "../card/EditCard";
import DefaultButton from "../buttons/DefaultButton";
import { confirmationAlert } from "../confirmation/ConfirmationAlert";
import IconButton from "../buttons/IconButton";
import IndexCounter from "../card/IndexCounter";

const CardView = ({ navigation }) => {
  const dispatch = useDispatch();
  const [addState, setAddState] = useState(null);
  const [editCardState, setCardEditState] = useState(false);
  const [editListState, setEditListState] = useState(false);
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
  const showAlertWithOptions = async () =>
    confirmationAlert("Excluir o card?", "Essa ação não pode ser desfeita.");

  const handleDeleteCard = async (index) => {
    const userChoice = await showAlertWithOptions();
    try {
      if (userChoice) {
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
          setIndex={() => setIndex(currentList.cards.length)}
        />
      )}
      {editCardState && (
        <EditCardComponent
          currentCard={currentList?.cards[index]}
          listName={currentList.name}
          setEditState={() => setCardEditState(false)}
        />
      )}

      {editListState && (
        <EditList
          setEditListState={setEditListState}
          originalListName={list.name}
        />
      )}
      <View style={styles.header}>
        {/* BackButton */}
        <IconButton
          onPressHandler={() => {
            navigation.navigate("Lists");
          }}
          iconName="chevron-left"
          size={20}
          iconColor="#fff"
          background="transparent"
        />
        <Text style={styles.title}>{currentList?.name}</Text>
        {/* PlusButton */}
        <IconButton
          onPressHandler={() => {
            setAddState(true);
          }}
          text="+"
          size={30}
          iconColor="#fff"
          background="#52C1DE"
        />
      </View>
      <View style={styles.navButtons}>
        <DefaultButton
          disabledIf={!currentList?.cards[index]}
          onPressHandler={() => handleDeleteCard(index, currentList.name)}
          text={"Excluir"}
        />
        <IndexCounter listLength={currentList.cards.length} index={index} />
        <DefaultButton
          disabledIf={!currentList?.cards[index]}
          onPressHandler={() => setCardEditState(true)}
          text={"Editar"}
        />
      </View>
      <CardItem card={currentList?.cards[index]} />
      <View style={styles.navigationButtonsContainer}>
        <DefaultButton
          onPressHandler={() => handleDecreaseIndex(index, currentList.name)}
          text={"< Anterior"}
          disabledIf={
            !currentList?.cards[index] || currentList?.cards.length <= 1
          }
        />
        <DefaultButton
          disabledIf={
            !currentList?.cards[index] || currentList?.cards.length <= 1
          }
          onPressHandler={() => handleAddIndex(index, currentList.name)}
          text={"Proximo >"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
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
    width: "100%",
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
});
export default CardView;
