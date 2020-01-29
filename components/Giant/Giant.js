import React, { Component } from "react"
import { Text, View, Image, ImageBackground } from "react-native"
import SmallReward from "../Reward/SmallReward"
import ImageData from "../../data/ImageData"
import Styles from "./GiantStyles"

export default class Giant extends Component {
  render() {
    return (
      <View>
        <View style={Styles.direction}>
          <View>
            <Image
              style={Styles.locationEmoji}
              source={ImageData.locationIcon} />
          </View>
          <View>
            <Text style={Styles.locationText}>{this.props.location}</Text>
          </View>
        </View>
        <ImageBackground
          source={this.props.image}
          style={Styles.giantImageStyle}
          imageStyle={Styles.borderRadiusStyle}>
          <View>
            {this.props.isFound && <SmallReward />}
          </View>
          <View style={Styles.imageTextPlacement}>
            <Text style={Styles.imageTextStyle}>{this.props.name}</Text>
          </View>
        </ImageBackground>
      </View>
    )
  }
}
