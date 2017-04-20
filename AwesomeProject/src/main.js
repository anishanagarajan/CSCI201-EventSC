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

export default class Main extends Component {
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
            onPress={() => this.onProfilePressed() }
            style={styles.buttonsContainer}><Text style={styles.button}>Profile</Text></TouchableOpacity>
            
            <TouchableOpacity
            onPress={() => Actions.post()}
            style={styles.buttonsContainer}><Text style={styles.button}>Post</Text></TouchableOpacity>
            
            <TouchableOpacity
            onPress={() => Actions.map()}
            style={styles.buttonsContainer}><Text style={styles.button}>Map</Text></TouchableOpacity>
            
            <TouchableOpacity
            onPress={() => Actions.search({anisha:"anisha"})}
            style={styles.buttonsContainer}><Text style={styles.button}>Search</Text></TouchableOpacity>
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
                                 button: {
                                 color: '#FFF',
                                 textAlign: 'center',
                                 fontSize: 20,
                                 },
                                 
                                 
  });

module.exports = Main;
