import React, { Component } from "react"
import { Text, View, ScrollView, BackHandler } from "react-native"
import { Transport } from "../../components/Transport/Transport"
import ImageData from "../../data/ImageData"
import Styles from "./TransportInfoStyles"
import Colors from "../../constants/colors"

export default class TransportInfoScreen extends Component {

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
    const { navigation } = this.props
    const transport = navigation.getParam("transport")
    
    return (
      <ScrollView style={Styles.containerScroll}>
        <View style={Styles.container}>
          <Text style={Styles.headline}> Your options </Text>
          <Transport
            image={ImageData.trainImage}
            description={"Take train " + transport.stog + " to " + transport.station}>
          </Transport>
          <Transport
            image={ImageData.busImage}
            description={"Take bus " + transport.bus + " to " + transport.busAddress}>
          </Transport>
          <Transport
            image={ImageData.carImage}
            description={"Park your car at " + transport.parking}>
          </Transport>
        </View>
      </ScrollView>
    )
  }
}