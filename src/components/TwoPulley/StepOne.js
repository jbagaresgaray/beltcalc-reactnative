import React from "react";
import { AppRegistry, Alert } from "react-native";
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button, Text,Footer } from "native-base";

import theme from "../../assets/styles-css";

export default class StepOneTwo extends React.Component {
  render() {
    return (
      <Container>
        <Header style={theme.toolbarBackground} androidStatusBarColor="#000000">
          <Body>
            <Title style={theme.lightColor}>Step One</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Icon active name="paper-plane" />
              <Text>Edit Screen 1</Text>
              <Right>
                <Icon name="close" />
              </Right>
            </CardItem>
          </Card>
          <Button full rounded primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("StepTwo")}>
            <Text>Next</Text>
          </Button>
        </Content>
        <Footer>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Footer</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Footer>
      </Container>
    );
  }
}
