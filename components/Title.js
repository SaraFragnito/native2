import { Text, StyleSheet, Dimensions, Platform } from "react-native"
import Colors from "../constants/colors";

function Title(props){
  return <Text style={[styles.title, props.styles]}>{props.children}</Text>
}

export default Title;

const deviceWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: deviceWidth < 380 ? 20 : 30,
    marginBottom: deviceWidth < 380 ? 20 : 30,
    color: Colors.dark,
    backgroundColor: Colors.other,
    textAlign: "center",
    borderRadius: 5,
    borderWidth: Platform.OS === "android" ? 0 : 2, // oppure altro metodo:
    // borderWidth: Platform.select({android: 0, ios: 2})
    borderColor: Colors.dark,
    maxWidth: "80%",
    width: 300,
    maxHeight: "80%",
    padding: 3,
  }
})