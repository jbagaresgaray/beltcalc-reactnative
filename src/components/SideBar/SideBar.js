import React from "react";
import { AppRegistry, Image, StatusBar,ImageBackground, StyleSheet } from "react-native";
import { Container, Content, Text, List, ListItem, Icon, Header, Body,Title } from "native-base";

import theme from "../../assets/styles-css";

const routes = [{
  title: "Home",
  icon: "home"
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
        <Header style={theme.toolbarBackground} androidStatusBarColor="#000000">
          <Body>
            <Title>&nbsp;</Title>
          </Body>
        </Header>
        <Content style={theme.blue}>
          <List
            style={theme.lightBgColor}
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data.title)}>
                  <Icon active name={data.icon} style={theme.iconStyle}/>
                  <Text style={theme.marginLeft}>{data.title}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
