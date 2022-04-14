import { StyleSheet, Text, Dimensions } from "react-native"
import Colors from "../constants/colors"

function Instructions(props){
  return <Text style={[styles.instructions, props.style]}>{props.children}</Text>
}

export default Instructions

const deviceWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
  instructions: {
    fontFamily: "open-sans",
    color: Colors.other,
    fontSize: deviceWidth < 380 ? 16 : 24
  },
})