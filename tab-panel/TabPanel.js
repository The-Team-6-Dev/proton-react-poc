import React, { Component } from "react";

export default class TabPanel extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                width: 500,
                height: 500,
            }}>
                <View style={{
                    flex: 1,
                    width: 100,
                    height: 100,
                }} />
                <View style={{
                    flex: 1,
                    width: 100,
                    height: 100,
                }} />
                <View style={{
                    flex: 1,
                    width: 100,
                    height: 100,
                }} />
            </View>
        );
    }
}
