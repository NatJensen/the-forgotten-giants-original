import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import HomeScreen from "./screens/HomeScreen/HomeScreen"
import AllGiantsScreen from "./screens/AllGiantsScreen/AllGiantsScreen"
import MapScreen from "./screens/MapScreen/MapScreen"
import TransportInfoScreen from "./screens/TransportInfoScreen/TransportInfoScreen"
import RewardScreen from "./screens/RewardScreen/RewardScreen"
import AboutGiantScreen from "./screens/AboutGiantScreen/AboutGiantScreen"
import RewardCollectionScreen from "./screens/RewardCollectionScreen/RewardCollectionScreen"
import Colors from "./constants/colors"

const AppNavigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    AllGiantsScreen: AllGiantsScreen,
    MapScreen: MapScreen,
    RewardScreen: RewardScreen,
    AboutGiantScreen: AboutGiantScreen,
    RewardCollectionScreen: RewardCollectionScreen,
    TransportInfoScreen: TransportInfoScreen
  },
  {
    initialRouteName: "HomeScreen",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.white,
      },
      headerTintColor: Colors.black,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
)

export default createAppContainer(AppNavigator)