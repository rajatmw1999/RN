import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import StateScreen from "./src/screens/StateScreen";
import ColorScreen from "./src/screens/ColorScreen";
import AdjustableColorScreen from "./src/screens/AdjustableColorScreen";
import TextInputScreen from "./src/screens/TextInputScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    Lists: ListScreen,
    Image: ImageScreen,
    State: StateScreen,
    Color: ColorScreen,
    Adjustable: AdjustableColorScreen,
    TextInput: TextInputScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Bob's App",
    },
  }
);

export default createAppContainer(navigator);
