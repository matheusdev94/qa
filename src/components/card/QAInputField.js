import React from "react";
import { Image, TextInput, View, StyleSheet } from "react-native";

const QAInputField = ({ placeHolder, value, selectedImage, changeValue }) => {
  return (
    <View style={styles.view}>
      {selectedImage ? (
        <Image
          style={styles.image}
          source={{
            uri: selectedImage ? selectedImage : value,
          }}
          resizeMode="contain"
        />
      ) : (
        <TextInput
          style={styles.input}
          onChangeText={(e) => changeValue(e)}
          value={value}
          multiline={true}
          placeholder={placeHolder}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  view: {},
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
  image: {
    width: "100%",
    height: 250,
  },
});
export default QAInputField;
