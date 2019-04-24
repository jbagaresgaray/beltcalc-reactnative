import React from "react";
import { Image, View, AppState } from "react-native";
import {
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content,
  Text
} from "native-base";
import { getLocalStorage, setLocalStorage } from "../../services/storage";

import styles from "./home.style";
import theme from "../../assets/styles-css";

export default class HomeScreen extends React.Component {
  state = {
    isResult: "",
    appState: AppState.currentState
  };

  componentDidMount() {
    getLocalStorage("isResult").then(val => {
      console.log("isResult: ", val);
      this.setState({ isResult: val });
    });

    this.props.navigation.addListener("willFocus", this.viewDidEnter);
  }

  viewDidEnter() {
    console.log("viewDidEnter: ");
    setLocalStorage("pulleyCenter", "");
    setLocalStorage("pulleyCenter1", "");
    setLocalStorage("pulleyCenter2", "");
    setLocalStorage("pulleyCenter3", "");

    setLocalStorage("largeDiameter", "");
    setLocalStorage("mediumDiameter", "");
    setLocalStorage("smallDiameter", "");
  }

  gotoTwoPulleys() {
    if (this.state.isResult === "result") {
      this.props.navigation.push("TwoComputePulley", {
        recal: true
      });
    } else {
      this.props.navigation.push("TwoPulley");
    }
  }

  gotoThreePulleys() {
    if (this.state.isResult === "result") {
      this.props.navigation.push("ThreeComputePulley", {
        recal: true
      });
    } else {
      this.props.navigation.push("ThreePulley");
    }
  }

  render() {
    const pic1 = "../../assets/images/intro-2.png";
    const pic2 = "../../assets/images/intro-3.png";
    const header = "../../assets/images/vbeltcalc-logo.png";

    return (
      <Container style={[theme.textCenter]}>
        <Header style={theme.toolbarBackground} androidStatusBarColor="#000000">
          <Left style={{ flex: 1 }}>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon style={theme.lightColor} name="menu" />
            </Button>
          </Left>
          <Body style={{ flex: 1 }}>
            <Image source={require(header)} style={theme.headerLogo} />
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>
        <Content padder style={[styles.padding, theme.blue]}>
          <Text
            h4
            style={[
              theme.selfAlignCenter,
              theme.alignContentCenter,
              theme.lightColor,
              theme.paddingTop
            ]}
          >
            Choose the number of pulleys
          </Text>
          <View style={[styles.intro]}>
            <Button
              full
              light
              style={styles.introBtn}
              onPress={() => this.gotoTwoPulleys()}
            >
              <Image
                resizeMode="contain"
                source={require(pic1)}
                style={styles.introImg}
              />
              <Text style={styles.introText}>TWO PULLEYS</Text>
            </Button>
            <Button
              full
              light
              style={styles.introBtn}
              onPress={() => this.gotoThreePulleys()}
            >
              <Image
                resizeMode="contain"
                source={require(pic2)}
                style={styles.introImg}
              />
              <Text style={styles.introText}>THREE PULLEYS</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
