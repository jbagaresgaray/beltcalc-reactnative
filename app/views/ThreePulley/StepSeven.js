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
import styles from "./threepulley.styles";

export default class StepSevenThree extends React.Component {
  state = {
    smallDiameter: 0,
    measuringUnits: ""
  };

  componentDidMount() {
    getLocalStorage("smallDiameter").then(val => {
      console.log("smallDiameter: ", val);
      if (val) {
        this.setState({ smallDiameter: val });
      }
    });

    getLocalStorage("isMeasure").then(val => {
      console.log("measuringUnits: ", val);
      this.setState({ measuringUnits: val });
    });
  }

  smallDiameterChange(value) {
    this.setState({ smallDiameter: value });
  }

  nextPage() {
    setLocalStorage("smallDiameter", this.state.smallDiameter);
    this.props.navigation.push("ThreeComputePulley");
  }

  render() {
    const header = "../../assets/images/vbeltcalc-logo.png";
    const pic1 = "../../assets/images/3p-07.png";
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
                  STEP SEVEN
                </Text>
                <Text note style={[theme.textCenter, theme.textBlue]}>
                  Measure pulley C’s outside diameter
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
              <Text style={[theme.textBlue, theme.textCenter]} note>
                Pully C's Outside Diameter
              </Text>
            </ListItem>
            <Form>
              <Item inlineLabel>
                <Label>Value:</Label>
                <Input
                  placeholder="0"
                  keyboardType="numeric"
                  value={`${this.state.smallDiameter}`}
                  onChangeText={inputValue =>
                    this.smallDiameterChange(inputValue)
                  }
                />
                <Right>
                  <Text note style={theme.paddingRight}>
                    {measuringUnits}
                  </Text>
                </Right>
              </Item>
            </Form>
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
