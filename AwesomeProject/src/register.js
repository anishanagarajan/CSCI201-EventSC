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
  View,
    TouchableOpacity
} from 'react-native';

export default class Register extends Component {
  render() {
    return (
      <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>EventSC</Text>
            </View>
            <View style={styles.optionsContainer}>
                <TouchableOpacity style={styles.buttonsContainer}><Text style={styles.button}>Login</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttonsContainer}><Text style={styles.button}>Sign Up</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttonsContainer}><Text style={styles.button}>Continue as Guest</Text></TouchableOpacity>
            </View>
     </View>
            
            <Register />
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
