import { View, Text, Pressable, StyleSheet, Dimensions } from "react-native"
import Colors from "../constants/colors";

function PrimaryButton(props){

  return (
    <View style={styles.outerContainer}>
      <Pressable 
        style={({pressed}) => 
        pressed 
        ? [styles.innerContainer, styles.pressed] 
        : styles.innerContainer
      } // funzione e ternario per applicare classe su iPhone
        onPress={props.onBtnPress} 
        android_ripple={{color: Colors.other}}
      >
        <Text style={styles.text}>{props.children}</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton;

const deviceWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  innerContainer: {
    backgroundColor: Colors.light,
    paddingVertical: deviceWidth < 380 ? 4 : 8,
    paddingHorizontal: 10,
    elevation: 2
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  pressed: { // per il ripple su iPhone
    opacity: 0.75,
  }
})