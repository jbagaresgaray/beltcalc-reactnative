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
  Radio
} from "native-base";

import theme from "../../assets/styles-css";
import styles from "./settings.style";

export default class SettingsScreen extends React.Component {
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
              <Switch value={false} />
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
          <ListItem style={styles.settingsList}>
            <Body>
              <Text>Metric Units</Text>
            </Body>
            <Right>
              <Radio selected={false} />
            </Right>
          </ListItem>
          <ListItem style={styles.settingsList}>
            <Body>
              <Text>Standard Units</Text>
            </Body>
            <Right>
              <Radio selected={true} />
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
