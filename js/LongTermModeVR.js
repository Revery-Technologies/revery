'use strict';

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { ReactMic } from 'react-mic';

import {
  ViroScene,
  ViroText,
  Viro360Image,
  ViroButton,
  ViroVideo,
  ViroImage
} from 'react-viro';

let SETTINGS = "SETTINGS";
let TYPES = "TYPES";
let EXERCISES = "EXERCISES";
let WELLNESS = "WELLNESS";
let AWARENESS = "AWARENESS";

let BOXBREATHE = "BOXBREATHE";

let defaultView = SETTINGS;

export default class LongTermMode extends Component {

  //constructor that creates the component, binds the methods, and creates state variables
  constructor() {
    super();

    this.state = {
      view: defaultView,
      videoMode: false,
      textMode: true,
      record: false,
    }; // Set initial state here

    this._getLongTermSettings = this._getLongTermSettings.bind(this);
    this._getTypeSettings = this._getTypeSettings.bind(this);
    this._getExercises = this._getExercises.bind(this);
    this._getWellness= this._getWellness.bind(this);
    this._getAwareness = this._getAwareness.bind(this);



  }

  //render the view based on the view state variable
  render() {
    if(this.state.view == SETTINGS){
      return this._getLongTermSettings();
    } else if(this.state.view == TYPES){
      return this._getTypeSettings();
    } else if(this.state.view == EXERCISES){
      return this._getExercises();
    } else if(this.state.view == WELLNESS){
      return this._getWellness();
    } else if(this.state.view == AWARENESS){
      return this._getAwareness();
    } else {
        return this._getLongTermSettings();
      }
  }

//this returns a menu with just a button to begin the experience
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

//Menu where user can choose between wellness, mindfulness, or awareness exercises
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
            onClick = {this._getScreenOnPress(WELLNESS)}
            />


      <ViroButton
          source={require("./res/awareness_button.png")}
          position={[-1, -.6, -2]}
          height={2}
          width={3}
          onClick = {this._getScreenOnPress(AWARENESS)}
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

_getWellness(){
  return(
  <ViroScene>
  <Viro360Image source={require('./res/guadalupe_360.jpg')} />
  <ViroText
  text="Wellness" width={2} height={2} position={[0, .7, -1]}
  />


  <ViroImage
    height={1}
    width={1}
    source={require("./res/facts.png")}
    position={[0, .5, -1]}
    />

  <ViroButton
      source={require("./res/back_button.png")}
      position={[0, -1, -3]}
      height={2}
      width={3}
      onClick ={this._getScreenOnPress(SETTINGS)}
      visible ={true}
      />



  </ViroScene>
);
}

_getAwareness(){
  return(
  <ViroScene>
  <ViroScene>
  <Viro360Image source={require('./res/guadalupe_360.jpg')} />
  <ViroText
  text="Awareness" width={2} height={2} position={[0, .7, -1]}
  />


  <ViroImage
    height={1}
    width={1}
    source={require("./res/facts.png")}
    position={[0, .5, -1]}
    />

    <ViroText
    text="Start" width={2} height={2}
        position={[1.5, -.6, -2]}
        height={2}
        width={3}
        onClick = {this._record(true)}
        />


    <ViroText
        text="Stop" width={2} height={2}
      position={[-1, -.6, -2]}
      height={2}
      width={3}
      onClick = {this._record(false)}
      />

  <ViroButton
      source={require("./res/back_button.png")}
      position={[0, -1, -3]}
      height={2}
      width={3}
      onClick ={this._getScreenOnPress(SETTINGS)}
      visible ={true}
      />



  </ViroScene>

  </ViroScene>
);

}

_getExercises(){
  return(
  <ViroScene>
  <Viro360Image source={require('./res/guadalupe_360.jpg')} />
  <ViroText
  text="Mindfulness" width={2} height={2} position={[0, .7, -1]}
  />

  <ViroText
  text="- Box Breathing" width={2} height={2} position={[0, .5, -1]}
  style={styles.textStyle} onClick =  {this._playVideo(false, true)} visible = {this.state.textMode}
  />

  <ViroVideo
    source={require('./res/BoxBreathe.mp4')}
    loop={true}
    position={[0, .5, -1]}
    visible = {this.state.videoMode}
    paused={this.state.textMode}
    />

  <ViroButton
      source={require("./res/back_button.png")}
      position={[0, -1, -3]}
      height={2}
      width={3}
      onClick ={this._getScreenOnPress(SETTINGS)}
      visible ={true}
      />



  </ViroScene>
);

}


_playVideo(setText, setVideo) {
  return () => {
    this.setState({
      textMode: setText,
      videoMode: setVideo,
    });
  };
}

_record(isRecording){
  return () => {
    this.setState({
      record: isRecording,
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
