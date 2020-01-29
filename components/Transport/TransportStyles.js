import { StyleSheet } from "react-native"
import { RFPercentage } from "react-native-responsive-fontsize"
import Colors from "../../constants/colors"
import Fonts from "../../constants/fonts"

const styles = StyleSheet.create({
  imageStyle: {
    width: 70,
    height: 70
  },
  textStyle: {
    fontSize: RFPercentage(4),
    marginBottom: "7%",
    fontFamily: Fonts.primary,
    color: Colors.black,
    textAlign: "center"
  },
  column: {
    flexDirection: "column",
    alignItems: "center"
  }
})

export default styles