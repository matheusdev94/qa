import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setList } from "../store/reducers/navigationReducer";
import ListItem from "../components/list/ListItem";
import AddList from "../components/list/AddList";
import { TouchableOpacity } from "react-native-gesture-handler";

const ListView = ({ navigation, setListName }) => {
  const lists = useSelector((state) => state.cards.lists);

  // const [selectedList, setSelectedList] = useState(null);
  const [addListState, setAddListState] = useState(false);

  console.log(lists);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listas</Text>
      {addListState && <AddList setAddListState={setAddListState} />}
      <View style={styles.listsContainer}>
        {lists?.map((list, index) => {
          return (
            <View key={index} style={styles.item}>
              <ListItem key={index} list={list} navigation={navigation} />
            </View>
          );
        })}
      </View>
      <View style={styles.plusButtonContainer}>
        <TouchableOpacity
          style={styles.plusButton}
          onPress={() => setAddListState(true)}
        >
          <Text style={styles.textButton}>+ Lista </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textButton: {
    color: "white",
    fontSize: 18,
  },
  title: {
    fontSize: 26,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    color: "white",
  },
  item: {
    backgroundColor: "#E8F0FE",
    height: 80,
    margin: 20,
    marginBottom: 0,
    marginTop: 10,

    borderRadius: 10,
  },
  listsContainer: {
    flex: 1,
    // backgroundColor: "red",
    // alignItems: "center",
    // justifyContent: "top",
    width: "100%",
    // height: "80%",
  },
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "top",
    // width: "100%",
    height: "90%",
    paddingTop: 50,
  },
  plusButton: {
    alignSelf: "stretch", // Estique o contêiner horizontalmente
    backgroundColor: "rgb(82,193,222)'",
    marginBottom: 5,
    width: "90%",
    height: 50,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 25,
  },
  plusButtonContainer: {
    width: "100%",
  },
});

export default ListView;
