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
import * as async from "async";

import { getLocalStorage } from "../../services/storage";

import theme from "../../assets/styles-css";
import styles from "./twopulley.styles";

export default class StepTwoCompute extends React.Component {
  state = {
    pulleyCenter: 0,
    largeDiameter: 0,
    smallDiameter: 0,
    beltLength: 0,
    measuringUnits: "",
    recal: false
  };

  componentDidMount() {
    async.parallel(
      [
        callback => {
          getLocalStorage("isMeasure").then(val => {
            console.log("measuringUnits: ", val);
            this.setState({ measuringUnits: val });
            callback();
          });
        },
        callback => {
          getLocalStorage("pulleyCenter").then(val => {
            console.log("pulleyCenter: ", val);
            if (val) {
              this.setState({ pulleyCenter: val });
            }
            callback();
          });
        },
        callback => {
          getLocalStorage("largeDiameter").then(val => {
            console.log("largeDiameter: ", val);
            if (val) {
              this.setState({ largeDiameter: val });
            }
            callback();
          });
        },
        callback => {
          getLocalStorage("smallDiameter").then(val => {
            console.log("smallDiameter: ", val);
            if (val) {
              this.setState({ smallDiameter: val });
            }
            callback();
          });
        }
      ],
      () => {
        this.calculateResult();
      }
    );

    const recal = this.props.navigation.getParam("recal", false);
    this.setState({ recal: recal });
  }

  pulleyCenterChange(value) {
    this.setState({ pulleyCenter: value });
  }

  largeDiameterChange(value) {
    this.setState({ largeDiameter: value });
  }

  smallDiameterChange(value) {
    this.setState({ smallDiameter: value });
  }

  calculateResult() {
    const totalPulleyCenter = Number((this.state.pulleyCenter * 2).toFixed(4));
    const totalLargeDiameter = Number(
      ((3.146 * this.state.largeDiameter) / 2).toFixed(4)
    );
    const totalSmallDiameter = Number(
      ((3.146 * this.state.smallDiameter) / 2).toFixed(4)
    );

    console.log(":======================: ", this.measuringUnits);
    console.log("center: ", totalPulleyCenter);
    console.log("large: ", totalLargeDiameter);
    console.log("small: ", totalSmallDiameter);

    const sumTotal =
      totalPulleyCenter + totalLargeDiameter + totalSmallDiameter;
    console.log("allTotal: ", sumTotal);

    if (this.state.measuringUnits == "standard") {
      let total = Number((sumTotal - 0.125).toFixed(4));
      total = Number(total.toFixed(3));

      console.log("BeltLength 1: ", total);
      console.log(":======================:");
      this.setState({ beltLength: total });
    } else {
      let total = Number((sumTotal - 0.3175).toFixed(4));
      total = Number(total.toFixed(3));

      console.log("BeltLength 2: ", total);
      console.log(":======================:");
      this.setState({ beltLength: total });
    }
  }

  customFooter() {
    if (!this.state.recal) {
      return (
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
              onPress={() => this.calculateResult()}
            >
              <Text>Re-Calculate</Text>
            </Button>
          </Right>
        </Footer>
      );
    } else {
      return (
        <Footer
          style={[
            theme.toolbarBackground,
            theme.paddingLeft,
            theme.paddingRight
          ]}
        >
          <Body style={{ flex: 1 }}>
            <Button
              style={theme.footerBtn}
              full
              onPress={() => this.calculateResult()}
            >
              <Text style={theme.lightColor}>Re-Calculate</Text>
            </Button>
          </Body>
        </Footer>
      );
    }
  }

  render() {
    const header = "../../assets/images/vbeltcalc-logo.png";
    const pic1 = "../../assets/images/2p-05.png";
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
                  resizeMode="contain"
                  source={require(pic1)}
                  style={{ width: "100%", height: 200 }}
                />
              </ListItem>
              <ListItem itemDivider style={theme.cream}>
                <Text small>Distance Between Pulleys</Text>
              </ListItem>
              <Item inlineLabel style={theme.paddingLeft}>
                <Label>Value:</Label>
                <Input
                  placeholder="0"
                  keyboardType="numeric"
                  value={`${this.state.pulleyCenter}`}
                  onChangeText={inputValue =>
                    this.pulleyCenterChange(inputValue)
                  }
                />
                <Right>
                  <Text note style={theme.paddingRight}>
                    {measuringUnits}
                  </Text>
                </Right>
              </Item>
              <ListItem itemDivider style={theme.cream}>
                <Text small>A's Outside Diameter</Text>
              </ListItem>
              <Item inlineLabel style={theme.paddingLeft}>
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
              <ListItem itemDivider style={theme.cream}>
                <Text small>B's Outside Diameter</Text>
              </ListItem>
              <Item inlineLabel style={theme.paddingLeft}>
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
              <ListItem itemDivider style={theme.cream}>
                <Text small>Belt Length</Text>
              </ListItem>
              <Item inlineLabel style={theme.paddingLeft}>
                <Label>Total:</Label>
                <Input
                  style={theme.textBlue}
                  placeholder="0"
                  keyboardType="numeric"
                  value={`${this.state.beltLength}`}
                  disabled
                />
                <Right>
                  <Text note style={theme.paddingRight}>
                    {measuringUnits}
                  </Text>
                </Right>
              </Item>
            </List>
          </Form>
        </Content>
        {this.customFooter()}
      </Container>
    );
  }
}
