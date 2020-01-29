import React, { Component } from "react"
import { View, Text, ScrollView, BackHandler } from "react-native"
import Reward from "../../components/Reward/Reward"
import RewardData from "../../data/RewardData"
import Styles from "./RewardCollectionStyles"
import Colors from "../../constants/colors"

export default class RewardCollectionScreen extends Component {
  
  static navigationOptions = () => {
    return {
      gesturesEnabled: false,
      headerStyle: {
        backgroundColor: Colors.green
      }
    }
  }

  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
  }

  componentDidMount() { 
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButtonClick)
  }

  componentWillUnmount() { 
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButtonClick)
  }

  handleBackButtonClick() {
    this.props.navigation.goBack(null)
    return true
  }

  render() {
    const foundRewards = RewardData.filter(reward => reward.found === true)

    return (
      <ScrollView style={Styles.containerScroll}>
        <View style={Styles.container}>
          <Text style={Styles.rewardTitle}>Your Rewards</Text>
        </View>
        <View style={Styles.containerReward}>
          {foundRewards.map(rewardFound => (
            <Reward
              style={Styles.reward}
              key={rewardFound.id}
              image={rewardFound.image}
              name={rewardFound.name}
              date={rewardFound.date} />
          ))}
        </View>
      </ScrollView>
    )
  }
}