import React from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content,
  Text,
  ListItem,
  Switch,
  Radio,
  List
} from "native-base";
import { setLocalStorage } from "../../services/storage";

import theme from "../../assets/styles-css";
import styles from "./settings.style";

export default class SettingsScreen extends React.Component {
  state = {
    toggleModel: false,
    activeUnit: "metric"
  };

  toggleOption(value) {
    console.log("activeUnit: ", value);
    this.setState({ activeUnit: value });
    setLocalStorage("isMeasure", this.state.activeUnit);
  }

  toggleMode(value) {
    console.log("toggleModel: ", value);
    this.setState({ toggleModel: value });
    setLocalStorage("isResult", this.state.toggleModel.toString());
  }

  componentDidMount() {
    console.log("componentDidMount");
    setLocalStorage("isResult", this.state.toggleModel.toString());
    setLocalStorage("isMeasure", this.state.activeUnit);
  }

  render() {
    const header = "../../assets/images/vbeltcalc-logo.png";

    return (
      <Container>
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
        <Content style={[theme.padding, theme.blue, theme.textCenter]}>
          <Text
            h5
            style={[
              theme.selfAlignCenter,
              theme.alignContentCenter,
              theme.lightColor,
              theme.marginBottom
            ]}
          >
            Choose the default option when computing
          </Text>
          <ListItem style={[styles.settingsList, theme.marginBottom]}>
            <Body>
              <Text>Step by Step Calculation</Text>
            </Body>
            <Right>
              <Switch
                onValueChange={value => this.toggleMode(value)}
                value={this.state.toggleModel}
                trackColor={{ true: "#0d2643", false: "#f3f3f3" }}
              />
            </Right>
          </ListItem>
          <Text
            h5
            style={[
              theme.selfAlignCenter,
              theme.alignContentCenter,
              theme.lightColor,
              theme.marginBottom
            ]}
          >
            Choose the default measuring units
          </Text>
          <List>
            <ListItem
              style={styles.settingsList}
              selected={"metric" === this.state.activeUnit}
              onPress={() => this.toggleOption("metric")}
            >
              <Body>
                <Text>Metric Units</Text>
              </Body>
              <Right>
                <Radio
                  onPress={() => this.toggleOption("metric")}
                  selected={"metric" === this.state.activeUnit}
                />
              </Right>
            </ListItem>
            <ListItem
              style={styles.settingsList}
              selected={"standard" === this.state.activeUnit}
              onPress={() => this.toggleOption("standard")}
            >
              <Body>
                <Text>Standard Units</Text>
              </Body>
              <Right>
                <Radio
                  onPress={() => this.toggleOption("standard")}
                  selected={"standard" === this.state.activeUnit}
                />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
