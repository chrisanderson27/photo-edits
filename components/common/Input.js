import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const HeaderWrapper = styled.View`
  height: 90;
  padding-top: 30px;
  align-content: center;
  justify-content: center;
  alignItems: center;
  background-color: #F8F8F8;
  box-shadow: 0 0 1px #000000;
`;

// const InputWrapper = styled.Text`
// border: 1px solid black;
// margin: 10px;
// `;

const Input = ({ autoCorrect, onChangeText, value }) => (
  <TextInput style={{ height: 50, width: 20 }} autoCorrect={autoCorrect} onChangeText={onChangeText} value={value} />
);

export default Input;
