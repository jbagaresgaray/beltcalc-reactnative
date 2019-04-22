import React from "react";
import HomeScreen from "./src/components/HomeScreen/index.js";
export default class AwesomeApp extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  render() {
    return <HomeScreen />;
  }
}
