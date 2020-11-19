import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import MainButton from "../components/MainButton";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

import SuccessImage from "../assets/img/success.png";

const GameOverScreen = ({ roundsNumber, userNumber, onReset }) => {
  return (
      <ScrollView>
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
              I only needed{" "}
              <Text style={styles.highlightText}>{roundsNumber}</Text> tries to
              guess the number!
            </BodyText>
            <BodyText style={styles.resultText}>
              Number was: <Text style={styles.highlightText}>{userNumber}</Text>
              .
            </BodyText>
          </View>
          <MainButton title="New Game" onPress={onReset} />
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").width * 0.8,
    borderRadius: Dimensions.get("window").width * 0.4,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },
  highlightText: {
    color: "green",
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60,
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
});

export default GameOverScreen;
