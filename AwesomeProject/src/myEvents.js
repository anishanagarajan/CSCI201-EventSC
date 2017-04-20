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
    async goToEvent(eventID){
        try{
            let response = await fetch('http://10.120.105.99:8080/FinalP/GeneralServlet', {
                                       method: 'POST',
                                       headers: {
                                       'Accept': 'application/json',
                                       'Content-Type': 'application/json',
                                       },
                                       body: JSON.stringify({
                                                            requestType: 'Event',
                                                            eventID: eventID,
                                                            })
                                       });
            let res = await response.text();
            console.log(res);
            var obj = JSON.parse(res);
            Actions.event({eventInfo: res});
            
        }catch(error){
            console.error(error);
        }
    }
    

    
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.empty}></View>
            
            {/*state needs to be changed to props for networking*/}
            <View style={styles.titleContainer}>
            <Text style={styles.title}></Text>
            </View>
            
            
            <View style={styles.optionsContainer}>
                <TouchableOpacity
            onPress={() => this.goToEvent(this.props.IDs[0])}
            style={styles.buttonsContainer}><Text style={styles.button}>{this.props.events[0]}</Text></TouchableOpacity>
            
                <TouchableOpacity
                onPress={() => this.goToEvent(this.props.IDs[1])}
            style={styles.buttonsContainer}><Text style={styles.button}>{this.props.events[1]}</Text></TouchableOpacity>
            
                <TouchableOpacity
                onPress={() => this.goToEvent(this.props.IDs[2])}
            style={styles.buttonsContainer}><Text style={styles.button}>{this.props.events[2]}</Text></TouchableOpacity>
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

module.exports = MyEvents;
