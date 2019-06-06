import * as React from "react";
import { View, Text, StyleSheet, ImageBackground, Button, CameraRoll, Image } from "react-native";
import Constants from "expo-constants";
import RNDraw from "rn-draw";
import { takeSnapshotAsync } from "expo";

export default class App extends React.Component {
  state = {
    cameraRollUri: null
  };
  _saveToCameraRollAsync = async () => {
    let result = await takeSnapshotAsync(this._container, {
      format: "png",
      result: "file"
    });

    let saveResult = await CameraRoll.saveToCameraRoll(result, "photo");
    this.setState({ cameraRollUri: saveResult });
  };
  render() {
    return (
      <>
        <View style={styles.container}>
          <View
            ref={view => {
              this._container = view;
            }}
            style={{ backgroundColor: "black" }}
          >
            <ImageBackground
              source={{ uri: "https://s-ec.bstatic.com/images/hotel/max1024x768/731/73118462.jpg" }}
              style={{ width: "100%", height: "100%" }}
            >
              <RNDraw
                containerStyle={{ backgroundColor: "rgba(0,0,0,0.01)" }}
                rewind={undo => {
                  this._undo = undo;
                }}
                clear={clear => {
                  this._clear = clear;
                }}
                color={"red"}
                strokeWidth={4}
              />
            </ImageBackground>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-around", height: 80 }}>
            <Button onPress={() => this._undo()} title="Undo" />
            <Button onPress={() => this._clear()} title="Clear" />
            <Button onPress={this._saveToCameraRollAsync} title="Capture" />
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: "yellow" }}>
          {this.state.cameraRollUri && (
            <Image source={{ uri: this.state.cameraRollUri }} style={{ width: "100%", height: "100%" }} />
          )}
          {!this.state.cameraRollUri && (
            <Text style={{ fontSize: 20, padding: 20 }}>Captured image will be displayed here...</Text>
          )}
        </View>
      </>
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
