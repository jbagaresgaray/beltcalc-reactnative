import React, { Component } from "react";
import {
  DrawerNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import HomeScreen from "./HomeScreen.js";
import AboutScreen from "../About/AboutScreen";
import SettingsScreen from "../Settings/SettingsScreen";
import MainScreenNavigator from "../ThreePulley/index.js";
import StepOne from "../TwoPulley/index.js";
import SideBar from "../SideBar/SideBar.js";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    TwoPulley: {
      screen: StepOne
    },
    ThreePulley: {
      screen: MainScreenNavigator
    },
    About: {
      screen: AboutScreen
    }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigatorRouter = createStackNavigator(
  {
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    Drawer: {
      screen: HomeScreenRouter,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    }
  },
  {
    initialRouteName: "Drawer"
  }
);

export default AppNavigatorRouter;
