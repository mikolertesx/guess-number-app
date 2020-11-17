import React from "react";
import { View, StyleSheet, Button, Image } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

import SuccessImage from "../assets/img/success.png";

const GameOverScreen = ({ roundsNumber, userNumber, onReset }) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image source={SuccessImage} style={styles.image} resizeMode="cover" />
      </View>
      <BodyText>Number of rounds: {roundsNumber}</BodyText>
      <BodyText>Number was: {userNumber} </BodyText>
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
});

export default GameOverScreen;
