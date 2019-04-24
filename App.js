import React from "react";
import { setLocalStorage } from "./app/services/storage";
import AppNavigatorRouter from "./app/views/app.routing";
export default class AwesomeApp extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };

    setLocalStorage("isResult", "step");
    setLocalStorage("isMeasure", "standard");
  }

  render() {
    return <AppNavigatorRouter />;
  }
}
