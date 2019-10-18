import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

export default function LoginScreen(props) {
  return (
    <View>
      <Text>Auth</Text>
      <Button
        mode="contained"
        style={{ marginTop: 100 }}
        onPress={() => props.navigation.navigate("Main")}
      >
        Login
      </Button>
    </View>
  );
}

LoginScreen.navigationOptions = {
  title: "Login"
};
