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

  state = { DateTimePicker_6: new Date("") }

  render = () => (
    <View>
      <DateTimePicker
        date={this.state.DateTimePicker_6}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_6: selectedDate })
        }
      />
      <Slider value={50} minimumValue={0} maximumValue={100} />
      <Slider value={50} minimumValue={0} maximumValue={100} />
      <Slider value={50} minimumValue={0} maximumValue={100} />
      <TouchableOpacity onPress={() => this.props.navigation.navigate("")}>
        <Icon name="star" />
      </TouchableOpacity>
      <Icon name="star" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  DateTimePicker_6: {},
  Slider_3: {},
  Slider_4: {},
  Slider_5: {},
  Icon_10: {},
  Icon_12: {},
  View_1: {},
  DateTimePicker_6: {},
  Slider_3: {},
  Slider_4: {},
  Slider_5: {},
  Icon_10: {},
  Icon_12: {}
})
