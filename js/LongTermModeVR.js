'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroScene,
  ViroText,
  Viro360Image,
  ViroButton,
  ViroAnimations
} from 'react-viro';

let SETTINGS = "SETTINGS";
let TYPES = "TYPES";
let EXERCISES = "EXERCISES";
let BOXBREATHE = "BOXBREATHE";

let defaultView = SETTINGS;

export default class LongTermMode extends Component {

  constructor() {
    super();

    this.state = {
      view: defaultView,
    }; // Set initial state here

    this._getLongTermSettings = this._getLongTermSettings.bind(this);
    this._getTypeSettings = this._getTypeSettings.bind(this);
    this._getExercises = this._getExercises.bind(this);


  }


  render() {
    if(this.state.view == SETTINGS){
      return this._getLongTermSettings();
    } else if(this.state.view == TYPES){
    return this._getTypeSettings();
  } else if(this.state.view == EXERCISES){
    return this._getExercises();
  } else {
      return this._getLongTermSettings();
    }
  }

_getLongTermSettings(){
  return (
    <ViroScene>
      <Viro360Image source={require('./res/guadalupe_360.jpg')} />
      <ViroText text="Welcome to Long-Term Mode."
      width={2} height={2} position={[0, .8, -1]} style={styles.textStyle} />
      <ViroText text="Welcome to Long-Term Mode."
      width={2} height={2} position={[0, .5, 0]} style={styles.textStyle} />
      <Button
          source={require("./res/base_button.png")}
          position={[0, .5, -2]}
          height={2}
          width={3}
          onClick = {this._getScreenOnPress(TYPES)}
          >
        Button
          </Button>
    </ViroScene>
  );
}

_getTypeSettings(){
  return (
    <ViroScene>
      <Viro360Image source={require('./res/guadalupe_360.jpg')} />
      <ViroText
      text="Categories" width={2} height={2} position={[0, .7, -1]}
      style={styles.textStyle} />
      <ViroButton
          source={require("./res/base_button.png")}
          position={[0, .5, -2]}
          height={2}
          width={3}
          onClick = {this._getScreenOnPress(EXERCISES)}
          />


      <ViroButton
          source={require("./res/base_button.png")}
          position={[0, -1, -2]}
          height={2}
          width={3}
          onClick = {this._getScreenOnPress(SETTINGS)}
          />
    </ViroScene>
  );
}

_getExercises(){
  return(
  <ViroScene>
  <Viro360Image source={require('./res/guadalupe_360.jpg')} />
  <ViroText
  text="Mindfulness" width={2} height={2} position={[0, .7, -1]}
  style={styles.textStyle} />

  <ViroButton
      source={require("./res/base_button.png")}
      position={[0, .5, -2]}
      height={2}
      width={3}
      onClick = {this._getScreenOnPress(SETTINGS)}
      />


  </ViroScene>
);

}

_getScreenOnPress(viewType) {
  return () => {
    this.setState({
      view: viewType,
    });
  };
}

_onButtonGaze() {
      this.setState({
          buttonStateTag: "onGaze"
      });
  }


}


var styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Arial',
    fontSize: 12,
    color: 'white',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = LongTermMode;
