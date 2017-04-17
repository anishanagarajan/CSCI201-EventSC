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

export default class MyEvents extends Component {
    constructor () {
        super();
        
        this.state = {
        fName: "FIRSTNAME",
        lName: "LASTNAME",
        username: "@username",
        
        }
    }
    
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.empty}></View>
            
            {/*state needs to be changed to props for networking*/}
            <View style={styles.titleContainer}>
            <Text style={styles.title}>{}</Text>
            </View>
            
            
            <View style={styles.optionsContainer}>
                <TouchableOpacity
                onPress={() => Actions.pastEvents()}
                style={styles.buttonsContainer}><Text style={styles.button}>My Events</Text></TouchableOpacity>
            
                <TouchableOpacity
                onPress={() => Actions.myEvents()}
                style={styles.buttonsContainer}><Text style={styles.button}>Upcoming Events</Text></TouchableOpacity>
            
                <TouchableOpacity
                onPress={() => Actions.upcomingEvents()}
                style={styles.buttonsContainer}><Text style={styles.button}>Past Events</Text></TouchableOpacity>
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
                                 empty: {
                                 height: 100,
                                 },
                                 title: {
                                 color: '#FFF',
                                 fontSize: 30,
                                 },
                                 subTitle: {
                                 color: '#FFF',
                                 fontSize: 20,
                                 },
                                 titleContainer: {
                                 flexDirection: 'column',
                                 alignItems: 'center',
                                 },
                                 optionsContainer: {
                                 padding: 20,
                                 },
                                 buttonsContainer: {
                                 width: 250,
                                 height: 85,
                                 backgroundColor: '#2980b9',
                                 padding: 10,
                                 margin: 25,
                                 },
                                 button: {
                                 padding: 15,
                                 alignSelf: 'center',
                                 fontSize: 25,
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

module.exports = MyEvents;
