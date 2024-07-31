import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function CustomTitle({ children }) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

export default CustomTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginVertical: 10,
    fontWeight: "bold",
    color: Colors.primaryYellow,
    textAlign: "center",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primaryYellow,
    padding: 10,
  },
});
