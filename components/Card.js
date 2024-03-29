import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../constants/color";

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    padding: 26,
    marginTop: deviceWidth < 380 ? 18 : 36,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 6,
    shadowColor: "black",
    shadownOffset: { width: 0, height: 12 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
