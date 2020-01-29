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
    backgroundColor: Colors.green
  },
  giantTextStyle: {
    fontFamily: Fonts.primary,
    fontSize: RFPercentage(7),
    color: Colors.white,
    marginTop: "10%",
    marginBottom: "10%"
  }
})

export default styles