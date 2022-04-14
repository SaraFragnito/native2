import { View, Text, StyleSheet, Dimensions } from "react-native"
import Colors from "../constants/colors"

function NumberContainer(props) {
  return (
  <View style={styles.container}>
    <Text style={styles.numberText}>{props.children}</Text>
  </View>
  )
}

export default NumberContainer

const deviceWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    borderColor: Colors.light,
    padding: 10,
    marginBottom: deviceWidth < 380 ? 5 : 25,
    marginHorizontal: 20,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    maxWidth: "80%"
  },
  numberText: {
    color: Colors.dark,
    fontSize: deviceWidth < 380 ? 24 : 36,
    fontFamily: "open-sans-bold",
  }
})