import React, { Component } from 'react';
import {
  StyleSheet,
  Picker,
  Text,
  View,
  Image,
  Button
} from 'react-native';
const remoteImageLogo = { uri:'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAilAAAAJGEyYWZiNDFkLThmZDItNDIzNS04MzViLWVhN2NkZGEyYzliYg.png' };

const Item = Picker.Item;

class SearchComponentScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCriteria: 'barista',
      mode: Picker.MODE_DIALOG
    };
  }
  static navigationOptions = ({ navigation }) => ({
    title: 'Search',
    mobile: `${navigation.state.params.mobile}`,
  });
  static title = '<Picker>';
  static description = 'Multiple options with either a dropdown menu or dialog.';

  changeMode = () => {
    const newMode = this.state.mode === Picker.MODE_DIALOG
      ? Picker.MODE_DROPDOWN
      : Picker.MODE_DIALOG;
    this.setState({mode: newMode});
  };

  onValueChange = (key: string, value: string) => {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
  };

  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    console.log(`User logged in: ${params.mobile}`);
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
            <View style={styles.searchTop}>
              <Picker
                style={styles.searchTopPicker}
                selectedValue={this.state.selectedCriteria}
                onValueChange={this.onValueChange.bind(this, 'selectedCriteria')}
                mode="dropdown"
                prompt="Pick one">
                <Item label="Barista" color="#000000" value="barista" />
                <Item label="Cook" color="#000000" value="cook" />
                <Item label="Bar Attendant" color="#000000" value="bar attendant" />
                <Item label="Kitchen Hand" color="#000000" value="kitchen hand" />
              </Picker>
            </View>
            <View style={styles.searchBottom}>
              <Button
                style={styles.buttonRummage}
                onPress={() => navigate('CandidateListComponent', { criteria: this.state.selectedCriteria })}
                title="Rummage"
              />
            </View>
          </View>
        </View>
        <View style={styles.containerBottom}>
          <Text style={styles.searchAdvanced}>
          </Text>
        </View>
      </View>
    );
  }
}

export default SearchComponentScreen;

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
  searchTop: {
    flex: 3,
    flexDirection: 'row'
  },
  searchBottom: {
    flex: 1,
    flexDirection: 'row'
  },
  searchTopPicker: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    margin: 10
  },
  buttonRummage: {
    flex: 1,
  },
  containerBottom: {
    flex: 1,
    flexDirection: 'row'
  },
  searchAdvanced: {
    flex: 1,
    textAlign: 'center',
    color: '#333333',
    backgroundColor: 'white',
    margin: 20
  }
});
