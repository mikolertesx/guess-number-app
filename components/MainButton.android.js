import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Colors from "../constants/colors";

const MainButton = ({ title, onPress, style, textStyle }) => {
  let TouchableHandler = TouchableOpacity;

  if (Platform.Version >= 21) {
    TouchableHandler = TouchableNativeFeedback;
  }

  return (
    <View style={{ ...styles.buttonContainer }}>
      <TouchableHandler onPress={onPress}>
        <View style={{ ...styles.button, ...style }}>
          <Text style={{ ...styles.buttonText, ...textStyle }}>{title}</Text>
        </View>
      </TouchableHandler>
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
