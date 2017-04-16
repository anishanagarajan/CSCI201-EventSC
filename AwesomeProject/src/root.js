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
            onPress={() => Actions.main()}
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
    backgroundColor: '#3498db',
  },
                                 title: {
                                 color: '#FFF',
                                 fontSize: 30,
                                 
                                 },
                                 optionsContainer: {
                                 padding: 20,
                                 },
                                 buttonsContainer: {
                                    backgroundColor: '#2980b9',
                                 padding: 10,
                                 margin: 15,
                                 
                                 },
                                 button: {
                                    color: '#FFF',
                                    textAlign: 'center',
                                 padding: 5,
                                 },
                                
                                 
                                 
  });

module.exports = Root;
