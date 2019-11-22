import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
    Keyboard,
    Platform,
    TextInput,
    StyleSheet,
    ScrollView,
} from 'react-native'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keyBoardHeight: 0
        }
    }
    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
    }
    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    _keyboardDidShow(e) {
        this.setState({
            keyBoardHeight: e.endCoordinates.height
        });
    }
    _keyboardDidHide() {
        this.setState({
            keyBoardHeight: 0
        });
    }
    loseFocus() {
        this.refs.input.blur()
    }
    render() {
        let { keyBoardHeight } = this.state
        return (
            <View style={css.container}>
                <ScrollView style={{ paddingBottom: 100 }}>
                    <Text>height: {keyBoardHeight}</Text>
                    <View style={{ backgroundColor: 'red', height: 500 }}></View>
                    <Button style={css.txt} onPress={() => this.loseFocus()}></Button>
                    <View style={{ backgroundColor: 'blue', height: 500 }}></View>
                    <View style={{ backgroundColor: 'green', height: 500 }}></View>
                </ScrollView>
                <View style={[css.box, Platform.OS == 'ios' && { bottom: keyBoardHeight }]}>
                    <TextInput
                        ref="input"
                        style={css.input}
                        underlineColorAndroid="transparent" />
                </View>
            </View>
        )
    }
}

const css = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        height: 60,
        width: '100%',
        fontSize: 20,
        color: '#333333',
        backgroundColor: '#eee',
        borderRadius: 60,
        paddingHorizontal: 20,
        paddingVertical: 0
    },
    box: {
        backgroundColor: '#fff',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        color: 'red'
    }
})