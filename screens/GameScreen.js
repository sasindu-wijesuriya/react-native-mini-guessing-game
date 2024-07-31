import { View, Text, Button, StyleSheet } from "react-native";
import CustomTitle from "../components/CustomTitle";

function GameScreen(props) {
  return (
    <View style={styles.screen}>
      <View>
        <CustomTitle>Opponent's Guess</CustomTitle>
      </View>
      <View>
        <Text>Higher or lower?</Text>
        <Button title="LOWER" />
        <Button title="HIGHER" />
      </View>
      <View>
        <Text>Log rounds</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
  },
});
