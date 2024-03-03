import React from "react";
import { View, Text, StyleSheet } from "react-native";

const IndexCounter = ({ listLength, index }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>
        {listLength ? index + 1 : 0}/{listLength}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: "white",
    justifyContent: "flex-end",
    padding: 1,
  },
  view: {
    justifyContent: "flex-end",
    margin: 2,
  },
});

export default IndexCounter;
