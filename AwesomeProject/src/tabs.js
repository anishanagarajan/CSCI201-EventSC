/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {TabNavigator} from 'react-navigation';

import Login from './login.js';
import Search from './search.js';

const Tab = TabNavigator({
                         Login: {
                         screen: MyLoginScreen,
                         },
                         Search: {
                         screen: MySearchScreen,
                         },
                         }, {
                         tabBarOptions: {
                         activeTintColor: '#e91e63',
                         },
                         });

class MyLoginScreen extends Component {
    static navigationOptions = {
    tabBarLabel: 'Login',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        
    render() {
        return (
                <Button
                onPress={() => this.props.navigation.navigate('Login')}
                title="Go to login"
                />
                );
    }
}

class MySearchScreen extends Component {
    static navigationOptions = {
    tabBarLabel: 'Search',
        
    render() {
        return (
                <Button
                onPress={() => this.props.navigation.('Search'))}
                title="Go search"
                />
                );
    }
}

const styles = StyleSheet.create({
                                 icon: {
                                 width: 26,
                                 height: 26,
                                 },
                                 });




module.export = Tabs;
