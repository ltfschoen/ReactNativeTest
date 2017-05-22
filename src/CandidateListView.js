import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  Image,
  Text,
  Button
} from 'react-native';
import data from '../data/candidateList.json';

import Icon from 'react-native-vector-icons/FontAwesome';
const iconPrice = (<Icon name="dollar" size={30} color="#FFFFFF" />);
const iconDistance = (<Icon name="map-signs" size={30} color="#999999" />);
const iconCertificate = (<Icon name="certificate" size={30} color="#DD0000" />);
const iconNoCertificate = (<Icon name="certificate" size={30} color="#CCCCCC" />);
const iconOnline = (<Icon name="lightbulb-o" size={30} color="#22FF22" />);
const iconOffline = (<Icon name="lightbulb-o" size={30} color="#CCCCCC" />);
const iconRecommendations = (<Icon name="cutlery" size={30} color="#22FF22" />);
const iconCriminal = (<Icon name="check-circle" size={30} color="#22FF22" />);
const iconNoCriminal = (<Icon name="exclamation-circle" size={30} color="#CCCCCC" />);
const iconCompletion = (<Icon name="handshake-o" size={30} color="#22FF22" />);
const iconVehicle = (<Icon name="car" size={30} color="#00FF00" />);
const iconPercentage = (<Icon name="percent" size={30} color="#999999" />);

const rumedgeColour = "#f2142b";

export default class CandidateListView extends Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }

  renderRow(record) {
    return (
      <View style={styles.row}>
        <View style={styles.colFirst}>
          <Text style={styles.itemsFirst}>{record.online_status == "online" ? iconOnline : iconOffline} {record.name_initials}</Text>
          <Text style={styles.itemsFirst}>{iconPrice} {record.rate_hourly}</Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.items}>{iconDistance} {record.distance_away}km</Text>
          <Text style={styles.items}>{record.vehicle_has ? iconVehicle : null}</Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.items}>{record.certificate_names.length ? iconCertificate : iconNoCertificate} {record.certificate_names.length}x</Text>
          {record.criminal_check == "passed" ? iconCriminal : iconNoCriminal}
          <Text style={styles.items}>{record.completion_pct == 100 ? iconCompletion : iconPercentage} {record.completion_pct == 100 ? null : record.completion_pct}</Text>
        </View>
        <View style={styles.col}>
          <Button
            style={styles.buttonHireMe}
            onPress={() => navigate('', {})}
            title="Hire"
          />
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Candidates</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    backgroundColor: '#0f1b29',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    paddingTop: 10,
    textAlign: 'center',
  },
  row: {
    borderColor: '#f1f1f1',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  colFirst: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#000',
    borderColor: '#000',
    borderRadius: 45,
    borderWidth: 0,
    justifyContent: 'center',
    width: 50,
    padding: 5,
    marginRight: 10
  },
  col: {
    flex: 1,
    flexDirection: 'column',
  },
  icon: {
    tintColor: '#fff',
    height: 22,
    width: 22,
  },
  itemsFirst: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  items: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  buttonHireMe: {
    flex: 1
  }
});
