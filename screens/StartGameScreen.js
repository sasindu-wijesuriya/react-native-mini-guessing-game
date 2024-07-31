import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import CustomButtonPrimary from "../components/CustomButtonPrimary";

function StartGameScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start a New Game!</Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <CustomButtonPrimary>Reset</CustomButtonPrimary>
        <CustomButtonPrimary>Confirm</CustomButtonPrimary>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 100,
    alignItems: "center",
    backgroundColor: "#72063c",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});
