import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import ListItem from "../list/ListItem";
import AddList from "../list/AddList";
import { TouchableOpacity } from "react-native";
import EditList from "../list/EditList";

const ListView = ({ navigation }) => {
  const lists = useSelector((state) => state.cards.lists);
  const [addListState, setAddListState] = useState(false);
  const [editListState, setEditListState] = useState(false);
  const [editListName, setEditListName] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listas</Text>
      {addListState && <AddList setAddListState={setAddListState} />}
      {editListState && (
        <EditList
          setEditListState={setEditListState}
          originalListName={editListName}
        />
      )}
      <View style={styles.listsContainer}>
        {lists?.map((list, index) => {
          return (
            <View key={index} style={styles.item}>
              <ListItem
                setEditListState={setEditListState}
                setEditListName={setEditListName}
                key={index}
                list={list}
                navigation={navigation}
              />
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
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "top",
    height: "90%",
    paddingTop: 50,
  },
  plusButton: {
    alignSelf: "stretch",
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
