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
      videoMode: false,
    }; // Set initial state here

    this._getLongTermSettings = this._getLongTermSettings.bind(this);
    this._getTypeSettings = this._getTypeSettings.bind(this);
    this._getExercises = this._getExercises.bind(this);
    this._sleep = this._sleep.bind(this);


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
      <ViroButton
          source={require("./res/begin_button.png")}
          position={[0, .5, -2]}
          height={2}
          width={3}
          onClick = {this._getScreenOnPress(TYPES)}
          />
    </ViroScene>
  );

}

_getTypeSettings(){
  return (
    <ViroScene>
      <Viro360Image source={require('./res/guadalupe_360.jpg')} />
      <ViroText
      text="Categories" width={2} height={2} position={[0, 1, -1]}
      style={styles.textStyle} />
      <ViroButton
          source={require("./res/mindfulness_button.png")}
          position={[0, .8, -2]}
          height={2}
          width={3}
          onClick = {this._getScreenOnPress(EXERCISES)}
          />

        <ViroButton
            source={require("./res/wellness_button.png")}
            position={[1.5, -.6, -2]}
            height={2}
            width={3}
            onClick = {this._getScreenOnPress(EXERCISES)}
            />


      <ViroButton
          source={require("./res/awareness_button.png")}
          position={[-1, -.6, -2]}
          height={2}
          width={3}
          onClick = {this._getScreenOnPress(EXERCISES)}
          />

      <ViroButton
          source={require("./res/back_button.png")}
          position={[0, -1.9, -2]}
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

  <ViroText
  text="- Box Breathing" width={2} height={2} position={[0, .5, -1]}
  style={styles.textStyle} onClick =  {this._playVideo(SETTINGS)} visible = {this.videoMode}/>

  <ViroButton
      source={require("./res/back_button.png")}
      position={[0, 0, -2]}
      height={2}
      width={3}
      onClick = {this._getScreenOnPress(SETTINGS)}
      />


  </ViroScene>
);

}


_playVideo(viewType) {
  return () => {
    this.setState({
      view: viewType,
    });
  };
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

_sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
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
