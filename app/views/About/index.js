import React, {
    Component
  } from "react";
  import AboutScreen from "./AboutScreen";
  import {
    StackNavigator
  } from "react-navigation";
  export default (DrawNav = StackNavigator({
    About: {
      screen: AboutScreen
    }
  }));