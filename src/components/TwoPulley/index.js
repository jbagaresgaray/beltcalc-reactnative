import React from "react";
import Profile from "./StepOne.js";
import StepTwo from "./StepTwo.js";
import StepThree from "./StepThree.js";
import StepFour from "./StepFour.js";
import {
  StackNavigator,
  NavigationAction
} from "react-navigation";
export default (DrawNav = StackNavigator({
  Profile: {
    screen: Profile
  },
  StepTwo: {
    screen: StepTwo
  },
  StepThree: {
    screen: StepThree
  },
  StepFour: {
    screen: StepFour
  }
}));