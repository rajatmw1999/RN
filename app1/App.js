import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    Lists: ListScreen
  },
  {
    initialRouteName: "Lists",
    defaultNavigationOptions: {
      title: "Bob's App",
    },
  }
);

export default createAppContainer(navigator);
