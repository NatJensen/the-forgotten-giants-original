import React from "react"
import { Image } from "react-native"
import ImageData from "../../data/ImageData"
import Styles from "./RewardStyles"

export const BigReward = () => (
  <Image
    style={Styles.rewardBig}
    source={ImageData.rewardImage} />
)