import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

import SuccessImage from "../assets/img/success.png";

const GameOverScreen = ({ roundsNumber, userNumber, onReset }) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={300}
          source={SuccessImage}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          I only needed <Text style={styles.highlightText}>{roundsNumber}</Text>{" "}
          tries to guess the number!
        </BodyText>
        <BodyText style={styles.resultText}>
          Number was: <Text style={styles.highlightText}>{userNumber}</Text>.
        </BodyText>
      </View>
      <Button title="New Game" onPress={onReset} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 300,
    height: 300,
    overflow: "hidden",
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
  },
  highlightText: {
    color: "green",
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default GameOverScreen;
