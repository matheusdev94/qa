import React, { useEffect, useState } from "react";
import UploadPhotoButton from "../photoUploader/uploadPhotoButton";
import {
  Image,
  TextInput,
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  Touchable,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { addCard, addList, updateCard } from "../../store/reducers/cardReducer";
import { TouchableOpacity } from "react-native-gesture-handler";

const EditCardComponent = ({ currentCard, listName, setEditState }) => {
  const [originalQuestion, setOriginalQuestion] = useState(
    currentCard.question
  );
  const [selectedImageQuestion, setSelectedImageQuestion] = useState(
    currentCard.imgField.includes("q") ? currentCard.question : null
  );
  const [selectedImageAnswer, setSelectedImageAnswer] = useState(
    currentCard.imgField.includes("a") ? currentCard.answer : null
  );

  const [question, setQuestion] = useState(currentCard.question);
  const [answer, setAnswer] = useState(currentCard.answer);

  const [err, setErr] = useState();

  const dispatch = useDispatch();

  const handleEditCard = (originalQuestion, question, answer, listName) => {
    if (!question && !selectedImageQuestion) {
      setErr("Campos vazios...");
      return;
    }
    if (!answer && !selectedImageAnswer) {
      setErr("Campos vazios...");
      return;
    }

    if (question === "" || answer === "") {
      setErr("Campos vazios...");
      return;
    }
    const imgFieldFn = () => {
      const fields = [];
      if (selectedImageAnswer) fields.push("a");
      if (selectedImageQuestion) fields.push("q");

      return fields;
    };
    const imgField = imgFieldFn();

    console.log();
    console.log();
    console.log("123456789: ", imgField);
    console.log();
    console.log();

    const card = {
      originalQuestion: originalQuestion,
      imgField: imgField,
      question: selectedImageQuestion
        ? selectedImageQuestion.toString()
        : question,
      answer: selectedImageAnswer ? selectedImageAnswer.toString() : answer,
      listName: listName,
    };
    dispatch(updateCard(card));
    setEditState(false);
  };
  return (
    <View style={styles.view}>
      <View style={styles.content}>
        <Text style={styles.title}>Editar Card</Text>
        {err && <Text>{err}</Text>}

        <View style={styles.area}>
          <View style={styles.field}>
            <Text style={styles.sectionTitle}>Pergunta</Text>

            <UploadPhotoButton
              selectedImage={selectedImageQuestion}
              setSelectedImage={setSelectedImageQuestion}
              setInputValue={setQuestion}
              resetInput={true}
            />
          </View>
          {selectedImageQuestion ? (
            <Image
              style={styles.image}
              source={{
                uri: selectedImageQuestion
                  ? selectedImageQuestion
                  : currentCard.question,
              }}
              resizeMode="contain"
            />
          ) : (
            <TextInput
              style={styles.input}
              onChangeText={(e) => setQuestion(e)}
              value={question}
              multiline={true}
              placeholder="Pergunta"
            />
          )}
        </View>

        <View style={styles.area}>
          <View style={styles.field}>
            <Text style={styles.sectionTitle}>Resposta</Text>
            <UploadPhotoButton
              selectedImage={selectedImageAnswer}
              setSelectedImage={setSelectedImageAnswer}
              setInputValue={setAnswer}
              resetInput={true}
            />
          </View>
          {selectedImageAnswer ? (
            // currentCard.imgField.includes("a") ? (
            <Image
              style={styles.image}
              source={{
                uri: selectedImageAnswer
                  ? selectedImageAnswer
                  : currentCard.answer,
              }}
              resizeMode="contain"
            />
          ) : (
            <TextInput
              style={styles.input}
              onChangeText={(e) => setAnswer(e)}
              value={answer}
              placeholder="Resposta"
              multiline={true}
            />
          )}
        </View>
        <View style={styles.viewButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              handleEditCard(originalQuestion, question, answer, listName)
            }
          >
            <Text style={styles.textBtn}>Ok</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setEditState(false)}
          >
            <Text style={styles.textBtn}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textBtn: { color: "white" },
  button: {
    width: 100,
    height: 28,
    backgroundColor: "#52C1DE",
    borderRadius: 20,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  sectionTitle: {
    justifyContent: "center",
    fontSize: 18,
    color: "white",
  },
  title: {
    fontSize: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    margin: 10,
    // backgroundColor: "white",
    color: "white",
    marginLeft: 0,
  },
  area: {
    backgroundColor: "#96C7F2",
    padding: 5,
    margin: 5,
    marginLeft: 0,
    marginRight: 0,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: 250,
  },
  field: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 10,
  },
  input: {
    backgroundColor: "white",
    color: "gray",
    height: 250, // Altura do input
    fontSize: 13, // Tamanho da fonte do input
    paddingTop: 10, // Espaçamento superior
    textAlignVertical: "top", // Alinha o texto ao topo
    padding: 5,
    borderRadius: 10,
  },
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
export default EditCardComponent;
