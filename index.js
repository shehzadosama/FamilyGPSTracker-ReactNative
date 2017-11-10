/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './containers/App';
import store from './store';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';


var config = {
    apiKey: "AIzaSyBWCfnaxK4Vt-dl3H0_qMfpZecXoM1SoRQ",
    authDomain: "familytracker-71ef3.firebaseapp.com",
    databaseURL: "https://familytracker-71ef3.firebaseio.com",
    projectId: "familytracker-71ef3",
    storageBucket: "familytracker-71ef3.appspot.com",
    messagingSenderId: "662656276945"
  };
  firebase.initializeApp(config);

export default class FamilyTracking extends Component {
  render() {
    return (
      <Provider store={store}>

        <App />

      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FamilyTracking', () => FamilyTracking);
