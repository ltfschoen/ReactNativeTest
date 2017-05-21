import React, { Component } from 'react';
import {
  StackNavigator
} from 'react-navigation';
import SignInComponentScreen from './SignInComponentScreen';
import SearchComponentScreen from './SearchComponentScreen';

const MainApp = StackNavigator({
  SignInComponent: {screen: SignInComponentScreen},
  SearchComponent: {screen: SearchComponentScreen}
});

export default MainApp;