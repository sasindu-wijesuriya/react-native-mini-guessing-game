import { View, Text, StyleSheet } from "react-native";

function CustomButtonPrimary({ children }) {
  return (
    <View style={styles.buttonContainer}>
      <Text>{children}</Text>
    </View>
  );
}

export default CustomButtonPrimary;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#f7287b",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
});
