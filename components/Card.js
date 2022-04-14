import { StyleSheet, View } from "react-native"
import Colors from "../constants/colors"

function Card(props){
  return <View style={styles.card}>{props.children}</View>
}

export default Card

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    backgroundColor: Colors.dark,
    borderRadius: 8,
    elevation: 4, // shadow android
    shadowColor: "black", // shadow iPhone
    shadowOffset: { width: 0, height: 2 }, // shadow iPhone
    shadowRadius: 6, // shadow iPhone
    shadowOpacity: 0.25, // shadow iPhone
  },
})