"use strict";

import React, { Component} from "react"; //this async storage is deprecated
//import AsyncStorage from "@react-native-community/async-storage";
import { StyleSheet, View, AsyncStorage } from "react-native";
import { mapping, light as lightTheme } from "@eva-design/eva";
import {
  ApplicationProvider,
  Button,
  Text,
  Radio,
  BottomNavigation,
  BottomNavigationTab
} from "react-native-ui-kitten";

import ImageSelection from "./components/ImageSelection";
import CallSettings from "./components/CallSettings";

export default class Settings extends Component {
  constructor() {
    super();

    this.state = { selectedIndex: 0 };
  }
  onTabSelect = (selectedIndex: number) => {
    this.setState({ selectedIndex });
  };

  render() {
    return (
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {this.state.selectedIndex == 0 && <CallSettings />}
          {this.state.selectedIndex == 1 && <ImageSelection />}
        </View>
        <View style={styles.navBar}>
          <BottomNavigation
            selectedIndex={this.state.selectedIndex}
            onSelect={this.onTabSelect}
          >
            <BottomNavigationTab title="Call Settings" />
            <BottomNavigationTab title="Image Settings" />
          </BottomNavigation>
        </View>
      </ApplicationProvider>
    );
  }
}

var styles = StyleSheet.create({
  navBar: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0
  }
});

module.exports = Settings;
