import { View, Image, StyleSheet, Text } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/color";
import PrimaryButton from "../components/PrimaryButton";

function GameOver({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageConatiner}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>

      <Text style={styles.summaryText}>
        {" "}
        Phone needed <Text style={styles.highlight}> {roundsNumber} </Text> rounds to guess
        the number <Text style={styles.highlight}> {userNumber} </Text>
      </Text>

      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}
export default GameOver;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  imageConatiner: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },

  summaryText: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },

  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});

// a  text component can have many text component
// but it cannot hold other element like view or image or other
