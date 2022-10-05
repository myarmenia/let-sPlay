import React, { Component } from 'react';
import { ListItem, Container, Content, Header, Text, Radio } from 'native-base';



export default class CustomRadioButton extends Component {
  constructor() {
    super();
    this.state = {
      itemSelected: '',
    };
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <ListItem>
            <Radio
              onPress={() => this.setState({ itemSelected: 'one' })}
              selected={this.state.itemSelected == 'one'}
            />
            <Text>One</Text>
          </ListItem>
          <ListItem>
            <Radio
              onPress={() => this.setState({ itemSelected: 'two' })}
              selected={this.state.itemSelected == 'two'}
            />
            <Text>Two</Text>
          </ListItem>
        </Content>
      </Container>
    );
  }
}