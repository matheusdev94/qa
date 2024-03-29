import React, { useState } from "react";
import UploadPhotoButton from "../photoUploader/uploadPhotoButton";
import { View, Text, StyleSheet } from "react-native";

import { useDispatch } from "react-redux";
import { updateCard } from "../../store/reducers/cardReducer";
import OkCancelButton from "../buttons/OkCancelButton";
import QAInputField from "./QAInputField";

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
    const imgFieldFn = () => {
      const fields = [];
      if (selectedImageAnswer) fields.push("a");
      if (selectedImageQuestion) fields.push("q");

      return fields;
    };
    const imgField = imgFieldFn();

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
          <QAInputField
            placeHolder="Pergunta"
            value={question}
            selectedImage={selectedImageQuestion}
            changeValue={setQuestion}
          />
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
          <QAInputField
            placeHolder="Resposta"
            value={answer}
            selectedImage={selectedImageAnswer}
            changeValue={setAnswer}
          />
        </View>
        <View style={styles.viewButton}>
          <OkCancelButton
            onPressHandler={() =>
              handleEditCard(originalQuestion, question, answer, listName)
            }
            text="Ok"
          />
          <OkCancelButton
            onPressHandler={() => setEditState(false)}
            text="Cancelar"
          />
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
    height: 250,
    fontSize: 13,
    paddingTop: 10,
    textAlignVertical: "top",
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
    alignContent: "center",
    justifyContent: "center",
  },
});
export default EditCardComponent;
