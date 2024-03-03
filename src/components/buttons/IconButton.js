import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const IconButton = ({
  onPressHandler,
  iconName,
  size,
  iconColor,
  background,
  borderRad,
  text,
}) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: background,
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      alignSelf: "center",
      borderRadius: 70,
      height: 40,
      width: 40,
      marginLeft: 15,
      margin: 5,
      borderRadius: borderRad ? borderRad : 100,
    },
    icon: {
      alignSelf: "center",
    },
    text: {
      alignSelf: "center",
      color: "white",
      fontSize: size,
    },
  });
  const handlePres = () => {
    onPressHandler();
  };
  return (
    <TouchableOpacity style={styles.button} onPress={() => handlePres()}>
      {text ? (
        <Text style={styles.text}>{text}</Text>
      ) : (
        <Icon
          style={styles.icon}
          name={iconName}
          size={size}
          color={iconColor}
        />
      )}
    </TouchableOpacity>
  );
};

export default IconButton;
