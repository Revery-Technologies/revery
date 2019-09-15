"use strict";

import React, { Component, AsyncStorage } from "react"; //this async storage is deprecated
//import AsyncStorage from "@react-native-community/async-storage";
import { StyleSheet, View } from "react-native";
import {
  ApplicationProvider,
  Button,
  Text,
  Radio
} from "react-native-ui-kitten";

export default class ImageSelection extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>The image settings go here...</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  testStyle: {
    color: "white"
  }
});

module.exports = ImageSelection;
