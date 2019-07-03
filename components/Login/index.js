import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import Header from '../common/Header';
import LoginForm from '../LoginForm';

const index = () => {
  return (
    <View>
      <Header title="Login" />
      <LoginForm />
    </View>
  );
};

export default index;
