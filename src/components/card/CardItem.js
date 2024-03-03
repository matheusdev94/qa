import React, { useEffect, useState } from "react";
import { View, Button, Text, TouchableOpacity, Image } from "react-native";
import { StyleSheet } from "react-native";

const CardItem = ({ card }) => {
  const [cardSide, setCardSide] = useState("Question");
  useEffect(() => {
    setCardSide("Question");
  }, [card]);
  return (
    <View style={styles.cardContainer}>
      {card ? (
        <View style={styles.container}>
          {cardSide === "Question" ? (
            <TouchableOpacity
              onPress={() => setCardSide("Answer")}
              style={{
                padding: 10,
                width: "100%",
                height: "100%",
                justifyContent: "center",
              }}
            >
              {card?.imgField?.includes("q") ? (
                <>
                  <Text style={{ color: "white" }}>Pergunta:</Text>
                  <Image
                    style={styles.image}
                    source={{ uri: card.question }}
                    resizeMode="contain"
                  />
                </>
              ) : (
                <Text style={styles.text}>Pergunta: {card.question}</Text>
              )}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setCardSide("Question")}
              style={{
                padding: 10,
                width: "100%",
                height: "100%",
                justifyContent: "center",
              }}
            >
              {card?.imgField?.includes("a") ? (
                <>
                  <Text style={{ color: "white" }}>Reposta:</Text>

                  <Image
                    style={styles.image}
                    source={{ uri: card.answer }}
                    resizeMode="contain"
                  />
                </>
              ) : (
                <Text style={styles.text}>Resposta: {card.answer}</Text>
              )}
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <Text style={styles.text}>Lista vazia...</Text>
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
    padding: 10,
  },
  cardContainer: {
    backgroundColor: "black",
    width: "100%",
    height: "75%",
  },
});

export default CardItem;
