import React, { Component } from "react"
import { View, Text, ScrollView, ActivityIndicator, AsyncStorage, BackHandler } from "react-native"
import MapView from "react-native-maps"
import { getDistance } from "geolib"
import { DefaultButton } from "../../components/Buttons/DefaultButton"
import Styles from "./MapStyles"
import Colors from "../../constants/colors"
import monthNames from "../../constants/monthNames"
import MapFeatures from "./MapFeatures"

export default class MapScreen extends Component {

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
    const region = this.props.navigation.getParam("region")
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
    this.getUserPosition = this.getUserPosition.bind(this)
    this.getTime = this.getTime.bind(this)
    this.getOrdinalNum = this.getOrdinalNum.bind(this)
    this.minutesWithLeadingZeros = this.minutesWithLeadingZeros.bind(this)
    this.hoursWithLeadingZeros = this.hoursWithLeadingZeros.bind(this)
    this.saveDate = this.saveDate.bind(this)
    this.retrieveDate = this.retrieveDate.bind(this)
    _isMounted = false
    this.state = {
      distance: 0,
      distanceLoaded: false,
      userLatitude: 0,
      userLongitude: 0,
      giantLatitude: region.latitude,
      giantLongitude: region.longitude,
      giantName: this.props.navigation.getParam("name"),
      giantFirstname: this.props.navigation.getParam("firstname"),
      description: this.props.navigation.getParam("description"),
      giantId: this.props.navigation.getParam("id"),
      transport: this.props.navigation.getParam("transport"),
      image: this.props.navigation.getParam("image"),
      audio: this.props.navigation.getParam("audio"),
      date: ""
    }
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButtonClick)
    this._isMounted = true
    this.getUserPosition()
    interval = setInterval(() => this.getUserPosition(), 2000)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButtonClick)
    this._isMounted = false
  }

  handleBackButtonClick() {
    this.props.navigation.goBack(null)
    return true
  }

  getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 60 * 60 * 24
      })
    })
  }

  async getUserPosition() {
    const { navigation } = this.props
    
    try {
      const { coords } = await this.getCurrentPosition()
      if (this._isMounted) {
        this.setState({
          userLatitude: coords.latitude,
          userLongitude: coords.longitude,
          distanceLoaded: true
        })
      }
    } catch (error) {
      console.error(error)
    }
    let dis = getDistance(
      {
        latitude: this.state.giantLatitude,
        longitude: this.state.giantLongitude
      },
      {
        latitude: this.state.userLatitude,
        longitude: this.state.userLongitude
      }
    )
    if (this._isMounted) {
      this.setState({
        distance: dis
      })
    }

    if (this.state.distance < 20000000000 && this.state.distance !== 0) {
      this.saveDate()
      this.retrieveDate()
      navigation.navigate("RewardScreen", {
        name: this.state.giantName,
        firstname: this.state.giantFirstname,
        description: this.state.description,
        audio: this.state.audio,
        giantId: this.state.giantId,
        date: this.state.date,
        image: this.state.image,
        isFound: this.state.isFound
      })
      clearInterval(interval)
    }
  }

  saveDate = async () => {
    this.getTime()
    try {
      await AsyncStorage.setItem("date", this.state.date)
    } catch (error) {
      console.log(error)
    }
  }

  retrieveDate = async () => {
    try {
      const value = await AsyncStorage.getItem("date")
      if (value !== null) {
        if (this._isMounted) {
          this.setState({
            date: value
          })
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  getTime() {
    const now =
      this.getOrdinalNum(new Date().getDate()) +
      " of " +
      monthNames[new Date().getMonth()] +
      " at " +
      this.hoursWithLeadingZeros(new Date().getHours()) +
      ":" +
      this.minutesWithLeadingZeros(new Date().getMinutes())

    if (this._isMounted) {
      this.setState({
        date: now
      })
    }
  }

  getOrdinalNum(n) {
    return (
      n +
      (n > 0
        ? ["th", "st", "nd", "rd"][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
        : "")
    )
  }

  minutesWithLeadingZeros(m) {
    m = new Date()
    return (m.getMinutes() < 10 ? "0" : "") + m.getMinutes()
  }

  hoursWithLeadingZeros(h) {
    h = new Date()
    return (h.getHours() < 10 ? "0" : "") + h.getHours()
  }

  render() {
    const { navigation } = this.props
    const { distance, distanceLoaded } = this.state
    const firstname = navigation.getParam("firstname")
    const km = distance / 1000
    
    return (
      <View style={Styles.container}>
        <MapView
          style={Styles.mapStyle}
          showsUserLocation={true}
          followUserLocation={true}
          customMapStyle={MapFeatures.mapStyle}
          initialRegion={navigation.getParam("region")}>
          <MapView.Circle
            center={navigation.getParam("region")}
            radius={275}
            strokeWidth={4}
            strokeColor={Colors.strokeColorCircle}
            fillColor={Colors.fillColorCircle} />
        </MapView>
        <View style={Styles.bottomPart}>
          <ScrollView style={Styles.containerScroll}>
            {distanceLoaded ? (
              <View style={Styles.container}>
                <Text style={Styles.distanceTextStyle}>
                  {firstname} is{" "}
                  {distance > 1000 ? km.toFixed(1) + " km " : distance + "m "}away
              </Text>
              </View>
            ) : (
                <View style={Styles.container}>
                  <Text style={Styles.distanceTextStyle}>
                    Loading the distance to {firstname}...
                </Text>
                  <ActivityIndicator size="small" color={Colors.lightGreen} />
                </View>
              )}
            <DefaultButton
              buttonColor={Colors.yellow}
              buttonText="How to get there?"
              onPress={() =>
                navigation.navigate("TransportInfoScreen", {
                  transport: this.state.transport
                })
              }
            ></DefaultButton>
          </ScrollView>
        </View>
      </View>
    )
  }
}