import React, { Component } from 'react';
import { View, Image, Text, StatusBar, TouchableHighlight, Dimensions } from 'react-native';
import { ScreenOrientation, Icon } from 'expo';
import Constants from 'expo-constants';

import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Grid, Section, Block } from 'react-native-responsive-layout';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

import Signin from '../Signin';

export default class HomePage extends React.Component {

    // componentWillMount() {
    //     console.log(Dimensions.get('screen'));
    //     // ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);
    // }

    render() {
        return (
            <View style={{
                marginTop: StatusBar.currentHeight,
                height: '100%',
            }}
            >
                <View style={{ alignSelf: "center", justifyContent: "center", marginTop: responsiveHeight(10), alignItems: "center", width: "100%" }}>
                    <Image source={require("../../assets/logo_file.png")} style={{ width: responsiveWidth(58), height: responsiveHeight(12) }} />
                </View>

                <View style={{ position: "absolute", bottom: 0, width: "100%", flex: 1, flexDirection: 'row', marginBottom: heightPercentageToDP('2%') }}>
                    <TouchableHighlight style={{ borderColor: "#000", borderWidth: 1, width: "50%", backgroundColor: "#245450" }} onPress={() => this.props.navigation.navigate('Signin')} >
                        <Text style={{ color: "#fff", marginTop: heightPercentageToDP('3%'), marginBottom: heightPercentageToDP('3%'), textAlign: 'center' }}>
                            SIGNIN
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ borderColor: "#000", borderWidth: 1, width: "50%", backgroundColor: "#fff" }} >
                        <Text style={{ color: "#000", marginTop: heightPercentageToDP('3%'), marginBottom: heightPercentageToDP('3%'), textAlign: 'center' }}>
                            SIGNUP
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}