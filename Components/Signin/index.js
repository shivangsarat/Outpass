import React, { Component } from 'react';
import { View, Image, Text, StatusBar, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Button, Form, Item, Input, Label } from 'native-base';

import {widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export default class Signin extends React.Component{
    render() {
        return(
            <View style={{marginTop: StatusBar.currentHeight}}>
                <Form>
                    <Item stackedLabel>
                        <Label>Name</Label>
                        <Input />
                    </Item>
                </Form>
            </View>
        )
    }
}