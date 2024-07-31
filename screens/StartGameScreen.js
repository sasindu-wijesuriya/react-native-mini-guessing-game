import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import CustomButtonPrimary from "../components/CustomButtonPrimary";
import { useState } from "react";
import Colors from "../constants/colors";

function StartGameScreen(props) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(inputText) {
    setEnteredNumber(inputText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function validateInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    console.log(chosenNumber + " chosen");
    props.onPickNumber(chosenNumber);
    setEnteredNumber("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize="none"
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <CustomButtonPrimary onPressProp={resetInputHandler}>
              Reset
            </CustomButtonPrimary>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButtonPrimary onPressProp={validateInputHandler}>
              Confirm
            </CustomButtonPrimary>
          </View>
        </View>
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
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    backgroundColor: Colors.primaryPlum,
    width: 300,
    maxWidth: "90%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 10 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    padding: 20,
    borderRadius: 10,
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.primaryYellow,
    borderBottomWidth: 2,
    color: Colors.primaryYellow,
    marginVertical: 10,
    fontStyle: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 1,
  },
});
