import React, { Component } from "react"
import { Text, View, Image } from "react-native"
import Styles from "./RewardStyles"

export default class Reward extends Component {
  render() {
    return (
      <View style={[Styles.directionColumn, Styles.container]}>
        <Image style={Styles.rewardImageCollection} source={this.props.image} />
        <Text style={Styles.rewardTextStyle}>{this.props.name}</Text>
        <Text style={Styles.rewardTextStyle}>{this.props.date}</Text>
      </View>
    )
  }
}