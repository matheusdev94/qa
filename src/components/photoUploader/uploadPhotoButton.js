import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import { TouchableOpacity, Text, StyleSheet, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
{
}

const UploadPhotoButton = ({ selectedImage, setSelectedImage }) => {
  const handlePickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permissão para acessar a galeria de mídia foi negada.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      //   aspect: [4, 3],
      //   quality: 1,
    });
    // console.log("res: ", result.assets[0].uri);

    if (!result.cancelled) {
      setSelectedImage(result.assets[0].uri);
      // Aqui você pode enviar a imagem para o servidor ou fazer qualquer outra coisa com ela
    }
  };

  return (
    <>
      <TouchableOpacity onPress={handlePickImage} style={styles.button}>
        <Icon name="photo" size={20} color="white" />
      </TouchableOpacity>
      {/* {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      )} */}
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#234879",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
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
