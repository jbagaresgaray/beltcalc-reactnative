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
import styles from "./twopulley.styles";

export default class StepTwoCompute extends React.Component {
  render() {
    const header = "../../assets/images/vbeltcalc-logo.png";
    const pic1 = "../../assets/images/2p-05.png";

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
          <Right style={{ flex: 1 }}>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Drawer")}
            >
              <Icon style={theme.lightColor} name="home" />
            </Button>
          </Right>
        </Header>
        <Content>
          <Form>
            <List>
              <ListItem style={theme.cream}>
                <Body>
                  <Text style={[theme.textOrange, theme.textCenter]}>
                    STEP FIVE
                  </Text>
                  <Text style={[theme.textOrange, theme.textCenter]}>
                    (Calculated Size)
                  </Text>
                  <Text note style={[theme.textCenter, theme.textBlue]}>
                    Check the values and adjust if necessary. Calculate to
                    obtain approximate belt length
                  </Text>
                </Body>
              </ListItem>
              <ListItem>
                <Image
                  source={require(pic1)}
                  style={{ width: "100%", height: 200 }}
                />
              </ListItem>
              <ListItem itemDivider style={theme.cream}>
                <Text small>Distance Between Pulleys</Text>
              </ListItem>
              <Item inlineLabel style={theme.paddingLeft}>
                <Label>Value:</Label>
                <Input placeholder="0" keyboardType="numeric" />
                <Right>
                  <Text note style={theme.paddingRight}>
                    in.
                  </Text>
                </Right>
              </Item>
              <ListItem itemDivider style={theme.cream}>
                <Text small>A's Outside Diameter</Text>
              </ListItem>
              <Item inlineLabel style={theme.paddingLeft}>
                <Label>Value:</Label>
                <Input placeholder="0" keyboardType="numeric" />
                <Right>
                  <Text note style={theme.paddingRight}>
                    in.
                  </Text>
                </Right>
              </Item>
              <ListItem itemDivider style={theme.cream}>
                <Text small>B's Outside Diameter</Text>
              </ListItem>
              <Item inlineLabel style={theme.paddingLeft}>
                <Label>Value:</Label>
                <Input placeholder="0" keyboardType="numeric" />
                <Right>
                  <Text note style={theme.paddingRight}>
                    in.
                  </Text>
                </Right>
              </Item>
              <ListItem itemDivider style={theme.cream}>
                <Text small>Belt Length</Text>
              </ListItem>
              <Item inlineLabel style={theme.paddingLeft}>
                <Label>Value:</Label>
                <Input placeholder="0" keyboardType="numeric" />
                <Right>
                  <Text note style={theme.paddingRight}>
                    in.
                  </Text>
                </Right>
              </Item>
            </List>
          </Form>
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
              warning
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
            <Button warning small>
              <Text>Re-Calculate</Text>
            </Button>
          </Right>
        </Footer>
      </Container>
    );
  }
}
