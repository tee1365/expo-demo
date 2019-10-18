import React from "react";
import { Text, View, TouchableOpacity, CameraRoll } from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { BarCodeScanner } from "expo-barcode-scanner";

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  snapPhoto = async () => {
    console.log("Button Pressed");
    if (this.camera) {
      console.log("Taking photo");
      const options = {
        quality: 1,
        base64: true,
        fixOrientation: true,
        exif: true
      };
      try {
        const photo = await this.camera.takePictureAsync(options);
        console.log(photo);
        photo.exif.Orientation = 1;
        const response = await CameraRoll.saveToCameraRoll(photo.uri);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    }
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={{ flex: 1 }}
            type={this.state.type}
            ref={ref => {
              this.camera = ref;
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "row",
                justifyContent: "center"
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: "flex-end",
                  marginBottom: 10,
                  marginLeft: 10
                }}
                onPress={() => this.snapPhoto()}
              >
                <Ionicons
                  name="ios-camera"
                  style={{ color: "white", fontSize: 40, fontWeight: "bold" }}
                />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
