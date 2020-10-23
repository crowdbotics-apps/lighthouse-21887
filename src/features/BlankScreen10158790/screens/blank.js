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
    <ImageBackground style={styles.ImageBackground_1}>
      <Text style={styles.Text_2}>goal setting and time management</Text>
      <Text style={styles.Text_3}>
        Clarify values: Relax and contemplate; years from now, you are in your
        favorite place, you lived a full and happy life, looking back what are
        you most proud of accomplishing? What are you most grateful for? what is
        your favorite memory? Relax again; you are back at your current age, you
        are at your favorite place, you were just diagnosed with an illness that
        showed no symptoms but would kill you in six months, what will you do
        with the half a yeah you have left? Compare your values from the two
        exercises Setting Goals 1 is it a goal that you are willing to devote
        your time to? or is it a dream you wish to fall in your lap? 2 Is it
        consistent with your values? 3 Is this goal achievable? 4 Is it a
        positive goal? goals to move toward instead of away from, instead of
        &#39;stop ignoring homework&#39; &#39;Try to get 3 assignments phone
        today!&quot; 5 are your goals balanced? often times goals will focus on
        fiances and business, try to add health and fun related goals too!{" "}
      </Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 16 },
  ImageBackground_1: { color: "#ffffff" },
  Text_2: {},
  Text_3: {},
  ImageBackground_1: { color: "#ffffff" },
  Text_2: { color: "#ffffff" },
  Text_3: { color: "#ffffff" }
})
