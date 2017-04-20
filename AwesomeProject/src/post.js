/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    MapView,
    Picker,
  StyleSheet,
  Text,
  View,
    TouchableOpacity,
    TextInput
} from 'react-native';
import {Actions} from 'react-native-router-flux';
//import MapView from 'react-native-maps';

export default class Post extends Component {

    
    constructor() {
        super()
        
        this.state = {
        title: "",
        month: "4",
        date: "20",
        year: "2017",
        hours: "12",
        minutes: "30",
        location: "",
        locationX: "100",
        locationY: "100",
        description: "",
            
        };
        
        
    }
    
    
    //networking
    async onSubmitPressed(){
        try{
            let response = await fetch('http://10.120.105.99:8080/FinalP/GeneralServlet', {
                                       method: 'POST',
                                       headers: {
                                       'Accept': 'application/json',
                                       'Content-Type': 'application/json',
                                       },
                                       body: JSON.stringify({
                                                            requestType: 'Post',
                                                            title: this.state.title,
                                                            month: this.state.month,
                                                            date: this.state.date,
                                                            year: this.state.year,
                                                            hours: this.state.hours,
                                                            minutes: this.state.minutes,
                                                            location: this.state.location,
                                                            locationX: this.state.locationX,
                                                            locationY: this.state.locationY,
                                                            description: this.state.description,
                                                            })
                                       });
            let res = await response.text();
            console.log(res);
            Actions.event({eventInfo:res});
            
        }catch(error){
            console.error(error);
        }
    }
    
