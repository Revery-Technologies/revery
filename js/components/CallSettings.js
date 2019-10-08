"use strict";
let _ = require("lodash");
import React, { Component } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-community/async-storage";

import {
  ApplicationProvider,
  Button,
  Text,
  Toggle,
  Input
} from "react-native-ui-kitten";
const HOTLINENUMBER = "8002738255";
const PhoneNumber = require("google-libphonenumber").PhoneNumberUtil.getInstance();
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
  //TODO: save it with async, MAKE IT WORK
  onChange = (checked: boolean) => {
    this.setState({ checked });
    if (this.state.inputValue != HOTLINENUMBER && this.state.checked == true) {
      this.setState({ inputValue: HOTLINENUMBER });
    }
  };

  onInputValueChange = (inputValue: string) => {
    this.setState({ inputValue: inputValue });
  };

  saveNumber = async number => {
    let testNumber = PhoneNumber.parse(this.state.inputValue, "US");
    if (PhoneNumber.isPossibleNumber(testNumber)) {
      this.setState({ validPhone: testNumber.getNationalNumber() });
      try {
        await AsyncStorage.setItem(
          "emergency-number",
          JSON.stringify(this.state.validPhone)
        );
        this.setState({ saved: true });
        Alert.alert(
          "The emergency call number has been updated",
          "In case of an emergency, " +
            this.state.validPhone +
            " will be called.",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
      } catch (e) {
        Alert.alert(
          "Error: Your emergency number was not saved.",
          "Try again.",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
      }
    }
  };

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("emergency-number");
      Alert.alert(
        "Number found",
        "IT IS: " + value,
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      if (value !== null && typeof value == "string") {
        Alert.alert(
          "Number found",
          "IT IS: " + value,
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
        this.setState({ validPhone: value });
      }
    } catch (e) {
      Alert.alert(
        "No Number found saved",
        "Emergency contact number not saved. Try again.",
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
            Configured to call:{"\n" + this.state.validPhone}
          </Text>
          <Button
            status="info"
            onPress={() => this.saveNumber(this.state.inputValue)}
          >
            Save
          </Button>
          <Button status="info" onPress={() => this.getData()}>
            Get
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
