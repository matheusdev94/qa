import React, { useEffect, useState } from "react";
import { TextInput, View, Text, Button, StyleSheet, Alert } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { addCard, addList, updateCard } from "../../store/reducers/cardReducer";

const AddCardComponent = ({ currentCard, listName, setEditState }) => {
  const [originalQuestion, setOriginalQuestion] = useState(
    currentCard.question
  );
  const [question, setQuestion] = useState(currentCard.question);
  const [answer, setAnswer] = useState(currentCard.answer);
  const [err, setErr] = useState();
  const dispatch = useDispatch();

  const handleEditCard = (originalQuestion, question, answer, listName) => {
    if (question === "" || answer === "") {
      setErr("Campos vazios...");
      return;
    }
    dispatch(updateCard({ originalQuestion, question, answer, listName }));
    setEditState(false);
  };
  return (
    <View style={styles.view}>
      <View style={styles.content}>
        {err && <Text>{err}</Text>}
        <Text>Question</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => setQuestion(e)}
          value={question}
          placeholder="Question"
        />
        <Text>Answer</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => setAnswer(e)}
          value={answer}
          placeholder="Answer"
        />
        <View style={styles.viewButton}>
          <View style={styles.buttonContainer}>
            <Button
              title="Ok"
              onPress={() =>
                handleEditCard(originalQuestion, question, answer, listName)
              }
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={() => setEditState(false)} />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  content: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 5,
  },
  input: { backgroundColor: "white", color: "gray" },
  buttonContainer: {
    margin: "2%",
  },
  view: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "10%",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 10,
    alignContent: "center",
    justifyContent: "center",
  },
  viewButton: {
    flexDirection: "row",
    width: "100%",
    // backgroundColor: "blue",
    alignContent: "center",
    justifyContent: "center",
  },
});
export default AddCardComponent;
