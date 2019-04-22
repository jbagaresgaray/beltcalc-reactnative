import React from "react";
import { Image, View } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text } from "native-base";

import styles from "./home.style";
import theme from "../../assets/styles-css";

export default class HomeScreen extends React.Component {
  render() {
    const pic1 = '../../assets/images/intro-2.png';
    const pic2 = '../../assets/images/intro-3.png';
    const header = '../../assets/images/vbeltcalc-logo.png';
    

    return (
      <Container style={[theme.textCenter]}>
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
        <Content padder style={[styles.padding,theme.blue]}>
        <Text h4 style={[theme.selfAlignCenter, theme.alignContentCenter, theme.lightColor, theme.paddingTop]}>Choose the number of pulleys</Text>
        <View style={[styles.intro]}>
          <Button full light
            style={styles.introBtn}
            onPress={() => this.props.navigation.push("TwoPulley")}>
            <Image source={require(pic1)} style={styles.introImg}/>
            <Text style={styles.introText}>TWO PULLEYS</Text>
          </Button>
          <Button full light
            style={styles.introBtn}
            onPress={() => this.props.navigation.push("ThreePulley")}>
            <Image source={require(pic2)} style={styles.introImg}/>
            <Text style={styles.introText}>THREE PULLEYS</Text>
          </Button>
        </View>
        </Content>
      </Container>
    );
  }
}
