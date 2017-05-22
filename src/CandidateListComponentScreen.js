import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';
import CandidateListView from './CandidateListView';

const remoteImageLogo = { uri:'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAilAAAAJGEyYWZiNDFkLThmZDItNDIzNS04MzViLWVhN2NkZGEyYzliYg.png' };

export default class CandidateListComponentScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Candidate List',
    criteria: `${navigation.state.params.criteria}`,
  });

  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    console.log(`Selected criteria: ${params.criteria}`);
    return (
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <Image source={remoteImageLogo} style={styles.logo} />
          <View style={styles.subContainerTabs}>
            <Button
              style={styles.buttonSearch}
              onPress={() => navigate('', {})}
              title="Search"
            />
            <Button
              style={styles.buttonManage}
              onPress={() => navigate('', {})}
              title="Manage"
            />
          </View>
        </View>
        <View style={styles.containerMiddle}>
          <View style={styles.subContainerMiddleSearch}>
            <View style={styles.candidateList}>
              <CandidateListView />
            </View>
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
    flex: 1,
    flexDirection: 'row',
  },
  logo: {
    flex: 1,
    flexDirection: 'row',
    width: 50,
    height: 100,
    margin: 20
  },
  subContainerTabs: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
    backgroundColor: 'white'
  },
  buttonSearch: {
    flex: 3
  },
  buttonManage: {
    flex: 3
  },
  containerMiddle: {
    flex: 3,
    flexDirection: 'row',
  },
  subContainerMiddleSearch: {
    flex: 1,
    flexDirection: 'column',
    margin: 20,
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 4,
    borderColor: 'black'
  },
  candidateList: {
    flex: 3,
    flexDirection: 'row'
  },
});
