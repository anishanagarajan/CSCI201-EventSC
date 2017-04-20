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

export default class EventGuest extends Component {
    
    constructor (props) {
        super(props);
        
        var obj = JSON.parse(this.props.eventInfo);
          
        this.state = {
          title: obj.title,
        location: obj.location,
        date: obj.date,
        time: obj.time,
        eventID: obj.eventID,
              description: obj.description,
              posterName: obj.posterName,
              posterID: obj.posterID,
              coordinateX: obj.coordinateX,
              coordinateY: obj.coordinateY,
              posterRating: obj.posterRating
        }
        
        }


    //networking
    async sendRSVP(){
        try{
            let response = await fetch('http://10.120.105.99:8080/FinalP/GeneralServlet', {
                                       method: 'POST',
                                       headers: {
                                       'Accept': 'application/json',
                                       'Content-Type': 'application/json',
                                       },
                                       body: JSON.stringify({
                                                            requestType: 'RSVP',
                                                            eventID: this.state.eventID,
                                                            })
                                       });
            let res = await response.text();
            console.log(res);
            var obj = JSON.parse(res);
            if (obj.ifSuccess) {
                console.log("loaded event");
                
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
                <Text style={styles.title}>{this.state.title}</Text>
                <Text style={styles.subTitle}>{this.state.posterName}</Text>
                <Text style={styles.subTitle}>{this.state.location}</Text>
                <Text style={styles.subTitle}>{this.state.date}</Text>
                <Text style={styles.subTitle}>{this.state.time}</Text>
                <Text style={styles.subTitle}>{this.state.description}</Text>
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
                                 color: '#FFF',
                                 fontSize: 30,
                                 
                                 },
                                 optionsContainer: {
                                 padding: 20,
                                 },
                                 buttonsContainer: {
                                 backgroundColor: '#DAA520',
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

module.exports = EventGuest;
