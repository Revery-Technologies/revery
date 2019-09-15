"use strict";

import React, { Component, AsyncStorage } from "react"; //this async storage is deprecated
//import AsyncStorage from "@react-native-community/async-storage";
import { StyleSheet, View } from "react-native";
import {
  ApplicationProvider,
  Button,
  Text,
  Toggle
} from "react-native-ui-kitten";

export default class CallSettings extends Component {
  constructor() {
    super();

    this.state = {
      checked: false
    };
  }
  //save it with async
  onChange = (checked: boolean) => {
    this.setState({ checked });
  };

  render() {
    return (
      <View style={{ width: "100%", justifyContent: "center" }}>
        <View style={styles.settingsBox}>
          <Text category="s1" status="info">
            Automatic hotline call
          </Text>
          <Toggle
            checked={this.state.checked}
            onChange={this.onChange}
            status="info"
          />
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  settingsBox: {
    borderRadius: 5,
    borderColor: "whitesmoke",
    borderWidth: 3,
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  }
});

module.exports = CallSettings;
