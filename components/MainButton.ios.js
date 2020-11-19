import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/colors";

const MainButton = ({ title, onPress, style, textStyle }) => {
  return (
    <View style={{ ...styles.buttonContainer }}>
      <TouchableOpacity onPress={onPress}>
        <View style={{ ...styles.button, ...style }}>
          <Text style={{ ...styles.buttonText, ...textStyle }}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden",
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18,
  },
});

export default MainButton;
