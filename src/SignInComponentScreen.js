import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import TouchableItem from "../node_modules/react-navigation/lib-rn/views/TouchableItem";
const iconSignIn = (<Icon name="sign-in" size={30} color="#FFFFFF" />);

const playIcon = require('../images/play.png');
const volumeIcon = require('../images/sound.png');
const hdIcon = require('../images/hd-sign.png');
const fullScreenIcon = require('../images/full-screen.png');
// TODO - Replace with AWS S3 image
const remoteImageLogo = { uri:'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAilAAAAJGEyYWZiNDFkLThmZDItNDIzNS04MzViLWVhN2NkZGEyYzliYg.png' };

export default class SignInComponentScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mobile: '123' };
  }
  static navigationOptions = {
    title: 'Sign In',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.containerTop}>
            <Image source={remoteImageLogo} style={styles.fullscreen}>
              <View style={styles.containerVideo}>
                <Image source={playIcon} style={styles.icon} />
                <Image source={volumeIcon} style={styles.icon} />
                <View style={styles.progress}>
                  <View style={styles.progressBar} />
                </View>
                <Image source={hdIcon} style={styles.icon} />
                <Image source={fullScreenIcon} style={styles.icon} />
              </View>
            </Image>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.containerMiddle}>
            <View style={styles.subContainerMiddle}>
              <View style={styles.mobileTop}>
                <Text style={styles.mobileTopText}>
                  Enter your mobile number
                </Text>
              </View>
              <View style={styles.mobileBottom}>
                <TextInput
                  style={styles.mobileBottomTextInputMobilePrefix}
                  editable={true}
                  maxLength={10}
                  autoCorrect={false}
                  autoFocus={false}
                  keyboardType={'phone-pad'}
                  placeholder={'+61'}
                  placeholderTextColor={'#DDDDDD'}
                  returnKeyType={'next'}
                />
                <TextInput
                  style={styles.mobileBottomTextInputMobileSuffix}
                  editable={true}
                  maxLength={50}
                  autoCorrect={false}
                  autoFocus={true}
                  keyboardType={'phone-pad'}
                  placeholder={'04xx-xxx-xxx'}
                  placeholderTextColor={'#DDDDDD'}
                  returnKeyType={'done'}
                  onChangeText={(mobile) => this.setState({mobile})}
                  value={this.state.mobile}
                />
                <TouchableHighlight
                  style={styles.btnClickContain}
                  onPress={() => navigate('SearchComponent', { mobile: this.state.mobile })}
                  underlayColor='#042417'>
                  <View style={styles.btnContainer}>
                    {iconSignIn}
                    <Text style={styles.btnText}></Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.containerBottom}>
          <View style={styles.subContainerBottom}>
            <Text style={styles.signUpText}>
              Or sign up
            </Text>
            <TouchableHighlight
              style={styles.btnClickContain}
              onPress={() => navigate('SearchComponent', {})}
              underlayColor='#042417'>
              <View style={styles.btnContainer}>
                <Text style={styles.btnText}>Next</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  containerTop: {
    flex: 2,
    flexDirection: 'row',
  },
  fullscreen: {
    flex: 1,
  },
  containerVideo: {
    position: 'absolute',
    backgroundColor: '#202020',
    borderRadius: 5,
    flexDirection: 'row',
    height: 50,
    padding: 5,
    paddingTop: 16,
    bottom: 30,
    right: 10,
    left: 10,
    borderWidth: 1,
    borderColor: '#303030',
  },
  icon: {
    tintColor: '#fff',
    height: 16,
    width: 16,
    marginLeft: 5,
    marginRight: 5,
  },
  progress: {
    backgroundColor: '#000',
    borderRadius: 7,
    flex: 1,
    height: 14,
    margin: 10,
    marginTop: 2,
  },
  progressBar: {
    backgroundColor: '#bf161c',
    borderRadius: 5,
    height: 10,
    margin: 2,
    width: 80,
  },
  containerMiddle: {
    flex: 1,
    flexDirection: 'row',
  },
  subContainerMiddle: {
    flex: 1,
    flexDirection: 'column',
    margin: 20,
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 4,
    borderColor: 'black'
  },
  mobileTop: {
    flex: 1,
    flexDirection: 'row'
  },
  mobileTopText: {
    flex: 1,
    textAlign: 'left',
    alignItems: 'stretch',
    color: '#333333',
    backgroundColor: 'white',
    margin: 10
  },
  mobileBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
  mobileBottomTextInputMobilePrefix: {
    flex: 1,
    height: 30,
    backgroundColor: '#AAAAAA',
    margin: 5
  },
  mobileBottomTextInputMobileSuffix: {
    flex: 2,
    height: 30,
    backgroundColor: '#AAAAAA',
    margin: 5
  },
  containerBottom: {
    flex: 1,
    flexDirection: 'row'
  },
  subContainerBottom: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 4,
    borderColor: 'black'
  },
  signUpText: {
    flex: 1,
    textAlign: 'left',
    alignItems: 'stretch',
    color: '#333333',
    backgroundColor: 'white',
    margin: 10
  },
  btnClickContain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    backgroundColor: '#009D6E',
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    borderRadius: 10,
  },
  btnIcon: {
    height: 25,
    width: 25,
  },
  btnText: {
    fontSize: 18,
    color: '#FAFAFA',
    marginLeft: 10,
    marginTop: 2,
  }
});
