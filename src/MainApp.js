import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MainApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Text style={styles.logo}>
          Logo
        </Text>
        <View style={styles.subContainerTabs}>
          <Text style={styles.tabSearch}>
            Search
          </Text>
          <Text style={styles.tabManage}>
            Manage
          </Text>
        </View>
      </View>
      <View style={styles.containerMiddle}>
        <View style={styles.subContainerMiddleSearch}>
          <View style={styles.searchTop}>
            <Text style={styles.searchTopText}>
              Search List
            </Text>
          </View>
          <View style={styles.searchBottom}>
            <Text style={styles.searchBottomText}>
              Search
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <Text style={styles.searchAdvanced}>
          Advanced Search
        </Text>
      </View>
    </View>
  );
};

export default MainApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between', // flex-end
    alignItems: 'center', // flex-start
    backgroundColor: 'white',
  },
  containerTop: {
    flex: 1,
    flexDirection: 'row',
  },
  logo: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
    backgroundColor: 'red'
  },
  subContainerTabs: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
    backgroundColor: 'white'
  },
  tabSearch: {
    flex: 3,
    textAlign: 'center',
    color: '#333333',
    backgroundColor: 'steelblue',
    margin: 3,
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 4,
    borderColor: 'black'
  },
  tabManage: {
    flex: 3,
    textAlign: 'center',
    color: '#333333',
    backgroundColor: 'white',
    margin: 3,
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 4,
    borderColor: 'black'
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
  searchTopText: {
    flex: 3,
    textAlign: 'center',
    alignItems: 'center',
    color: '#333333',
    backgroundColor: 'steelblue',
    margin: 10
  },
  searchBottomText: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    color: '#333333',
    backgroundColor: 'white',
    margin: 10
  },
  containerBottom: {
    flex: 1,
    flexDirection: 'row'
  },
  searchAdvanced: {
    flex: 1,
    textAlign: 'center',
    color: '#333333',
    backgroundColor: 'yellow',
    margin: 20
  }
});
