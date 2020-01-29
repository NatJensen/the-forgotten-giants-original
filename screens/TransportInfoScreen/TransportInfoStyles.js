import { StyleSheet } from "react-native"
import { RFPercentage } from "react-native-responsive-fontsize"
import Colors from "../../constants/colors"
import Fonts from "../../constants/fonts"

const styles = StyleSheet.create({
  containerScroll: {
    flexDirection: "column",
    backgroundColor: Colors.green,
  },
  container: {
    backgroundColor: Colors.green,
    alignItems: "center",
    margin: 10
  },
  headline: {
    fontSize: RFPercentage(6.5),
    fontFamily: Fonts.primary,
    color: Colors.black,
    margin: "5%",
    textAlign: "center"
  }
})

export default styles