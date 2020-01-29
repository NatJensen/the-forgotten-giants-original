import { StyleSheet } from "react-native"
import { RFPercentage } from "react-native-responsive-fontsize"
import Colors from "../../constants/colors"
import Fonts from "../../constants/fonts"

const styles = StyleSheet.create({
  containerScroll: {
    flexDirection: "column",
    backgroundColor: Colors.green
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.green
  },
  rewardTitle: {
    fontFamily: Fonts.primary,
    fontSize: RFPercentage(8.5),
    color: Colors.black,
    marginTop: "5%",
    marginBottom: 10,
    textAlign: "center"
  },
  containerReward: {
    marginBottom: 15
  }
})

export default styles