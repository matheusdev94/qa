import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View } from "react-native";
import { TouchableOpacity, Text, StyleSheet, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
{
}

const UploadPhotoButton = ({
  selectedImage,
  setSelectedImage,
  setInputValue,
  resetInput,
}) => {
  const handlePickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permissão para acessar a galeria de mídia foi negada.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });
    if (!result.cancelled) {
      setSelectedImage(result.assets[0].uri);
    }
  };
  const handleRemoveImage = () => {
    setSelectedImage(null);
    if (!resetInput) {
      return;
    }
    setInputValue(null);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handleRemoveImage()}
        style={styles.buttonCancel}
      >
        <Icon name="remove" size={20} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlePickImage}>
        <Icon name="photo" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  buttonCancel: {
    backgroundColor: "#E42320",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    margin: 4,
  },
  button: {
    backgroundColor: "#234879",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    margin: 4,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
});

export default UploadPhotoButton;
