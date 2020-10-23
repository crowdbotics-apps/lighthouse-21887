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

  state = { TextInput_2: "", CheckBox_3: false, CheckBox_4: false }

  render = () => (
    <View>
      <TextInput
        placeholder="how are you feeling"
        multiline={true}
        style={styles.TextInput_2}
        value={this.state.TextInput_2}
        onChangeText={nextValue => this.setState({ TextInput_2: nextValue })}
      />
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("BlankScreen3158440")}
      >
        <CheckBox
          title="i feel suicidal"
          checked={this.state.CheckBox_3}
          onPress={nextChecked => this.setState({ CheckBox_3: nextChecked })}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("BlankScreen3158440")}
      >
        <CheckBox
          title="i still want to self harm"
          checked={this.state.CheckBox_4}
          onPress={nextChecked => this.setState({ CheckBox_4: nextChecked })}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  TextInput_2: {},
  CheckBox_3: {},
  View_1: {},
  TextInput_2: { height: 100 },
  CheckBox_3: {},
  CheckBox_4: {},
  View_1: {},
  TextInput_2: { height: 100 },
  CheckBox_3: {},
  CheckBox_4: {}
})
