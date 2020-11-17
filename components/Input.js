import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = ({ style, ...props }) => {
  return <TextInput style={{ ...styles.input, ...style }} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
