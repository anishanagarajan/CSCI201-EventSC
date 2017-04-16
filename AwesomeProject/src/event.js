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

export default class Event extends Component {
    constructor() {
        super()
        var eventMessage = this.props.eventInfo;
        var obj = JSON.parse(eventMessage);
        
        this.state = {
        eventName: obj.title,
        host: obj.posterName,
            
        };
        
        
    }
    
    
    //networking
    async onLoginPressed(){
        try{
            let response = await fetch('http://10.120.108.158:8080/FinalP/GeneralServlet', {
                                       method: 'POST',
                                       headers: {
                                       'Accept': 'application/json',
                                       'Content-Type': 'application/json',
                                       },
                                       body: JSON.stringify({
                                                            requestType: 'Event',
                                                            eventName: this.state.eventName,
                                                            month: this.state.month,
                                                            date: this.state.date,
                                                            year: this.state.year,
                                                            hours: this.state.hours,
                                                            minutes: this.state.minutes,
                                                            location: this.state.location,
                                                            description: this.state.description,
                                                            category: this.state.category,
                                                            })
                                       });
            let res = await response.text();
            console.log(res);
            var obj = JSON.parse(res);
            if (obj.ifSuccess) {
                console.log("created event!");
                //Actions.event();
            }
            else {
                //show error
            }
            
        }catch(error){
            console.error(error);
        }
    }

    render() {
        return (
        <View style={styles.container}>
                <View style={styles.titleContainer}>
                <Text style={styles.title}>{this.state.eventName}</Text>
                </View>
                
                <View style={styles.optionsContainer}>
                <TouchableOpacity
                //onPress={() => Actions.pastEvents()}
                style={styles.buttonsContainer}><Text style={styles.button}>Past</Text></TouchableOpacity>
                
                <TouchableOpacity
                //onPress={() => Actions.myEvents()}
                style={styles.buttonsContainer}><Text style={styles.button}>My Events</Text></TouchableOpacity>
                
                <TouchableOpacity
                //onPress={() => Actions.upcomingEvents()}
                style={styles.buttonsContainer}><Text style={styles.button}>Upcoming</Text></TouchableOpacity>
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

module.exports = Event;
