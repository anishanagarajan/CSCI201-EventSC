/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import MapView, {Marker} from 'react-native-maps';

export default class Map extends Component {
    constructor () {
        super();
        
    }
    
    render() {
        return (
                <View style={styles.container}>
                
                <MapView style={styles.map}
                showUserLocation={true}
                initialRegion= {{
                latitude: 34.0207044,
                longitude: -118.284963,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.021
                }}
                >
                <MapView.Marker
                coordinate={{latitude: 34.78825,
                longitude: -118.4324}}
                title={"title"}
                description={"description"}
                
                />
                </MapView>
                
                
                </View>
                
                );
    }
}

const styles = StyleSheet.create({
                                 container: {
                                 position: 'absolute',
                                 top: 0,
                                 left: 0,
                                 right: 0,
                                 bottom: 0,
                                 justifyContent: 'flex-end',
                                 alignItems: 'center',
                                 },
                                 map: {
                                 position: 'absolute',
                                 top: 0,
                                 left: 0,
                                 right: 0,
                                 bottom: 0,
                                 },
                                 
                                 
                                 });



module.exports = Map;

