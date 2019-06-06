import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import RNDraw from "rn-draw";
import Constants from "expo-constants";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RNDraw
          strokes={[]}
          containerStyle={{ backgroundColor: "rgba(0,0,0,0.01)" }}
          rewind={undo => {
            this._undo = undo;
          }}
          clear={clear => {
            this._clear = clear;
          }}
          color={"#000000"}
          strokeWidth={4}
          onChangeStrokes={strokes => console.log(strokes)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8
  }
});