    render() {
    return (
      <View style={styles.container}>
            <View style={styles.empty}></View>
            
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Create a New Event</Text>
            </View>
            
            <View style={styles.formContainer}>
                <TextInput
                    onChangeText= { (text)=> this.setState({title: text})}
                    style={styles.titleInput}
                    placeholder="title (10 words max)"
                    placeholderTextColor="rgba(255,255,255,0.7)"
            
                />
    <View style={styles.pickerContainer}>
        <View style={styles.datePicker}>
            <Picker style={styles.picker}
                selectedValue={this.state.month}
                onValueChange={(month) => this.setState({month: month})}>
                <Picker.Item label="Jan" value="1" />
                <Picker.Item label="Feb" value="2" />
                <Picker.Item label="March" value="3" />
                <Picker.Item label="April" value="4" />
                <Picker.Item label="May" value="5" />
                <Picker.Item label="June" value="6" />
                <Picker.Item label="July" value="7" />
                <Picker.Item label="Aug" value="8" />
                <Picker.Item label="Sept" value="9" />
                <Picker.Item label="Oct" value="10" />
                <Picker.Item label="Nov" value="11" />
                <Picker.Item label="Dec" value="12" />
            </Picker>
            
            <Picker style={styles.picker}
            selectedValue={this.state.date}
            onValueChange={(date) => this.setState({date: date})}>
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="11" value="11" />
            <Picker.Item label="12" value="12" />
            <Picker.Item label="13" value="13" />
            <Picker.Item label="14" value="14" />
            <Picker.Item label="15" value="15" />
            <Picker.Item label="16" value="16" />
            <Picker.Item label="17" value="17" />
            <Picker.Item label="18" value="18" />
            <Picker.Item label="19" value="19" />
            <Picker.Item label="20" value="20" />
            <Picker.Item label="21" value="21" />
            <Picker.Item label="22" value="22" />
            <Picker.Item label="23" value="23" />
            <Picker.Item label="24" value="24" />
            <Picker.Item label="25" value="25" />
            <Picker.Item label="26" value="26" />
            <Picker.Item label="27" value="27" />
            <Picker.Item label="28" value="28" />
            <Picker.Item label="29" value="29" />
            <Picker.Item label="30" value="30" />
            <Picker.Item label="31" value="31" />
            </Picker>
            
            <Picker style={styles.picker}
            selectedValue={this.state.year}
            onValueChange={(year) => this.setState({year: year})}>
            <Picker.Item label="2015" value="2015" />
            <Picker.Item label="2016" value="2016" />
            <Picker.Item label="2017" value="2017" />
            <Picker.Item label="2018" value="2018" />
            <Picker.Item label="2019" value="2019" />
            <Picker.Item label="2020" value="2020" />
            
            </Picker>
        </View>
            
        <View style={styles.timePicker}>
            <Picker style={styles.picker}
            selectedValue={this.state.hours}
            onValueChange={(hours) => this.setState({hours: hours})}>
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="11" value="11" />
            <Picker.Item label="12" value="12" />
            <Picker.Item label="13" value="13" />
            <Picker.Item label="14" value="14" />
            <Picker.Item label="15" value="15" />
            <Picker.Item label="16" value="16" />
            <Picker.Item label="17" value="17" />
            <Picker.Item label="18" value="18" />
            <Picker.Item label="19" value="19" />
            <Picker.Item label="20" value="20" />
            <Picker.Item label="21" value="21" />
            <Picker.Item label="22" value="22" />
            <Picker.Item label="23" value="23" />
            <Picker.Item label="24" value="24" />
            </Picker>
            
            <Picker style={styles.picker}
            selectedValue={this.state.minutes}
            onValueChange={(minutes) => this.setState({minutes: minutes})}>
            <Picker.Item label="00" value="00" />
            <Picker.Item label="15" value="15" />
            <Picker.Item label="30" value="30" />
            <Picker.Item label="45" value="45" />
            </Picker>
            
        </View>
            
            
    </View>
        <View style={styles.locationInputContainer}>
            <TextInput
            placeholder="location (Ex. RTH 201)"
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={styles.locationInput}
            />
        </View>
        <View style={styles.locationContainer}>
            
            <MapView style={styles.map}
            showUserLocation={true}
            region= {{
            latitude: 34.0207044,
            longitude: -118.284963,
            latitudeDelta: 0.01,
            longitudeDelta: 0.001,
            }}
            />
        </View>
            
                <TextInput
            onChangeText= { (text)=> this.setState({description: text})}
                placeholder="description"
                placeholderTextColor="rgba(255,255,255,0.7)"
                style={styles.descriptionInput}
                />
            
            </View>
            
            <View style={styles.optionsContainer}>
               <TouchableOpacity
            onPress={() => this.onSubmitPressed()}
            style={styles.buttonsContainer}><Text style={styles.button}>Submit</Text></TouchableOpacity>
            </View>
     </View>

            
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#BD2031',
    flexDirection: 'column',
  },
                                 title: {
                                 color: '#FFF',
                                 fontSize: 20,
                                 alignSelf: 'center',
                                 
                                 },
                                 optionsContainer: {
                                 padding: 20,
                                 alignItems: 'center',
                                 },
                                 buttonsContainer: {
                                    backgroundColor: '#DAA520',
                                 padding: 10,
                                 width: 70,
                                 height: 40,
                                 alignItems: 'center',
                                 
                                 },
                                 formContainer: {
                                 margin: 10,
                                 },
                                 titleInput: {
                                 height: 30,
                                 alignSelf: 'stretch',
                                 backgroundColor: "rgba(255,255,255,0.2)",
                                 color: '#FFF',
                                 paddingHorizontal: 10,
                                 },
                                 titleContainer: {
                                 height: 30,
                                 
                                 },
                                 
                                 descriptionInput: {
                                 height: 30,
                                 alignSelf: 'stretch',
                                 backgroundColor: "rgba(255,255,255,0.2)",
                                 color: '#FFF',
                                 paddingHorizontal: 10,
                                 },
                                 locationInput: {
                                 height: 30,
                                 alignSelf: 'stretch',
                                 backgroundColor: "rgba(255,255,255,0.2)",
                                 color: '#FFF',
                                 paddingHorizontal: 10,
                                 },
                                 picker: {
                                 width: 60,
                                 height: 150,
                                 },
                                 datePicker: {
                                 flexDirection: 'row',
                                 alignItems: 'stretch',
                                 justifyContent: 'flex-start',
                                 marginRight: 20,
                                 height: 200,
                                 },
                                 
                                 timePicker: {
                                 flexDirection: 'row',
                                 alignItems: 'stretch',
                                 justifyContent: 'flex-end',
                                 marginLeft: 20,
                                 height: 200,
                                 },
                                 
                                 pickerContainer: {
                                 flexDirection: 'row',
                                 alignItems: 'stretch',
                                 justifyContent: 'center',
                                 margin: 10
                                 },
                                 
                                 locationContainer: {
                                 height: 150,
                                 alignSelf: 'stretch',
                                 margin: 10
                                 },
                                 
                                 map: {
                                 position: 'absolute',
                                 top: 0,
                                 left: 0,
                                 right: 0,
                                 bottom: 0,
                                 },
                                 empty: {
                                 height: 100,
                                 },
                                
                                 
                                 
  });

module.exports = Post;
