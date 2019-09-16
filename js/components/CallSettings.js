"use strict";

import React, { Component, AsyncStorage } from "react"; //this async storage is deprecated
//import AsyncStorage from "@react-native-community/async-storage";
import { StyleSheet, View, Keyboard } from "react-native";
import {
  ApplicationProvider,
  Button,
  Text,
  Toggle,
  Input,
  Popover
} from "react-native-ui-kitten";

export default class CallSettings extends Component {
  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }
  _keyboardDidShow = () => {
    this.setState({ keyboardOpen: true });
  };

  _keyboardDidHide = () => {
    this.setState({ keyboardOpen: false });
  };
  constructor() {
    super();

    this.state = {
      keyboardOpen: false,
      checked: true,
      inputValue: "18002738255",
      popoverVisible: false
    };
  }
  //TODO: save it with async, MAKE IT WORK
  onChange = (checked: boolean) => {
    this.setState({ checked });
  };

  onInputValueChange = (inputValue: string) => {
    this.setState({ inputValue });
  };
  togglePopover = () => {
    this.setState({ popoverVisible: !this.state.popoverVisible });
  };

  renderPopoverContentElement = (): React.ReactElement<ViewProps> => {
    return (
      <View>
        <Text>Submit.</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.box}>
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
            If this is enabled, 1-800-273-8255, the National Suicide Prevention
            Lifeline, will be called in an emergency. This is enabled by
            default.
          </Text>
        </View>
        {/*<Popover
          placement="top"
          visible={this.state.keyboardOpen}
          content={this.renderPopoverContentElement()}
          onBackdropPress={this.togglePopover}
        >*/}
        <Input
          //TODO: make this dismissable, I tried doing something fancy with the popover, now its all messy
          keyboardType={"phone-pad"}
          status="info"
          disabled={this.state.checked}
          value={this.state.inputValue}
          onChangeText={this.onInputValueChange}
          label="If you are not in the United States or you would like to call
          someone other than the National Suicide Prevention Lifeline, you
          should change this number."
        />
        {/*</Popover>*/}
        {/* TODO: Show text here on what number will be called, for confirmation */}
      </View>
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
