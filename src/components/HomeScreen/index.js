import React, {
  Component
} from "react";
import HomeScreen from "./HomeScreen.js";
import AboutScreen from "../About/AboutScreen";
import SettingsScreen from "../Settings/SettingsScreen";
import MainScreenNavigator from "../ThreePulley/index.js";
import Profile from "../TwoPulley/index.js";
import SideBar from "../SideBar/SideBar.js";
import {
  DrawerNavigator
} from "react-navigation";
const HomeScreenRouter = DrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Chat: {
    screen: MainScreenNavigator
  },
  Profile: {
    screen: Profile
  },
  About: {
    screen: AboutScreen
  },
  Settings: {
    screen: SettingsScreen
  }
}, {
  contentComponent: props => < SideBar { ...props
  }
  />
});
export default HomeScreenRouter;