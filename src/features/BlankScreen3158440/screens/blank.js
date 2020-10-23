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
      <Button
        title="suicide hotline"
        color="#e3d79c"
        onPress={() => alert("Pressed!")}
      />
      <Button
        title="LGBTQA+"
        color="#e3d79c"
        onPress={() => alert("Pressed!")}
      />
      <Button
        title="texting hotline"
        color="#e3d79c"
        onPress={() => alert("Pressed!")}
      />
      <Button
        title="self harm"
        color="#e3d79c"
        onPress={() => alert("Pressed!")}
      />
      <Button title="greif" color="#e3d79c" onPress={() => alert("Pressed!")} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Button_2: {},
  Button_3: {},
  Button_4: {},
  Button_5: {},
  Button_6: {},
  ImageBackground_1: {},
  Button_2: {},
  Button_4: {},
  Button_3: {},
  Button_5: {},
  Button_6: {}
})
