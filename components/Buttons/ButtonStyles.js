import { StyleSheet } from "react-native"
import { RFPercentage } from "react-native-responsive-fontsize"
import Colors from "../../constants/colors"
import Fonts from "../../constants/fonts"

const styles = StyleSheet.create({
    buttonStyle: {
        marginTop: 10,
        marginRight: 20,
        marginBottom: 10,
        marginLeft: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    buttonTextStyle: {
        fontSize: RFPercentage(4),
        color: Colors.black,
        fontFamily: Fonts.primary,
        textAlign: "center"
    }
})

export default styles