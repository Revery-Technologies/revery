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

export default class CallSettings extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <Text>The call settings go here...</Text>
      </ApplicationProvider>
    );
  }
}

var styles = StyleSheet.create({
  testStyle: {
    color: "white"
  }
});

module.exports =CallSettings;
