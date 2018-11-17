import React from "react";
import { AppRegistry, Image, StatusBar,ImageBackground, StyleSheet } from "react-native";
import { Container, Content, Text, List, ListItem, Icon, Header, Body,Title } from "native-base";

import * as styles from "../../assets/styles-css";

const routes = [{
  title: "Home",
  icon: "home"
},{
  title: "Two Pulleys",
  icon: "arrow-forward"
},{
  title: "Three Pulleys",
  icon: "arrow-forward"
},{
  title: "Settings",
  icon:"settings"
},{
  title: "About",
  icon: "information-circle"
}];


export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Header style={styles.toolbarBackground} androidStatusBarColor="#000000">
          <Body>
            <Title>&nbsp;</Title>
          </Body>
        </Header>
        <Content style={styles.blue}>
          <List
            style={styles.lightBgColor}
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data.title)}>
                  <Icon active name={data.icon} style={styles.iconStyle}/>
                  <Text>{data.title}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
