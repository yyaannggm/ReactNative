import React,{Component} from 'react';
import {View,Text,FlatList} from 'react-native';
 
export default class Demo08Component extends Component{
    constructor(){
        super();
        this.state={
            userList:[
                "abc1",
                "abc2",
                "abc3"
            ]
        }
    }
 
    showMyItem=(info)=>{
        return <Text>{info.item}{info.index}</Text>
    }
 
    render(){
        return <FlatList data={this.state.userList} renderItem={this.showMyItem}>
 
        </FlatList>
    }

}