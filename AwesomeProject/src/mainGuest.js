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

import {Actions} from 'react-native-router-flux';
import Search from './search.js';
import Profile from './profile.js';
import Post from './post.js';
import Map from './map.js';

export default class MainGuest extends Component {
    async onProfilePressed(){
        try{
            let response = await fetch('http://10.120.105.99:8080/FinalP/GeneralServlet', {
                                       method: 'POST',
                                       headers: {
                                       'Accept': 'application/json',
                                       'Content-Type': 'application/json',
                                       },
                                       body: JSON.stringify({
                                                            requestType: 'Profile',
                                                            })
                                       });
            let res = await response.text();
            console.log(res);
            Actions.profile({info:res});
            
        }catch(error){
            console.error(error);
        }
    }
    
    
  render() {
    return (
      <View style={styles.container}>
            <View style={styles.titleContainer}>
            <Text style={styles.title}>EventSC</Text>
            </View>
            
            <View style={styles.optionsContainer}>
            
            <TouchableOpacity
            onPress={() => Actions.map()}
            style={styles.buttonsContainer}><Text style={styles.button}>Map</Text></TouchableOpacity>
            
            <TouchableOpacity
            onPress={() => Actions.searchGuest()}
            style={styles.buttonsContainer}><Text style={styles.button}>Search</Text></TouchableOpacity>
            
            <TouchableOpacity
            onPress={() => Actions.signup()}
            style={styles.buttonsContainer}><Text style={styles.button}>Sign Up</Text></TouchableOpacity>
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

module.exports = MainGuest;