/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import Input from '../common/Input';

const Wrapper = styled.View`
  /* display: flex; */
  background-color: red;
  height: 300px;
`;

class LoginForm extends Component {

  state = { text: '' };

  render() {
    return (
      <Wrapper>
        <Input value={this.state.text}/>
      </Wrapper>
    );
  }
}

export default LoginForm;
