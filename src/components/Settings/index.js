import React, {
    Component
  } from "react";
  import SettingsScreen from "./SettingsScreen";
  import {
    StackNavigator
  } from "react-navigation";
  export default (DrawNav = StackNavigator({
    Settings: {
      screen: SettingsScreen
    }
  }));