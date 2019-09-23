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

export default class LongTermMode extends Component {

  constructor() {
    super();

    this.state = {} // Set initial state here
  }

  render() {
    return (
      <ViroScene>
        <Viro360Image source={require('./res/guadalupe_360.jpg')} />
        <ViroText text="This is long term mode." width={2} height={2} position={[0, 0, -1]} style={styles.textStyle} />
        <ViroButton
            source={require("./res/base_button.png")}
            gazeSource={require("./res/button_ongaze.png")}
            tapSource={require("./res/button_ontap.png")}
            position={[0, .5, -2]}
            height={2}
            width={3}
            onTap={this._onButtonTap}
            onGaze={this._onButtonGaze}
            animation = {{name:'animateButton', run:false}}  />
      </ViroScene>
    );
  }

  _onButtonGaze() {
      this.setState({
          buttonStateTag: "onGaze"
      });
  }

  _onButtoTap() {
      this.setState({
          buttonStateTag: "onTap",
          run: true
      });
      console.log("tapped!");
  }

}

ViroAnimations.registerAnimations({
  animateButton:{properties:{opacity: 0},
        easing:"EaseInEaseOut", duration: 5000},
});

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
