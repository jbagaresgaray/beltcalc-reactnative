import React, {
  Component
} from "react";
import Profile from "./Profile.js";
import EditScreenOne from "./EditScreenOne.js";
import EditScreenTwo from "./EditScreenTwo.js";
import {
  StackNavigator,
  NavigationAction
} from "react-navigation";
export default (DrawNav = StackNavigator({
  Profile: {
    screen: Profile
  },
  EditScreenOne: {
    screen: EditScreenOne
  },
  EditScreenTwo: {
    screen: EditScreenTwo
  }
}));