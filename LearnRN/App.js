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
        let a = "qwertysdfgbfb"
        let textLast = a.substr(-3, 3)
        let text = a.substr(0, 5)
        return (
            <View style={styles.text}>
                <Text>{text}</Text>
                <Text style={styles.last}>{textLast}</Text>
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
