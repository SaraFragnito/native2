import { StyleSheet, View, Text, Image, useWindowDimensions } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen(props){
  const { width, height } = useWindowDimensions()

  let imageSize = 300
  if (width < 380 || height < 400) imageSize = 150

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
  }

  return (
    <View style={styles.rootContainer}>
      <Title style={styles.gameOverTitle}>GAME OVER!</Title>
      <PrimaryButton onBtnPress={props.onStartNewGame}>New Game</PrimaryButton>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image style={styles.image} source={require("../assets/images/gameover.jpeg")}/>
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>.
      </Text>
    </View>
  ) 
}

export default GameOverScreen;

//const deviceWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  gameOverTitle: {
    fontFamily: "open-sans-bold",
  },
  imageContainer: {
    marginTop: 20,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.other,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    color: Colors.dark,
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.other
  }
})