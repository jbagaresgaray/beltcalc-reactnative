import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import styles from "../../assets/styles-css";

export default class AboutScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header style={styles.toolbarBackground} androidStatusBarColor="#000000">
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon style={styles.lightColor} name="menu" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.lightColor}>About</Title>
          </Body>
        </Header>
        <Content padder style={styles.padding}>
          <Text style={styles.appinfo}>
          This calculator is intended for general information purposes only; to find the approximate length of new, unused belts. The calculator should not be used for previously installed belts, as they are permanently stretched. The information provided is not intended to offer or substitute professional engineer design, review, and analysis of the needs of the user's particular application. User is solely responsible for determining and evaluating the suitability of any belt for the user's particular application.
          By using the Pulley App, the user acknowledges any reliance on the information is at your own risk. User further agrees to indemnify and hold harmless The Pulley App, LLC, its owners, and employees from any and all liability, damages, costs, fees, and expenses.
          </Text>
        </Content>
      </Container>
    );
  }
}
