import { useState, useEffect } from "react"
import { View, StyleSheet, Alert, FlatList, useWindowDimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons"

import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import Instructions from "../components/Instructions";
import GuessLogItem from "../components/GuessLogItem";

const generateRandomBetween = (min, max) => {
  const randomNum = Math.floor(Math.random() * (max - min)) + min
  return randomNum
}

let minBoundary = 1
let maxBoundary = 100

function GameScreen({userNumber, onGameOver }){
  const initialGuess = generateRandomBetween(1, 100)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [guessRounds, setGuessRounds] = useState([initialGuess])
  const { width, height } = useWindowDimensions()
  
  let marginTopTitle = 50
  if (height > 400) marginTopTitle = 25

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length)
    } 
  }, [currentGuess, userNumber, onGameOver] )

  useEffect(() => {
    minBoundary = 1
    maxBoundary = 100
  }, [])

  const nextGuessHandler = direction => {
    if (
      (direction === "lower" && currentGuess < userNumber) || 
      (direction === "greater" && currentGuess > userNumber)
    ) { 
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    direction === "lower" ? maxBoundary = currentGuess : minBoundary = currentGuess + 1
    
    const newRandomNum = generateRandomBetween(minBoundary, maxBoundary) 
    setCurrentGuess(newRandomNum)
    setGuessRounds(prevGuessRounds => [newRandomNum, ...prevGuessRounds])
  }

  const guessRoundListLength = guessRounds.length

  let content = (
  <>
  <NumberContainer>{currentGuess}</NumberContainer>
  <Card>
    <View>
      <Instructions style={styles.instructions}>Higher or lower?</Instructions>
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <PrimaryButton onBtnPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="md-remove" size={24} />
          </PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onBtnPress={nextGuessHandler.bind(this, "greater")}>
          <Ionicons name="md-add" size={24} />
          </PrimaryButton>
        </View>
      </View>
    </View>
  </Card>
  </> 
  )

  if (width > 500) content = (
    <>
    <View style={styles.buttonsContainerWide}>
      <View style={styles.buttonsContainer}>
          <PrimaryButton onBtnPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="md-remove" size={24} />
          </PrimaryButton>
        </View>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.buttonsContainer}>
        <PrimaryButton onBtnPress={nextGuessHandler.bind(this, "greater")}>
        <Ionicons name="md-add" size={24} />
        </PrimaryButton>
      </View>
    </View>
    </>
  )


  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList 
          data={guessRounds} 
          renderItem={(itemData) => (
            <GuessLogItem 
              keyExtractor={(item) => item}
              roundNumber={guessRoundListLength - itemData.index} 
              guess={itemData.item} 
            />
          )}
        />
      </View>
    </View>
  )
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
  },
  instructions: {
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonsContainerWide: {
    flexDirection: "row",
    alignItems: "center"
  },
  button: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 5,
    marginHorizontal: 30
  }
})

// command shift 7 per commentare