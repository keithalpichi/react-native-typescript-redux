import { createBottomTabNavigator, createSwitchNavigator } from "react-navigation"

import Main from "../views/Main"

const AppTab = createBottomTabNavigator(
  {
    Main: {
      screen: Main
    },
  }, {
    initialRouteName: "Main"
  }
)

const RootNavigator = createSwitchNavigator(
  {
    App: AppTab,
  },
  {
    initialRouteName: "App"
  }
)

export default RootNavigator
