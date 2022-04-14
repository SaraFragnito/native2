import { View, Text, StyleSheet, Dimensions } from "react-native"
import Colors from "../constants/colors"

function GuessLogItem(props){
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{props.roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's guess: {props.guess}</Text>
    </View>
  )
}

export default GuessLogItem

const deviceWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.dark,
    borderWidth: 1,
    borderRadius: 40,
    padding: deviceWidth < 380 ? 6 : 12,
    marginVertical: deviceWidth < 380 ? 6 : 10,
    backgroundColor: Colors.other,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4, // shadow android
    shadowColor: "black", // shadow iPhone
    shadowOffset: { width: 0, height: 0 }, // shadow iPhone
    shadowRadius: 3, // shadow iPhone
    shadowOpacity: 0.25, // shadow iPhone
  },
  itemText: {
    fontFamily: "open-sans"
  }
})