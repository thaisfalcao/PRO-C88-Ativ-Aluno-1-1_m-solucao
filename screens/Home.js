import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>App Rastreador EEI</Text>
        </View>
        <TouchableOpacity style={styles.routeCard}>
          <Text style={styles.routeText}>Localização da EEI</Text>
          <Text style={styles.knowmore}>{"Saber mais -->"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.routeCard}>
          <Text style={styles.routeText}>Meteoros</Text>
          <Text style={styles.knowmore}>{"Saber mais -->"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.routeCard}>
          <Text style={styles.routeText}>Atualizações</Text>
          <Text style={styles.knowmore}>{"Saber mais -->"}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  routeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 75,
    textAlign: 'center'
  },
  knowmore: {
    paddingLeft: 20,
    color: 'red',
    fontSize: 15,
    marginTop: 55
  }
});
