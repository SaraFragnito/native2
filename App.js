import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import { useFonts } from "expo-font"
import AppLoading from "expo-app-loading"
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)

  const [fontsLoaded] = useFonts({ // boolean
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  })

  if (!fontsLoaded) <AppLoading />

  const pickedNumberHandler = (pickedNumber) => { 
    setUserNumber(pickedNumber)
    setGameIsOver(false) 
  }
  
  const gameOverHandler = (numberOfRounds) => {
    setGameIsOver(true)
    setGuessRounds(numberOfRounds)
  }

  const startNewGameHandler = () => {
    setUserNumber(null)
    setGameIsOver(true)
    setGuessRounds(0)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  if (gameIsOver && userNumber) screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />

  return (
    <LinearGradient colors={[ Colors.other, Colors.light ]} style={styles.rootScreen}>
      <ImageBackground 
        source={require("./assets/images/game.png")} 
        resizeMode="cover"
        style={styles.rootScreen} 
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
