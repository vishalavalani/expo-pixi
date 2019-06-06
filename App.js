import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import RNDraw from "rn-draw";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RNDraw
          containerStyle={{ backgroundColor: "rgba(0,0,0,0.01)" }}
          rewind={undo => {
            this._undo = undo;
          }}
          clear={clear => {
            this._clear = clear;
          }}
          color={"#000000"}
          strokeWidth={4}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow"
  }
});
