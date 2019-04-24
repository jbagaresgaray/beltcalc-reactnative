import React from "react";
import { Image } from "react-native";
import {
  Container,
  ListItem,
  List,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  Text,
  Footer,
  Form,
  Item,
  Input,
  Label
} from "native-base";

import theme from "../../assets/styles-css";
import styles from "./threepulley.styles";

export default class StepOneThree extends React.Component {
  render() {
    const header = "../../assets/images/vbeltcalc-logo.png";
    const pic1 = "../../assets/images/3p-01.png";

    return (
      <Container>
        <Header style={theme.toolbarBackground} androidStatusBarColor="#000000">
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon style={theme.lightColor} name="arrow-back" />
            </Button>
          </Left>
          <Body style={{ flex: 1 }}>
            <Image
              resizeMode={"cover"}
              source={require(header)}
              style={theme.headerLogo}
            />
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>
        <Content>
          <List>
            <ListItem style={theme.cream}>
              <Body>
                <Text style={[theme.textOrange, theme.textCenter]}>
                  STEP ONE
                </Text>
                <Text note style={[theme.textCenter, theme.textBlue]}>
                  Adjust belt tensioner to center of travel
                </Text>
              </Body>
            </ListItem>
            <ListItem>
              <Image
                resizeMode="contain"
                source={require(pic1)}
                style={{ width: "100%", height: 200 }}
              />
            </ListItem>
          </List>
        </Content>
        <Footer
          style={[
            theme.toolbarBackground,
            theme.paddingLeft,
            theme.paddingRight
          ]}
        >
          <Left style={{ flex: 1 }}>
            <Button
              style={theme.footerBtn}
              small
              onPress={() => this.props.navigation.goBack()}
            >
              <Text>Previous</Text>
            </Button>
          </Left>
          <Body style={{ flex: 1 }}>
            <Title>&nbsp;</Title>
          </Body>
          <Right style={{ flex: 1 }}>
            <Button
              style={theme.footerBtn}
              small
              onPress={() => this.props.navigation.push("ThreeTwoPulley")}
            >
              <Text>Next</Text>
            </Button>
          </Right>
        </Footer>
      </Container>
    );
  }
}
