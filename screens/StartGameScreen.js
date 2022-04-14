import { TextInput, View, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native"
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/Title";
import Card from "../components/Card";
import Instructions from "../components/Instructions";

function StartGameScreen(props){
  const [enteredNumber, setEnteredNumber] = useState("")

  const { width, height } = useWindowDimensions() // per la rotazione dello schermo

  const numberInputHandler = enteredText => setEnteredNumber(enteredText)
  const resetInputHandler = () => setEnteredNumber("")
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber)
      if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
        Alert.alert(
          "Invalid number!", 
          "Number has to be a number between 1 and 99.", 
           [{ text: "Okay", style: "destructive", onPress: resetInputHandler}]
        )
        return;
      } 
      props.onPickNumber(chosenNumber)
  }

  const marginVerticalDistance = height < 400 ? 20 : 100

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, {marginVertical: marginVerticalDistance}]}>
          <Title>Guess my number!</Title>
          <Card>
            <Instructions>Enter a number: </Instructions>
            <TextInput 
              style={styles.numberInput} 
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.button}>
                <PrimaryButton onBtnPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.button}>
                <PrimaryButton onBtnPress={confirmInputHandler}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  rootContainer: {
    flex: 1,
    alignItems: "center"
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 10
  },
  button: {
    flex: 1
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.other,
    borderBottomWidth: 2,
    color: Colors.other,
    fontWeight: "bold",
    textAlign: "center"
  },
})