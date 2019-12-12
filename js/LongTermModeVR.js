/*
 * LongTermModeVR.java
 * This class performs a calculation in postfix notation. This is where the program pushes numbers on to the stack,
 * then pops off and performs a calculation on these numbers, then pushes the result back. It does this until all
 * the operators and operands in the equation are used.
 * Date: 12/16/19
 * On my honor: EA
 */
'use strict';

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';


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
    };

    //binds methods for getting views to the methods defined in the class

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

//this returns a menu with just a button to begin the experience, no parameter
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

//returns a menu where user chooses between wellness, mindfulness, or awareness, no parameters
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
            position={[2, -.6, -2]}
            height={2}
            width={3}
            onClick = {this._getScreenOnPress(WELLNESS)}
            />


      <ViroButton
          source={require("./res/awareness_button.png")}
          position={[-2, -.6, -2]}
          height={2}
          width={3}
          onClick = {this._getScreenOnPress(AWARENESS)}
          />

      <ViroButton
          source={require("./res/back_button.png")}
          position={[0, -1.9, -1]}
          height={2}
          width={3}
          onClick = {this._getScreenOnPress(SETTINGS)}
        />
    </ViroScene>
  );
}

//returns a screen with wellness facts, no parameters
_getWellness(){
  return(
  <ViroScene>
  <Viro360Image source={require('./res/wellness.jpg')} />
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
      onClick ={this._getScreenOnPress(TYPES)}
      visible ={true}
      />

  </ViroScene>
);
}


//returns a screen where
_getExercises(){
  return(
  <ViroScene>
  <Viro360Image source={require('./res/mindfullness.jpeg')} />
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
      onClick ={this._getScreenOnPress(TYPES)}
      visible ={true}
      />



  </ViroScene>
);
}

_getAwareness(){
  return(
  <ViroScene>
  <Viro360Image source={require('./res/room.jpg')} />
  <ViroText
  text="Wellness" width={2} height={2} position={[0, .7, -1]}
  />


  <ViroText
    height={1}
    width={1}
    text="Recording will go here..."
    position={[0, .5, -1]}
    />

  <ViroButton
      source={require("./res/back_button.png")}
      position={[0, -1, -3]}
      height={2}
      width={3}
      onClick ={this._getScreenOnPress(TYPES)}
      visible ={true}
      />

  </ViroScene>
);
}

//play video method
_playVideo(setText, setVideo) {
  return () => {
    this.setState({
      textMode: setText,
      videoMode: setVideo,
    });
  };
}

//record in VR helper method -- not implemented, takes in a boolean and sets record to that
_record(isRecording){
  return () => {
    this.setState({
      record: isRecording,
    });
  };
}

//changes the menu -- takes in the view it wants and changes view to that
_getScreenOnPress(viewType) {
  return () => {
    this.setState({
      view: viewType,
    });
  };
}



}



//styles for font
var styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Arial',
    fontSize: 12,
    color: 'white',
    textAlignVertical: 'center',
    textAlign: 'center',
  },

});

//exports module so thart App.js can access it
module.exports = LongTermMode;
