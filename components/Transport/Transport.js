import React from "react"
import { Image, Text, View } from "react-native"
import Styles from "./TransportStyles"

export const Transport = ({ image, description }) => (
  <View style={Styles.column}>
    <Image
      style={Styles.imageStyle}
      source={image} />
    <Text style={Styles.textStyle}> {description} </Text>
  </View>
)