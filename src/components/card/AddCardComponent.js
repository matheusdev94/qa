import React, { useEffect, useState } from "react";
import { TextInput, View, Text, Button, StyleSheet, Alert } from "react-native";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addCard, addList } from "../../store/reducers/cardReducer";

import UploadPhotoButton from "../photoUploader/uploadPhotoButton";

import Icon from "react-native-vector-icons/FontAwesome";
import { setList } from "../../store/reducers/navigationReducer";

const AddCardComponent = ({ setAddState, listName }) => {
  const [selectedImageQuestion, setSelectedImageQuestion] = useState(null);
  const [selectedImageAnswer, setSelectedImageAnswer] = useState(null);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [err, setErr] = useState();
  const dispatch = useDispatch();

  const addNewCard = () => {
    //validations
    if (question === "" && !selectedImageQuestion) {
      setErr("Campo de pergunta vazio...");
      return;
    }

    if (answer === "" && !selectedImageAnswer) {
      setErr("Campo de resposta vazio...");
      return;
    }

    const imgFieldFn = () => {
      const fields = [];
      if (selectedImageAnswer) fields.push("a");
      if (selectedImageQuestion) fields.push("q");

      return fields;
    };

    const imgField = imgFieldFn();
    const card = {
      imgField: imgField,
      question: selectedImageQuestion
        ? selectedImageQuestion.toString()
        : question,
      answer: selectedImageAnswer ? selectedImageAnswer.toString() : answer,
      listName: listName,
    };

    dispatch(addCard(card));
    setAddState(false);
  };

  return (
    <View style={styles.view}>
      <View style={styles.content}>
        <Text style={styles.title}>Novo Card</Text>
        {err && <Text>{err}</Text>}
        <View style={styles.header}>
          <Text>
            {selectedImageQuestion && (
              <Icon name="check" size={20} color="green" />
            )}
            Pergunta
          </Text>
          <UploadPhotoButton
            selectedImage={selectedImageQuestion}
            setSelectedImage={setSelectedImageQuestion}
          />
        </View>

        {selectedImageQuestion ? (
          <></>
        ) : (
          <TextInput
            style={styles.input}
            onChangeText={(e) => setQuestion(e)}
            value={question}
            placeholder="Pergunta"
          />
        )}
        <View style={styles.header}>
          <Text>
            {selectedImageAnswer && (
              <Icon name="check" size={20} color="green" />
            )}
            Resposta
          </Text>

          <UploadPhotoButton
            selectedImage={selectedImageAnswer}
            setSelectedImage={setSelectedImageAnswer}
          />
        </View>
        {selectedImageAnswer ? (
          <></>
        ) : (
          <TextInput
            style={styles.input}
            onChangeText={(e) => setAnswer(e)}
            value={answer}
            placeholder="Resposta"
          />
        )}

        <View style={styles.viewButton}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => addNewCard()}
          >
            <Text style={styles.textBtn}>OK</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => setAddState()}
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
  viewButton: {
    flexDirection: "row",
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: 120,
    height: 38,
    backgroundColor: "#52C1DE",
    borderRadius: 20,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    margin: 10,
    color: "white",
    marginLeft: 0,
  },
  header: {
    flexDirection: "row",
    margin: 5,
    justifyContent: "space-between",
    marginBottom: 3,
    alignItems: "flex-end",
  },
  content: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 5,
  },
  input: {
    backgroundColor: "white",
    color: "gray",
    height: 150, // Altura do input
    fontSize: 16, // Tamanho da fonte do input
    paddingTop: 10, // Espaçamento superior
    textAlignVertical: "top", // Alinha o texto ao topo
    padding: 5,
    borderRadius: 10,
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
