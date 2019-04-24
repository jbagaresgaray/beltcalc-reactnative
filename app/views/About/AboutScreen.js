import React from "react";
import { Image } from "react-native";
import { Container, Header, Left, Icon, Right, Button, Body, Content,Text } from "native-base";

import theme from "../../assets/styles-css";
import styles from "./about.style";

export default class AboutScreen extends React.Component {
  render() {
    const header = '../../assets/images/vbeltcalc-logo.png';

    return (
      <Container>
        <Header style={theme.toolbarBackground} androidStatusBarColor="#000000">
          <Left style={{flex:1}}>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon style={theme.lightColor} name="menu" />
            </Button>
          </Left>
          <Body style={{flex:1}}>
            <Image source={require(header)} style={theme.headerLogo}/>
          </Body>
          <Right style={{flex:1}}></Right>
        </Header>
        <Content padder style={theme.padding}>
          <Text style={styles.appinfo}>
          This calculator is intended for general information purposes only; to find the approximate length of new, unused belts. The calculator should not be used for previously installed belts, as they are permanently stretched. The information provided is not intended to offer or substitute professional engineer design, review, and analysis of the needs of the user's particular application. User is solely responsible for determining and evaluating the suitability of any belt for the user's particular application.
          By using the Pulley App, the user acknowledges any reliance on the information is at your own risk. User further agrees to indemnify and hold harmless The Pulley App, LLC, its owners, and employees from any and all liability, damages, costs, fees, and expenses.
          </Text>
        </Content>
      </Container>
    );
  }
}
