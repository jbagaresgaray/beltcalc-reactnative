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
import { setLocalStorage, getLocalStorage } from "../../services/storage";

import theme from "../../assets/styles-css";
import styles from "./twopulley.styles";

export default class StepThreeTwo extends React.Component {
  state = {
    largeDiameter: 0,
    measuringUnits: ""
  };

  componentDidMount() {
    getLocalStorage("largeDiameter").then(val => {
      console.log("largeDiameter: ", val);
      if (val) {
        this.setState({ largeDiameter: val });
      }
    });

    getLocalStorage("isMeasure").then(val => {
      console.log("measuringUnits: ", val);
      this.setState({ measuringUnits: val });
    });
  }

  largeDiameterChange(value) {
    this.setState({ largeDiameter: value });
  }

  nextPage() {
    setLocalStorage("largeDiameter", this.state.largeDiameter);
    this.props.navigation.push("TwoFourPulley");
  }

  render() {
    const header = "../../assets/images/vbeltcalc-logo.png";
    const pic1 = "../../assets/images/2p-03.png";
    const measuringUnits =
      this.state.measuringUnits === "standard" ? "in." : "cm.";

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
                  STEP THREE
                </Text>
                <Text note style={[theme.textCenter, theme.textBlue]}>
                  Measure pulley A's outside diameter
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
            <ListItem itemDivider style={theme.cream}>
              <Text note>A's Outside Diameter</Text>
            </ListItem>
          </List>
          <Form>
            <Item inlineLabel>
              <Label>Value:</Label>
              <Input
                placeholder="0"
                keyboardType="numeric"
                value={`${this.state.largeDiameter}`}
                onChangeText={inputValue =>
                  this.largeDiameterChange(inputValue)
                }
              />
              <Right>
                <Text note style={theme.paddingRight}>
                  {measuringUnits}
                </Text>
              </Right>
            </Item>
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
              onPress={() => this.nextPage()}
            >
              <Text>Next</Text>
            </Button>
          </Right>
        </Footer>
      </Container>
    );
  }
}
