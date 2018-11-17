import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import styles from "../../assets/styles-css";

export default class SettingsScreen extends React.Component {
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
            <Title style={styles.lightColor}>Settings</Title>
          </Body>
        </Header>
        <Content padder style={styles.padding}>
          
        </Content>
      </Container>
    );
  }
}
