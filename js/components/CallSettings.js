"use strict";
let _ = require("lodash");
import React, { Component } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-community/async-storage";
import { AsYouType } from "libphonenumber-js";
import {
  ApplicationProvider,
  Button,
  Text,
  Toggle,
  Input
} from "react-native-ui-kitten";
const HOTLINENUMBER = "(800) 273-8255";
export default class CallSettings extends Component {
  async componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {}

  constructor() {
    super();

    this.state = {
      checked: true,
      inputValue: HOTLINENUMBER,
      validPhone: null
    };
  }

  onChange = (checked: boolean) => {
    this.setState({ checked });
    if (this.state.inputValue != HOTLINENUMBER && this.state.checked == true) {
      this.setState({ inputValue: HOTLINENUMBER });
      this.saveNumber(HOTLINENUMBER);
    }
  };

  onInputValueChange = async (inputValue: string) => {
    let num = new AsYouType("US").input(inputValue);
    this.setState({ inputValue: num });
  };

  saveNumber = async number => {
    let num = new AsYouType("US").input(number);
    this.setState({ validPhone: num });
    //validate here
    try {
      await AsyncStorage.setItem("emergency-number", num);
      Alert.alert(
        "The emergency call number has been updated",
        "In case of an emergency, " +
          (await AsyncStorage.getItem("emergency-number")) +
          " will be called.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    } catch (e) {
      Alert.alert(
        "Error: Your emergency number was not saved.",
        "Please try again.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }
  };

  getData = async () => {
    try {
      let value = new AsYouType("US").input(
        await AsyncStorage.getItem("emergency-number")
      );
      if (value !== null && typeof value == "string") {
        this.setState({ validPhone: value });
        if (this.state.validPhone != HOTLINENUMBER) {
          this.setState({ checked: false });
          this.setState({ inputValue: this.state.validPhone });
        }
      }
    } catch (e) {
      Alert.alert(
        "Error",
        "There was a problem retrieving the saved phone number.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }
  };
  render() {
    return (
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.box}
        scrollEnabled={false}
      >
        <View style={styles.toggleInfo}>
          <View style={styles.horzBox}>
            <Text category="s1" status="info">
              Automatic hotline call
            </Text>
            <Toggle
              checked={this.state.checked}
              onChange={this.onChange}
              status="info"
            />
          </View>
          <Text>
            If this is enabled, {HOTLINENUMBER}, the National Suicide Prevention
            Lifeline, will be called in an emergency. This is enabled by
            default.
          </Text>
        </View>

        <Input
          keyboardType={"phone-pad"}
          status="info"
          disabled={this.state.checked}
          value={this.state.inputValue}
          onChangeText={this.onInputValueChange}
          label="If you are not in the United States or you would like to call
          someone other than the National Suicide Prevention Lifeline, you
          should change this number."
        />
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text numberOfLines={2} status="info">
            Currently configured to call:{"\n" + this.state.validPhone}
          </Text>
          <Button
            status="info"
            onPress={() => this.saveNumber(this.state.inputValue)}
          >
            Save
          </Button>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

var styles = StyleSheet.create({
  horzBox: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  box: {
    borderRadius: 5,
    borderColor: "whitesmoke",
    borderWidth: 5,
    width: "90%",
    padding: 10
  },
  toggleInfo: {
    paddingBottom: 20
  }
});

module.exports = CallSettings;
