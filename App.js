import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

export default class Demo08Component extends Component {
    constructor() {
        super();
        this.state = {
            groupStatus: this._getInitialGroupStatus()
        };
    }
    
    _getInitialGroupStatus() {
        
        const {initialOpenGroups = [], data = []} = this.props;

        // true代表open, false代表closed
        return new Array(data.length)
            .fill(false)
            .map((item, index) => {
                return initialOpenGroups.indexOf(index) !== -1;
            });
    }
}