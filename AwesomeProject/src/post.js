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
    TouchableOpacity,
    TextInput
} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

export default class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>EventSC</Text>
            </View>
            
            <View style={styles.formContainer}>
                <TextInput style={styles.input}
                    placeholder="username"
                    placeholderTextColor="rgba(255,255,255,0.7)"
            
                />
            <TextInput
            placeholder="password"
            placeholderTextColor="rgba(255,255,255,0.7)"
            secureTextEntry
            style={styles.input}
            />
            </View>
            
            <View style={styles.optionsContainer}>
               <TouchableOpacity style={styles.buttonsContainer}><Text style={styles.button}>Login</Text></TouchableOpacity>
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
                                 
                                 
                                 },
                                 formContainer: {
                                 margin: 20,
                                 },
                                 input: {
                                 height: 40,
                                 width: 300,
                                 backgroundColor: "rgba(255,255,255,0.2)",
                                 marginBottom: 20,
                                 color: '#FFF',
                                 paddingHorizontal: 10,
                                 },
                                 
                                
                                 
                                 
  });

module.exports = Post;
