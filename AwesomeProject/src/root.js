/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  View,
    TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Root extends Component {
  render() {
    return (
      <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>EventSC</Text>
            </View>
            <View style={styles.optionsContainer}>
                <TouchableOpacity
            onPress={() => Actions.login()}
                    style={styles.buttonsContainer}><Text style={styles.button}>Login</Text></TouchableOpacity>
                <TouchableOpacity
            onPress={() => Actions.signup()}
            style={styles.buttonsContainer}><Text style={styles.button}>Sign Up</Text></TouchableOpacity>
                <TouchableOpacity
            onPress={() => Actions.mainGuest()}
            style={styles.buttonsContainer}><Text style={styles.button}>Continue as Guest</Text></TouchableOpacity>
            </View>
     </View>

            
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BD2031',
  },
                                 title: {
                                 color: '#DAA520',
                                 fontSize: 50,
                                 
                                 },
                                 optionsContainer: {
                                 padding: 20,
                                 },
                                 buttonsContainer: {
                                    backgroundColor: '#DAA520',
                                 padding: 10,
                                 margin: 15,
                                 
                                 },
                                 button: {
                                    color: '#FFF',
                                    textAlign: 'center',
                                 fontSize: 20,
                                 padding: 5,
                                 },
                                
                                 
                                 
  });

module.exports = Root;
