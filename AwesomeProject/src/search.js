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
    ListView,
    TextInput,
    AlertIOS
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import CheckBox from 'react-native-checkbox';

export default class Search extends Component {
    async onSearch(){

        try{
            searchType = "event";
            this.state.recordType = this.state.userChecked;
            if(this.state.userChecked){
                searchType="user";
            }
            let response = await fetch('http://10.120.105.99:8080/FinalP/GeneralServlet', {
                                       method: 'POST',
                                       headers: {
                                       'Accept': 'application/json',
                                       'Content-Type': 'application/json',
                                       },
                                       body: JSON.stringify({
                                                            requestType: 'Search',
                                                            searchType: searchType,
                                                            searchParameter: this.state.searchParameter,
                                                            })
                                       });
            let res = await response.text();
            
            console.log(res);
            
            var obj = JSON.parse(res);
            
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            
            var eventList=[];
            for(count = 0; count<obj.eventTitles.length;count++){
                var tempList = [];
                tempList.push(obj.eventTitles[count]);
                tempList.push(obj.posterNames[count]);
                tempList.push(obj.eventIDs[count]);
                eventList.push(tempList);
            }
            this.setState({dataSource: ds.cloneWithRows(eventList)});
        }catch(error){
            console.error(error);
        }
    }

    
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
        userChecked: false,
        titleChecked: true,
        recordType: false,
                searchParameter: "",
        dataSource: ds.cloneWithRows([])
        }
    }
    userPressed = () => {
        if(this.state.titleChecked){
            this.setState({titleChecked:false});
            this.setState({userChecked:true});
        }
        else{
            this.setState({titleChecked:true});
            this.setState({userChecked:false});
        }
    }
    titlePressed = () => {
        if(this.state.userChecked){
            this.setState({userChecked:false});
            this.setState({titleChecked:true});
        }
        else{
            this.setState({userChecked:true});
            this.setState({titleChecked:false});
        }
    }
    
    
    render() {
    return (
      <View style={styles.container}>
            <View style={styles.empty}></View>
            <View style={styles.formContainer}>
            <TextInput style={styles.input}
            onChangeText= { (text)=> this.setState({searchParameter: text})}
            placeholder="Search Content"
            placeholderTextColor="rgba(255,255,255,0.7)"
            
            />
            <TouchableOpacity
            onPress={() => this.onSearch() }
            style = {styles.buttonsContainer} ><Text style={styles.button}>Search</Text></TouchableOpacity>
            </View>
            <View style={styles.checkboxContainer}>
            <CheckBox
            label='Users'
            checked={this.state.userChecked}
            onChange={(checked) => this.userPressed()}
            />
            <CheckBox
            label='Events'
            checked={this.state.titleChecked}
            onChange={(checked) => this.titlePressed()}
            />
            </View>
            <View style={styles.titleContainer}>
            <Text style={styles.title}>Results:</Text>
            </View>

            <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
            />
            
            </View>
            );
    }
    async pressCell(dataRow){
        
        try{
            
            requestType = "Event";
            
            if(this.state.recordType){
                
                searchType="User";
                
            }
            
            let response = await fetch('http://10.120.105.99:8080/FinalP/GeneralServlet', {
                                       
                                       method: 'POST',
                                       
                                       headers: {
                                       
                                       'Accept': 'application/json',
                                       
                                       'Content-Type': 'application/json',
                                       
                                       },
                                       
                                       body: JSON.stringify({
                                                            
                                                            requestType:requestType,
                                                            
                                                            eventID:dataRow[2],
                                                            
                                                            username:dataRow[2]
                                                            
                                                            })
                                       
                                       });
            
            let res = await response.text();
            
            console.log(res);
            
                Actions.event({eventInfo:res});
        }catch(error){
            console.error(error);
        }
        }
    renderRow(dataRow){
        return(
            <View>
               <TouchableOpacity
               onPress={() => this.pressCell(dataRow)}
               style={styles.buttonsContainer}>
               <Text style={styles.button}>{dataRow[0]}</Text>
               <Text style={styles.button}>{dataRow[1]}</Text>
               </TouchableOpacity>
            
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
                                 },empty: {
                                 height: 100,
                                 },
                                 title: {
                                 color: '#FFF',
                                 fontSize: 15,
                                 },
                                 titleContainer: {
                                 alignItems: 'flex-start'
                                 },
                                 resultsContainer: {
                                 padding: 20,
                                 },
                                 buttonsContainer: {
                                 backgroundColor: '#2980b9',
                                 width: 200,
                                 height: 60,
                                 margin: 10,
                                 alignSelf: 'stretch',
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

module.exports = Search;
