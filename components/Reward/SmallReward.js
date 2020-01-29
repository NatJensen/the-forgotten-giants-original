import React from "react"
import { Image } from "react-native"
import ImageData from "../../data/ImageData"
import Styles from "./RewardStyles"

export default SmallReward = () => (
  <Image
    style={Styles.rewardSmall}
    source={ImageData.rewardImage} />
)