"use strict";t

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

//Links to both the image and call settings
const ImageSelection = require("ImageSelection.js");
const CallSettings = require("CallSettings.js");
const HomeScreen = require("../App.js");


let UNSET = "UNSET";
let NAVIGATOR_TYPE_IMAGE_SELECTOR = "IMAGE_SELECTOR";
let NAVIGATOR_TYPE_CALL_SETTINGS = "CALL_SETTINGS";
let NAVIGATOR_TYPE_HOME= "HOMESCREEN";

let defaultNavigatorType = UNSET;


export default class Settings extends Component {
  constructor() {
    super();


    this.state = {
      navigatorType: defaultNavigatorType,
      sharedProps: sharedProps
    };
      this._getSettingsSelect = this._getSettingsSelect,bind(this);
      this._getHomeScreen = this._getHomeScreen.bind(this);
      this._getImageSettings = this._getImageSettings.bind(this);
      this._getCallSettings = this._getCallSettings.bind(this);


  }


  render() {
    if (this.state.navigatorType == NAVIGATOR_TYPE_IMAGE_SELECTOR) {
      return this._getImageSettings();
    } else if (this.state.navigatorType == NAVIGATOR_TYPE_CALL_SETTINGS) {
      return this._getCallSettings();
    } else if (this.state.navigatorType == NAVIGATOR_TYPE_CALL_SETTINGS) {
      return this._getHomeScreen();
    }

    //default case: happens when navigator type is unset
    return this._getHomeScreen();
  }
}

_getSettingsSelect() {
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <View style={localStyles.outer}>
        <View style={localStyles.inner}>
          <View style={{ padding: 10 }}>
            <Text
              category="h4"
              adjustsFontSizeToFit
              numberOfLines={1}
              styles={localStyles.titleText}
            >
              Settings:
            </Text>
          </View>
          <View style={{ padding: 20 }}>
            <Button
              onPress={this._getExperienceButtonOnPress(
                NAVIGATOR_TYPE_IMAGE_SELECTOR
              )}
              size="large"
              status="info"
            >
              Image Settings
            </Button>
          </View>
          <Button
            size="large"
            status="info"
            onPress={this._getExperienceButtonOnPress(
              NAVIGATOR_TYPE_IMAGE_SELECTOR)}
          >
            Call Settings
          </Button>

          <View style={{ padding: 80 }}>
            <Button
              size="large"
              status="info"
              onPress={this._getExperienceButtonOnPress(NAVIGATOR_TYPE_HOME)}
            >
              Home
            </Button>
          </View>
        </View>
      </View>
    </ApplicationProvider>
  );
}

_getImageSettings() {
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <Button
        size="large"
        status="info"
        onPress={this._getExperienceButtonOnPress(UNSET)}
      >
        Go Back
      </Button>
      <ImageSelection/>
    </ApplicationProvider>
  );
}


_getCallSettings() {
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <Button
        size="large"
        status="info"
        onPress={this._getExperienceButtonOnPress(UNSET)}
      >
        Go Back
      </Button>
      <CallSettings/>
    </ApplicationProvider>
  );
}



_getExperienceButtonOnPress(navigatorType) {
  return () => {
    this.setState({
      navigatorType: navigatorType
    });
  };
}


var styles = StyleSheet.create({
  outer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  inner: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  titleText: {
    padding: 30,
    color: "#123456",
    textAlign: "center"
  },

  exitButton: {
    height: 50,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  }
});

module.exports = Settings;
