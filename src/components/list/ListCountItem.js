import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListCounter = ({ list }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{list.cards.length} cards</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: "gray",
    justifyContent: "flex-end",
    padding: 1,
  },
  view: {
    justifyContent: "flex-end",
    margin: 2,
  },
});

export default ListCounter;
