import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { connect } from "react-redux";

function DemoScreen(props) {
  return (
    <View>
      <Text>demo</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => {
          props.navigation.navigate("Test");
        }}
      >
        <Text>A</Text>
      </Button>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => {
          props.navigation.navigate("Scanner");
        }}
        style={{ marginTop: 20 }}
      >
        <Text>B</Text>
      </Button>

      <Text>{props.qrReducer.data ? props.qrReducer.data : "NO DATA"}</Text>
    </View>
  );
}

const mapStateToProps = state => ({
  qrReducer: state.qrReducer
});

DemoScreen.navigationOptions = {
  title: "demo"
};

export default connect(mapStateToProps)(DemoScreen);
