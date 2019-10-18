import LoginScreen from "../screens/Auth/LoginScreen";
import { createStackNavigator } from "react-navigation";

const AuthStack = createStackNavigator({
  Login: LoginScreen
});

export default AuthStack;
