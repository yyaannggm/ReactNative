import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Text
} from 'react-native';



export default class countDown extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        let array=["a","b","c","d","e","f","g"]
                let str="12345667"
                let noShow=array.length-4
        return (
            <View style={styles.text}>
                <Text>{str.length}</Text>
                 </View>
        )
    }








}

styles = StyleSheet.create({

    text: {
        marginTop: 100,
        marginLeft: 40,
        width: 200,
        fontSize: 30
    },
    last: {
        fontSize: 40
    }
});
