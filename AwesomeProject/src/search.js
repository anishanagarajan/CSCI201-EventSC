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

export default class Search extends Component {
    
    render() {
    return (
      <View style={styles.container}>
            {/*Wenqi, add the search bar and checkbox buttons here */}

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Results: </Text>
            </View>
            
            {/* add logic to distingish which onPress() will be triggered (profiles or events) */}
            {/* how to pass arraylist of events with user info?...*/}
            <View style={styles.resultsContainer}>
            <TouchableOpacity
            onPress={() => Actions.profile({
                                           fName:"hello world",
                                           lName: "",
                                           username: ""
                                           })}
            
            style={styles.buttonsContainer}>
            <Text style={styles.button}>EVENT NAME</Text>
            <Text style={styles.button}>planner name</Text>
            <Text style={styles.button}>DATE & time</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
            onPress={() => Actions.event({
                                         title: "",
                                         posterName: "",
                                         location: "",
                                         description: "",
                                         coordinateX: "",
                                         coordinateY: "",
                                         rsvp: "",
                                         month: "",
                                         date: "",
                                         hours: "",
                                         minutes: "",
                                         year: "",
                                        })}
            style={styles.buttonsContainer}>
            <Text style={styles.button}>EVENT NAME</Text>
            <Text style={styles.button}>planner name</Text>
            <Text style={styles.button}>DATE & time</Text>
            </TouchableOpacity>
            
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
                                 fontSize: 15,
                                 },
                                 titleContainer: {
                                 alignItems: 'flex-start'
                                 },
                                 resultsContainer: {
                                 padding: 20,
                                 },
                                 buttonsContainer: {
                                 backgroundColor: '#2980b9',
                                 width: 200,
                                 height: 60,
                                 margin: 10,
                                 alignSelf: 'stretch',
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

module.exports = Search;
