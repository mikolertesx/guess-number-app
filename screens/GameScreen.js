import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import defaultStyles from "../constants/defaultStyles";
import MainButton from "../components/MainButton";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";

const generateRandomBetween = (min = 1, max = 100, exclude = undefined) => {
  min = Math.ceil(min);
  max = Math.ceil(max);

  if (Math.abs(min - max) <= 1) {
    return min;
  }

  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * (max - min)) + min;
  } while (exclude !== undefined && randomNumber === exclude);
  return randomNumber;
};

const DIRECTIONS = {
  UP: 0,
  DOWN: 1,
};

const renderListItem = (value, index) => (
  <View key={`guess-${index}`} style={styles.listItem}>
    <TitleText style={styles.listIndex}>#{index + 1}</TitleText>
    <BodyText style={styles.listValue}>{value}</BodyText>
  </View>
);

const GameScreen = ({ userChoice, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
      Alert.alert(
        "I won!",
        `And it only took me ${pastGuesses.length} tries!`,
        [
          {
            text: "Wow, you're so cool",
            style: "destructive",
            onPress: () => {},
          },
          {
            text: "You really suck",
            style: "destructive",
            onPress: () => {},
          },
        ]
      );
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === DIRECTIONS.DOWN && currentGuess < userChoice) ||
      (direction === DIRECTIONS.UP && currentGuess > userChoice)
    ) {
      Alert.alert(
        "Don't lie",
        "I'm too smart to be fooled, and you're cheating."
      );
      return;
    }

    switch (direction) {
      case DIRECTIONS.UP:
        currentLow.current = currentGuess + 1;
        break;
      case DIRECTIONS.DOWN:
        currentHigh.current = currentGuess;
        break;
      default:
        throw new Error("You shouldn't be able to set anything here.");
    }

    const newGuess = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );

    setCurrentGuess(newGuess);
    setPastGuesses((curPastGuesses) => [newGuess, ...curPastGuesses]);
  };

  return (
    <View style={styles.screen}>
      <Text style={defaultStyles.title}>Opponent's guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton
          title={<Ionicons name="md-remove" size={24} color="white" />}
          onPress={() => nextGuessHandler(DIRECTIONS.DOWN)}
        />
        <MainButton
          title={<Ionicons name="md-add" size={24} color="white" />}
          onPress={() => nextGuessHandler(DIRECTIONS.UP)}
        />
      </Card>
      <View style={styles.list}>
        <ScrollView>
          {pastGuesses.map((guess, index) => renderListItem(guess, index))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
    padding: 10,
  },
  list: {
    flex: 1,
    width: "80%",
  },
  listItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    padding: 15,
    marginVertical: 15,
    justifyContent: "space-around",
  },
});

export default GameScreen;
