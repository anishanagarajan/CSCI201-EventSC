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

export default class Signup extends Component {
    constructor() {
        super()
        
        this.state = {
        fname: "",
        lname: "",
        username: "",
        password: "",
        errorHeight:0
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
                                                            requestType: 'SignUp',
                                                            fname: this.state.fname,
                                                            lname: this.state.lname,
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
                this.state.errorHeight=50;
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
                onChangeText= { (text)=> this.setState({fname: text})}
                style={styles.input}
                placeholder="first name"
                placeholderTextColor="rgba(255,255,255,0.7)"
                
                />
                
                <TextInput
                onChangeText= { (text)=> this.setState({lname: text})}
                style={styles.input}
                placeholder="last name"
                placeholderTextColor="rgba(255,255,255,0.7)"
                
                />
                
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
                                 fontSize: 20,
                                 },
                                 
                                 
                                 });

module.exports = Signup;
