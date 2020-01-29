import React, { Component } from "react"
import { Text, View, ImageBackground, ScrollView, BackHandler } from "react-native"
import { Audio } from "expo-av"
import { DefaultButton } from "../../components/Buttons/DefaultButton"
import { BigReward } from "../../components/Reward/BigReward"
import GiantsData from "../../data/GiantsData"
import RewardData from "../../data/RewardData"
import Styles from "./RewardStyles"
import Colors from "../../constants/colors"

export default class RewardScreen extends Component {

  static navigationOptions = {
    gesturesEnabled: false
  }

  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
    this.soundObject = new Audio.Sound()
    _isMounted = false
    this.state = {
      assetsLoaded: false
    }
  }

  componentWillMount() {
    RewardData.map(reward => {
      if (this.props.navigation.getParam("giantId") === reward.id)
        (reward.found = true) && (reward.date = this.props.navigation.getParam("date"))
    })
    GiantsData.map(giant => {
      if (this.props.navigation.getParam("giantId") === giant.id)
        giant.isFound = true;
    })
  }

  async componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButtonClick)
    this._isMounted = true
    
    try {
      await this.soundObject.loadAsync(require("../../assets/sounds/rewardSound.mp3"))
      await this.soundObject.playAsync()
    } catch (error) {
      console.log(error)
    }

    if (this._isMounted) {
      this.setState({
        assetsLoaded: true
      })
    }
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButtonClick)
    this._isMounted = false
  }

  handleBackButtonClick() {
    this.props.navigation.goBack(null)
    return true
  }

  render() {
    const { navigation } = this.props
    
    return (
      <ScrollView style={Styles.containerScroll}>
        <View>
          <ImageBackground
            style={Styles.imageStyle}
            source={navigation.getParam("image")}>
            <BigReward />
          </ImageBackground>
          <View>
            <Text style={Styles.textStyle}>
              Congrats! You found {navigation.getParam("firstname")}
            </Text>
            <DefaultButton
              buttonColor={Colors.orange}
              buttonText={"About " + navigation.getParam("firstname")}
              onPress={() =>
                navigation.navigate("AboutGiantScreen", {
                  description: navigation.getParam("description"),
                  image: navigation.getParam("image"),
                  firstname: navigation.getParam("firstname"),
                  audio: navigation.getParam("audio")
                })}>
            </DefaultButton>
            <DefaultButton
              buttonColor={Colors.yellow}
              buttonText="Your rewards"
              onPress={() =>
                navigation.navigate("RewardCollectionScreen", {
                  giantId: navigation.getParam("giantId"),
                  date: navigation.getParam("date"),
                  found: navigation.getParam("found")
                })}>
            </DefaultButton>
            <DefaultButton
              buttonColor={Colors.orange}
              buttonText="Go find a new giant >"
              onPress={() =>
                navigation.navigate("AllGiantsScreen", {
                  isFound: navigation.getParam("isFound")
                })}>
            </DefaultButton>
          </View>
        </View>
      </ScrollView>
    )
  }
}