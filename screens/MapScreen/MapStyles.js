import { StyleSheet, Dimensions } from "react-native"
import { RFPercentage } from "react-native-responsive-fontsize"
import Colors from "../../constants/colors"
import Fonts from "../../constants/fonts"

export default Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.green,
    alignItems: "center",
    justifyContent: "center"
  },
  containerScroll: {
    flexDirection: "column"
  },
  bottomPart: {
    flex: 1
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    flex: 2.8
  },
  distanceTextStyle: {
    fontSize: RFPercentage(4.4),
    fontFamily: Fonts.primary,
    marginTop: 12,
    marginRight: 5,
    marginBottom: 5,
    marginLeft: 5
  }
})