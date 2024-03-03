import { Alert } from "react-native";

export const confirmationAlert = async (title, message) => {
  return await new Promise((resolve) => {
    Alert.alert(
      title,
      message,
      [
        {
          text: "Continuar",
          onPress: () => resolve(true),
        },
        {
          text: "Cancelar",
          onPress: () => resolve(false),
          style: "cancel",
        },
      ],
      { cancelable: true }
    );
  });
};
