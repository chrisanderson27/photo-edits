import React from 'react';
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

const TextWrapper = styled.Text`
color: black;
font-size: 20px;
`;

const Header = ({ title }) => (
  <HeaderWrapper>
    <TextWrapper>{title}</TextWrapper>
  </HeaderWrapper>
);

export default Header;
