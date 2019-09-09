'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroScene,
  ViroText,
  Viro360Image,
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
        <ViroText text="This is long term mode." width={2} height={2} position={[0, 0, -2]} style={styles.textStyle} />
      </ViroScene>
    );
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
