import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity, BackHandler } from "react-native"
import Giant from "../../components/Giant/Giant"
import GiantsData from "../../data/GiantsData"
import Styles from "./AllGiantsStyles"

export default class AllGiantsScreen extends Component {

  static navigationOptions = {
    headerMode: "none",
    header: null,
    gesturesEnabled: false
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
    BackHandler.exitApp()
    return true
  }

  render() {
    const { navigation } = this.props

    return (
      <ScrollView style={Styles.containerScroll}>
        <View style={Styles.container}>
          <Text style={Styles.giantTextStyle}>GO FIND A GIANT</Text>

          {GiantsData.map(giant => (
            <TouchableOpacity
              key={giant.id}
              onPress={() => {
                giant.isFound === true ?
                  navigation.navigate("RewardScreen", {
                    id: giant.id,
                    name: giant.name,
                    firstname: giant.firstname,
                    location: giant.location,
                    image: giant.image,
                    description: giant.description,
                    audio: giant.audio,
                    address: giant.address,
                    transport: giant.transport,
                    region: giant.region,
                    isFound: giant.isFound
                  }) : (
                    navigation.navigate("MapScreen", {
                      id: giant.id,
                      name: giant.name,
                      firstname: giant.firstname,
                      location: giant.location,
                      image: giant.image,
                      description: giant.description,
                      audio: giant.audio,
                      address: giant.address,
                      transport: giant.transport,
                      region: giant.region,
                      isFound: giant.isFound
                    })
                  )
              }}>
              <Giant
                style={Styles.giant}
                name={giant.name}
                location={giant.location}
                image={giant.image}
                isFound={giant.isFound} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    )
  }
}