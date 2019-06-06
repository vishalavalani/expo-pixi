import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import RNDraw from "rn-draw";

export default class App extends React.Component {
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
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
