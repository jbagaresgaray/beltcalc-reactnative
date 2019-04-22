import React, { Component } from "react";
import {
  DrawerNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import HomeScreen from "./HomeScreen";
import AboutScreen from "../About/AboutScreen";
import SettingsScreen from "../Settings/SettingsScreen";
import StepOneTwo from "../TwoPulley/StepOne";
import StepTwoTwo from "../TwoPulley/StepTwo";
import StepThreeTwo from "../TwoPulley/StepThree";
import StepFourTwo from "../TwoPulley/StepFour";
import StepTwoCompute from "../TwoPulley/StepCompute";

import StepOneThree from "../ThreePulley/StepOne";
import StepTwoThree from "../ThreePulley/StepTwo";
import StepThreeThree from "../ThreePulley/StepThree";

import SideBar from "../SideBar/SideBar";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Settings: {
      screen: SettingsScreen
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
    TwoPulley: {
      screen: StepOneTwo,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    TwoTwoPulley: {
      screen: StepTwoTwo,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    TwoThreePulley: {
      screen: StepThreeTwo,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    TwoFourPulley: {
      screen: StepFourTwo,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    TwoComputePulley: {
      screen: StepTwoCompute,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    ThreePulley: {
      screen: StepOneThree,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    ThreeTwoPulley: {
      screen: StepTwoThree,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    ThreeThreePulley: {
      screen: StepThreeThree,
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
