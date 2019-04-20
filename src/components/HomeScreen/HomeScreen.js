import React from "react";
import { StatusBar, StyleSheet, Image,View } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";

import styles from "./home.style";

export default class HomeScreen extends React.Component {
  render() {
    let pic1 = {
      uri: '../../assets/images/intro-2.png'
    };

    let pic2 = {
      uri: '../../assets/images/intro-3.png'
    };

    return (
      <Container style={styles.textCenter}>
        <Header style={styles.toolbarBackground} androidStatusBarColor="#000000">
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon style={styles.lightColor} name="menu" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.lightColor}>HomeScreen</Title>
          </Body>
          <Right>
          <Button transparent onPress={() => this.props.navigation.navigate('Settings')}>
              <Icon style={styles.lightColor} name="settings" />
            </Button>
          </Right>
        </Header>
        <Content padder style={[styles.padding,styles.blue]}>
        <Text h4 style={[styles.textCenter, styles.lightColor]}>Choose the number of pulleys</Text>
        <View style={[styles.intro]}>
          <Button full light
            style={styles.introBtn}
            onPress={() => this.props.navigation.navigate("TwoPulley")}>
            <Image source={require('../../assets/images/intro-2.png')} style={styles.introImg}/>
            <Text style={styles.introText}>TWO PULLEYS</Text>
          </Button>
          <Button full light
            style={styles.introBtn}
            onPress={() => this.props.navigation.navigate("ThreePulley")}>
            <Image source={require('../../assets/images/intro-3.png')} style={styles.introImg}/>
            <Text style={styles.introText}>THREE PULLEYS</Text>
          </Button>
        </View>
        </Content>
      </Container>
    );
  }
}
