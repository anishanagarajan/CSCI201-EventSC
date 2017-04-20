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

export default class Profile extends Component {
    constructor (props) {
        super(props);
        
        var obj = JSON.parse(this.props.info);

        this.state = {
        fname: obj.fname,
        lname: obj.lname,
        username: obj.username,
        myEvents: obj.myEvents,
        myEventIDs: obj.myEventIDs,
        upcomingEvents: obj.upcomingEvents,
        upcomingEventIDs: obj.upcomingEventIDs,
        pastEvents: obj.previousEvents,
        pastEventIDs: obj.previousEventIDs,

        }
    }
    
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.empty}></View>
            
            {/*state needs to be changed to props for networking*/}
            <View style={styles.titleContainer}>
            <Text style={styles.title}>{this.state.fname} {this.state.lname}</Text>
            <Text style={styles.subTitle}>{this.state.username}</Text>
            </View>
            
            
            <View style={styles.optionsContainer}>
                <TouchableOpacity
            onPress={() => Actions.myEvents({events: this.state.myEvents,
                                            IDs: this.state.myEventIDs})}
                style={styles.buttonsContainer}><Text style={styles.button}>My Events</Text></TouchableOpacity>
            
                <TouchableOpacity
                onPress={() => Actions.myEvents({events: this.state.upcomingEvents,
                                                IDs: this.state.upcomingEventIDs})}
                style={styles.buttonsContainer}><Text style={styles.button}>Upcoming Events</Text></TouchableOpacity>
            
                <TouchableOpacity
                onPress={() => Actions.myEvents({events: this.state.pastEvents,
                                                IDs: this.state.pastEventIDs})}
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
    backgroundColor: '#BD2031',
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
                                 backgroundColor: '#DAA520',
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

module.exports = Profile;
