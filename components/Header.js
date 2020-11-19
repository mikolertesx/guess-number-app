import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";

const Header = ({ title }) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText style={styles.headerTitle}>{title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIOS: {
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
    borderBottomColor: "transparent",
    borderBottomWidth: 0,
  },
  headerTitle: {
    color: Platform.OS === "android" ? "white" : "black",
    fontSize: 18,
  },
});

export default Header;
