import {
  View,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../components/Title.android";
import Colors from "../constants/color";
import PrimaryButton from "../components/PrimaryButton";

function GameOver({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;
  //const deviceWidth = Dimensions.get("window").width;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 90;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game Over!</Title>
        <View style={[styles.imageConatiner, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>

        <Text style={styles.summaryText}>
          {" "}
          Phone needed <Text style={styles.highlight}>
            {" "}
            {roundsNumber}{" "}
          </Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}> {userNumber} </Text>
        </Text>

        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}
export default GameOver;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  imageConatiner: {
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
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
