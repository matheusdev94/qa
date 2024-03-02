import React, { useState } from "react";
import { View, Button, Text, TouchableOpacity, Image } from "react-native";
import { StyleSheet } from "react-native";

const CardItem = ({ card }) => {
  const [cardSide, setCardSide] = useState("Question");
  console.log("9999999999999999999999999999999999999999", card.answer);
  return (
    <View style={styles.container}>
      {cardSide === "Question" ? (
        <TouchableOpacity
          onPress={() => setCardSide("Answer")}
          style={{ padding: 10 }}
        >
          {card.imgField.includes("q") ? (
            <Image style={styles.image} source={{ uri: card.question }} />
          ) : (
            <Text style={styles.text}>Question: {card.question}</Text>
          )}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => setCardSide("Question")}
          style={{ padding: 10 }}
        >
          {card.imgField.includes("a") ? (
            <Image style={styles.image} source={{ uri: card.answer }} />
          ) : (
            <Text style={styles.text}>Answer: {card.answer}</Text>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  image: { width: "100%", height: "100%" },
  container: {},
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
});

export default CardItem;
