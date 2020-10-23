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

  state = { DateTimePicker_6: new Date(""), CheckBox_14: false }

  render = () => (
    <ImageBackground
      source={{
        uri:
          "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/light_house_back.jpg"
      }}
    >
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_6}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_6: selectedDate })
        }
      />
      <Text style={styles.Text_16}>depresson- manic</Text>
      <Slider
        value={50}
        minimumValue={0}
        maximumValue={100}
        maximumTrackTintColor="#004cff"
        style={styles.Slider_3}
      />
      <Text style={styles.Text_17}>mood</Text>
      <Slider
        value={50}
        minimumValue={0}
        maximumValue={100}
        style={styles.Slider_4}
      />
      <Text style={styles.Text_18}>anxiety</Text>
      <Slider
        value={50}
        minimumValue={0}
        maximumValue={100}
        style={styles.Slider_5}
      />
      <Button
        title="coping stuff"
        style={styles.Button_15}
        onPress={() => this.props.navigation.navigate("BlankScreen6158786")}
      />
      <Button
        title="goal setting and time management"
        style={styles.Button_20}
        onPress={() => this.props.navigation.navigate("BlankScreen10158790")}
      />
      <Text style={styles.Text_19}>
        check the box below if you are considering self-harm
      </Text>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("BlankScreen2158265")}
      >
        <CheckBox
          title="self harm "
          containerStyle={styles.CheckBox_14}
          checked={this.state.CheckBox_14}
          onPress={nextChecked => this.setState({ CheckBox_14: nextChecked })}
        />
      </TouchableOpacity>
    </ImageBackground>
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
  Icon_12: {},
  View_1: {},
  DateTimePicker_6: {},
  Slider_3: { alignSelf: "flex-start", borderColor: "#002aff" },
  Slider_4: {},
  Slider_5: {},
  CheckBox_14: {},
  Icon_10: {},
  Icon_12: {},
  ImageBackground_1: {},
  DateTimePicker_6: {},
  Slider_3: { alignSelf: "flex-start", borderColor: "#002aff" },
  Slider_4: {},
  Slider_5: {},
  CheckBox_14: { borderColor: "#9cc01b" },
  Icon_10: {},
  Icon_12: {},
  ImageBackground_1: {},
  DateTimePicker_6: {},
  Slider_3: { alignSelf: "flex-start", borderColor: "#002aff" },
  Slider_4: {},
  Slider_5: {},
  CheckBox_14: { borderColor: "#9cc01b", borderStyle: "dotted" },
  Icon_10: {},
  Icon_12: {},
  ImageBackground_1: {},
  DateTimePicker_6: {},
  Slider_3: { alignSelf: "flex-start", borderColor: "#002aff" },
  Slider_4: {},
  Slider_5: {},
  CheckBox_14: { borderColor: "#9cc01b", borderStyle: "dotted" },
  Button_15: {},
  Button_16: {},
  Button_17: { width: "100%", textAlign: "center" },
  ImageBackground_1: {},
  DateTimePicker_6: {},
  Slider_3: { alignSelf: "flex-start", borderColor: "#002aff" },
  Slider_4: {},
  Slider_5: {},
  CheckBox_14: { borderColor: "#9cc01b", borderStyle: "dotted" },
  Icon_10: {},
  Icon_12: {},
  ImageBackground_1: {},
  DateTimePicker_6: {},
  Text_16: { alignSelf: "center" },
  Slider_3: { alignSelf: "center", borderColor: "#002aff" },
  Text_17: { alignSelf: "center" },
  Slider_4: { alignSelf: "center" },
  Text_18: { alignSelf: "center" },
  Slider_5: { alignSelf: "center" },
  Button_15: {},
  Text_19: { alignSelf: "center" },
  CheckBox_14: { borderColor: "#9cc01b", borderStyle: "dotted" },
  ImageBackground_1: {},
  DateTimePicker_6: {},
  Text_16: { alignSelf: "center" },
  Slider_3: { alignSelf: "center", borderColor: "#002aff" },
  Text_17: { alignSelf: "center" },
  Slider_4: { alignSelf: "center" },
  Text_18: { alignSelf: "center" },
  Slider_5: { alignSelf: "center" },
  Button_15: { marginLeft: 8 },
  Button_20: {
    marginLeft: 8,
    marginRight: 8,
    paddingLeft: 1,
    paddingRight: -13,
    overflow: "hidden",
    alignSelf: "center"
  },
  Text_19: { alignSelf: "center" },
  CheckBox_14: { borderColor: "#9cc01b", borderStyle: "dotted" }
})
