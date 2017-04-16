/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Root from './root.js';
import Login from './login.js';
import Signup from './signup.js';
import Main from './main.js';
import Search from './search.js';
import Post from './post.js';
import Profile from './profile.js';


export default class AwesomeProject extends Component {
    render() {
        return (
                <Router>
                
                
                <Scene
                key="root"
                component={Root}
                title="Entry"
                initial
                />
                
                <Scene
                key="login"
                component={Login}
                title="Login"
                
                />
                
                <Scene
                key="signup"
                component={Signup}
                title="Signup"
                
                />
                
                <Scene
                key="guest"
                component={Main}
                title="Welcome"
                
                />
                
                <Scene
                key="post"
                component={Post}
                title="Post"
                
                />
                
                <Scene
                key="profile"
                component={Profile}
                title="Profile"
                
                />
                
                <Scene
                key="search"
                component={Search}
                title="Search"
                
                />
                
                
                
                
                </Router>
              ) ;
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
                                 margin: 15,
                                 
                                 },
                                 button: {
                                 color: '#FFF',
                                 textAlign: 'center',
                                 padding: 5,
                                 },
                                 
                                 
                                 
                                 });


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
