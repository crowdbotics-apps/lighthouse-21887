import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <ImageBackground>
      <Text>
        The take five method is a grounding exercise that is commonly used for
        anxiety disorders. 1. look around and find five things you can see 2.
        close your eyes and find five things you can feel don&#39;t forget to
        breath 3. close your eyes again and find 3 things you can hear 4.close
        your eyes again and find 2 things you can smell 5. what is one thing you
        can taste
      </Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 16 },
  ImageBackground_1: {},
  Text_2: {},
  ImageBackground_1: {},
  Text_2: {}
})
