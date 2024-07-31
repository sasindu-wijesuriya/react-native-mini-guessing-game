import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../constants/colors";

function CustomButtonPrimary({ children, onPressProp }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPressProp}
        style={({ pressed }) =>
          pressed
            ? [styles.pressedStyle, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default CustomButtonPrimary;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 25,
    overflow: "hidden",
    marginVertical: 10,
    marginHorizontal: 5,
  },

  buttonInnerContainer: {
    backgroundColor: Colors.primaryButtonBackground,
    paddingVertical: 12,
    paddingHorizontal: 10,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 10 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
  buttonText: {
    color: Colors.primaryButtonText,
    fontSize: 18,
    textAlign: "center",
  },
  pressedStyle: {
    opacity: 0.5,
  },
});
