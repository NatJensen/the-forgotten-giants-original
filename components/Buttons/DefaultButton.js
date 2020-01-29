import React from "react"
import { Text, TouchableOpacity } from "react-native"
import Styles from "./ButtonStyles"

export const DefaultButton = ({ buttonColor, buttonText, onPress }) => (
  <TouchableOpacity
    style={{ ...Styles.buttonStyle, ...{ backgroundColor: buttonColor } }}
    onPress={onPress}>
    <Text style={Styles.buttonTextStyle}> {buttonText} </Text>
  </TouchableOpacity>
)