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

export default class StepTwoTwo extends React.Component {
  state = {
    pulleyCenter: 0,
    measuringUnits: ""
  };

  componentDidMount() {
    getLocalStorage("pulleyCenter").then(val => {
      console.log("pulleyCenter: ", val);
      if (val) {
        this.setState({ pulleyCenter: val });
      }
    });

    getLocalStorage("isMeasure").then(val => {
      console.log("measuringUnits: ", val);
      this.setState({ measuringUnits: val });
    });
  }

  pulleyCenterChange(value) {
    this.setState({ pulleyCenter: value });
  }

  nextPage() {
    setLocalStorage("pulleyCenter", this.state.pulleyCenter);
    this.props.navigation.push("TwoThreePulley");
  }

  render() {
    const header = "../../assets/images/vbeltcalc-logo.png";
    const pic1 = "../../assets/images/2p-02.png";
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
                  STEP TWO
                </Text>
                <Text note style={[theme.textCenter, theme.textBlue]}>
                  Measure center-to-center distance between pulley shafts
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
              <Text note>Distance Between Pulleys</Text>
            </ListItem>
          </List>
          <Form>
            <Item inlineLabel>
              <Label>Value:</Label>
              <Input
                placeholder="0"
                keyboardType="numeric"
                value={`${this.state.pulleyCenter}`}
                onChangeText={inputValue => this.pulleyCenterChange(inputValue)}
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
