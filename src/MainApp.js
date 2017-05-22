import React, { Component } from 'react';
import {
  StackNavigator
} from 'react-navigation';
import SignInComponentScreen from './SignInComponentScreen';
import SearchComponentScreen from './SearchComponentScreen';
import CandidateListComponentScreen from './CandidateListComponentScreen';

const MainApp = StackNavigator({
  SignInComponent: {screen: SignInComponentScreen},
  SearchComponent: {screen: SearchComponentScreen},
  CandidateListComponent: {screen: CandidateListComponentScreen},
});
export default MainApp;