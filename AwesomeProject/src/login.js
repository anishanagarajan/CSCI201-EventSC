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

import Main from './main.js';


export default class Login extends Component {
    constructor() {
        super()
        
        this.state = {
        username: "",
        password: ""
        }
    }
    
    async onLoginPressed(){
        try{
            let response = await fetch('http://10.120.105.99:8080/FinalP/GeneralServlet', {
                                       method: 'POST',
                                       headers: {
                                       'Accept': 'application/json',
                                       'Content-Type': 'application/json',
                                       },
                                       body: JSON.stringify({
                                                            requestType: 'Login',
                                                            username: this.state.username,
                                                            password: this.state.password,
                                                            })
                                       });
            let res = await response.text();
            console.log(res);
            var obj = JSON.parse(res);
            if (obj.ifSuccess) {
                Actions.main();
            }
            else {
                console.log("wrong pass");
            }
            
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
                
                <View style={styles.formContainer}>
                <TextInput
                onChangeText= { (text)=> this.setState({username: text})}
                style={styles.input}
                placeholder="username"
                placeholderTextColor="rgba(255,255,255,0.7)"
                
                />
                <TextInput
                onChangeText= { (text)=> this.setState({password: text})}
                placeholder="password"
                placeholderTextColor="rgba(255,255,255,0.7)"
                secureTextEntry
                style={styles.input}
                />
                </View>
                
                <View style={styles.optionsContainer}>
                <TouchableOpacity
                onPress={() => this.onLoginPressed()}
                style={styles.buttonsContainer}><Text style={styles.button}>Login</Text></TouchableOpacity>
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

module.exports = Login;
