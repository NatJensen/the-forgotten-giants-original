import React, { Component } from "react"
import { Text, View, ImageBackground, ActivityIndicator, TouchableOpacity } from "react-native"
import * as Font from "expo-font"
import { Asset } from "expo-asset"
import ImageData from "../../data/ImageData"
import Styles from "./HomeStyles"
import Colors from "../../constants/colors"

export default class HomeScreen extends Component {
  
  static navigationOptions = {
    headerMode: "none",
    header: null,
    gesturesEnabled: false
  }

  state = {
    assetsLoaded: false
  }

  async componentDidMount() {
    await Asset.loadAsync([ImageData.homeScreenImage])

    await Font.loadAsync({
      "amatic-sc": require("../../assets/fonts/amatic-sc.ttf"),
      "Satisfy-Regular": require("../../assets/fonts/Satisfy-Regular.ttf"),
      "RobotoSlab-Regular": require("../../assets/fonts/RobotoSlab-Regular.ttf"),
      "RobotoSlab-Bold": require("../../assets/fonts/RobotoSlab-Bold.ttf")
    })

    this.setState({
      assetsLoaded: true
    })
  }

  render() {
    const { navigation } = this.props
    const { assetsLoaded } = this.state

    if (assetsLoaded) {
      return (
        <ImageBackground
          source={ImageData.homeScreenImage}
          style={Styles.imageBackgroundStyle}>
          <View style={Styles.container}>
            <Text style={Styles.titleStyle}>The Forgotten Giants</Text>
            <TouchableOpacity
              style={Styles.buttonBackgroundStyle}
              onPress={() => navigation.navigate("AllGiantsScreen")}>
              <Text style={Styles.buttonTextStyle}>Begin!</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      )
    } else {
      return (
        <View style={Styles.container}>
          <ActivityIndicator size="large" color={Colors.orange} />
        </View>
      )
    }
  }
}