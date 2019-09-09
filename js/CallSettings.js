"use strict";

import React, { Component, AsyncStorage } from "react"; //this async storage is deprecated
//import AsyncStorage from "@react-native-community/async-storage";
import { StyleSheet, View } from "react-native";
import { mapping, light as lightTheme } from "@eva-design/eva";
import {
  ApplicationProvider,
  Button,
  Text,
  Radio
} from "react-native-ui-kitten";

export default class Settings extends Component {
  constructor() {
    super();

    this.state = {
      //testEnabled: false
    }; // Store the state of settings toggles
  }
  //On button toggle, save its status using async-storage, then change the state of the button
  /* something like this
  getSavedSetting = async (settingName) => {
    try {
      const value = await AsyncStorage.getItem(settingName)
      if(value !== null) {
        this.setState({settingName:value})
      }
    } catch(e) {
     console.log("No setting status saved for " + settingName)
    }
  }
  // then when the component mounts change the state to what is saved in async-storage

  onChangeTest = (changedState) => {
    AsyncStorage.setItem("testEnabled", changedState );
    this.setState({ testEnabled: !this.state.testEnabled }); //toggle the state of the
  };*/

  render() {
    return (
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <Text>Settings</Text>
        {/* It will probably end up looking someting like this
        <Radio
        checked={this.state.}
        onChange={this.onChangeTest(!this.state.testEnabled)}
      />*/}
      </ApplicationProvider>
    );
  }
}

var styles = StyleSheet.create({
  testStyle: {
    color: "white"
  }
});

module.exports = Settings;
