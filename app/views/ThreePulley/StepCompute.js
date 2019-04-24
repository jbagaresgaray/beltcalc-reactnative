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
import { setLocalStorage, getLocalStorage } from "../../services/storage";

import theme from "../../assets/styles-css";
import styles from "./threepulley.styles";

export default class StepThreeCompute extends React.Component {
  state = {
    pulleyCenter1: 0,
    pulleyCenter2: 0,
    pulleyCenter3: 0,
    largeDiameter: 0,
    mediumDiameter: 0,
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
          getLocalStorage("pulleyCenter1").then(val => {
            console.log("pulleyCenter1: ", val);
            if (val) {
              this.setState({ pulleyCenter1: val });
            }
            callback();
          });
        },
        callback => {
          getLocalStorage("pulleyCenter2").then(val => {
            console.log("pulleyCenter2: ", val);
            if (val) {
              this.setState({ pulleyCenter2: val });
            }
            callback();
          });
        },
        callback => {
          getLocalStorage("pulleyCenter3").then(val => {
            console.log("pulleyCenter3: ", val);
            if (val) {
              this.setState({ pulleyCenter3: val });
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
          getLocalStorage("mediumDiameter").then(val => {
            console.log("mediumDiameter: ", val);
            if (val) {
              this.setState({ mediumDiameter: val });
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

  pulleyCenterChange1(newValue) {
    this.setState({ pulleyCenter1: newValue });
  }

  pulleyCenterChange2(newValue) {
    this.setState({ pulleyCenter2: newValue });
  }

  pulleyCenterChange3(newValue) {
    this.setState({ pulleyCenter3: newValue });
  }

  largeDiameterChange(newValue) {
    this.setState({ largeDiameter: newValue });
  }

  mediumDiameterChange(newValue) {
    this.setState({ mediumDiameter: newValue });
  }

  smallDiameterChange(newValue) {
    this.setState({ smallDiameter: newValue });
  }

  calculateResult() {
    const totalPulleyCenter1 = Number(
      (this.state.pulleyCenter1 * 2).toFixed(4)
    );
    const totalPulleyCenter2 = Number(
      (this.state.pulleyCenter2 * 2).toFixed(4)
    );
    const totalPulleyCenter3 = Number(
      (this.state.pulleyCenter3 * 2).toFixed(4)
    );

    const totalLargeDiameter = Number(
      ((3.146 * this.state.largeDiameter) / 2).toFixed(4)
    );
    const totalMediumDiameter = Number(
      ((3.146 * this.state.mediumDiameter) / 2).toFixed(4)
    );
    const totalSmallDiameter = Number(
      ((3.146 * this.state.smallDiameter) / 2).toFixed(4)
    );

    console.log(":======================: ", this.measuringUnits);
    console.log("center1: ", totalPulleyCenter1);
    console.log("center2: ", totalPulleyCenter2);
    console.log("center3: ", totalPulleyCenter3);
    console.log(":======================: ");
    console.log("large: ", totalLargeDiameter);
    console.log("medium: ", totalMediumDiameter);
    console.log("small: ", totalSmallDiameter);

    const sumTotalCenter =
      totalPulleyCenter1 +
      totalPulleyCenter2 +
      totalPulleyCenter3 +
      (totalLargeDiameter + totalMediumDiameter + totalSmallDiameter);
    console.log("sumTotalCenter: ", sumTotalCenter);
    console.log(":======================:");

    if (this.state.measuringUnits == "standard") {
      let total = Number((sumTotalCenter - 0.125).toFixed(4));
      total = Number(total.toFixed(3));

      console.log("BeltLength 1: ", total);
      console.log(":======================:");
      this.setState({ beltLength: total });
    } else {
      let total = Number((sumTotalCenter - 0.3175).toFixed(4));
      total = Number(total.toFixed(3));

      console.log("BeltLength 1: ", total);
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
    const pic1 = "../../assets/images/3p-08.png";
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
                    STEP EIGHT
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
                <Text note>Distance Between Pulley A and Pulley B</Text>
              </ListItem>
              <Item inlineLabel style={theme.paddingLeft}>
                <Label>Value:</Label>
                <Input
                  placeholder="0"
                  keyboardType="numeric"
                  value={`${this.state.pulleyCenter1}`}
                  onChangeText={inputValue =>
                    this.pulleyCenterChange1(inputValue)
                  }
                />
                <Right>
                  <Text note style={theme.paddingRight}>
                    {measuringUnits}
                  </Text>
                </Right>
              </Item>
              <ListItem itemDivider style={theme.cream}>
                <Text note>Distance Between Pulley B and Pulley C</Text>
              </ListItem>
              <Item inlineLabel style={theme.paddingLeft}>
                <Label>Value:</Label>
                <Input
                  placeholder="0"
                  keyboardType="numeric"
                  value={`${this.state.pulleyCenter2}`}
                  onChangeText={inputValue =>
                    this.pulleyCenterChange2(inputValue)
                  }
                />
                <Right>
                  <Text note style={theme.paddingRight}>
                    {measuringUnits}
                  </Text>
                </Right>
              </Item>
              <ListItem itemDivider style={theme.cream}>
                <Text note>Distance Between Pulley C and Pulley A</Text>
              </ListItem>
              <Item inlineLabel style={theme.paddingLeft}>
                <Label>Value:</Label>
                <Input
                  placeholder="0"
                  keyboardType="numeric"
                  value={`${this.state.pulleyCenter3}`}
                  onChangeText={inputValue =>
                    this.pulleyCenterChange3(inputValue)
                  }
                />
                <Right>
                  <Text note style={theme.paddingRight}>
                    {measuringUnits}
                  </Text>
                </Right>
              </Item>
              <ListItem itemDivider style={theme.cream}>
                <Text note>Pulley A's Outside Diameter</Text>
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
                <Text note>Pulley B's Outside Diameter</Text>
              </ListItem>
              <Item inlineLabel style={theme.paddingLeft}>
                <Label>Value:</Label>
                <Input
                  placeholder="0"
                  keyboardType="numeric"
                  value={`${this.state.mediumDiameter}`}
                  onChangeText={inputValue =>
                    this.mediumDiameterChange(inputValue)
                  }
                />
                <Right>
                  <Text note style={theme.paddingRight}>
                    {measuringUnits}
                  </Text>
                </Right>
              </Item>
              <ListItem itemDivider style={theme.cream}>
                <Text note>Pulley C's Outside Diameter</Text>
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
                <Text note>Belt Length</Text>
              </ListItem>
              <Item inlineLabel style={theme.paddingLeft}>
                <Label>Value:</Label>
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
