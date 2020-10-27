import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import style from '../../../mainstyle';
import styles from './style'

export default class Payment extends Component {
    render() {
        return (
            <SafeAreaView style={style.wrapper}>
                <StatusBar backgroundColor="transparent" barStyle="dark-content" />
                <View style={style.hnavigation}>
                    <TouchableOpacity style={style.iconback} onPress={() => this.props.navigation.goBack()}>
                        <Icon name="chevron-back" color="#fb6400" size={30} />
                    </TouchableOpacity>
                    <View style={style.hwrap}>
                        <Text style={style.navh}>Total Payment</Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={style.container}>
                        <View style={[style.rowjustify, style.mT1, style.mB2]}>
                            <Text style={styles.label}>Date : 09 Set, 2020	</Text>
                            <Text style={styles.label}>Time : 15:00 pm</Text>
                        </View>
                        <View style={styles.covercard}>
                            <ImageBackground source={require('../../assets/images/paybg.png')} style={styles.paycard}>
                                <View style={[style.rowjustify, style.mB2]}>
                                    <Text style={styles.wlabel}>Waste</Text>
                                    <Text style={[styles.wlabel, style.rightAlign]}>$ 12</Text>
                                </View>
                                <View style={[style.rowjustify, style.mB2]}>
                                    <Text style={styles.wlabel}>Disposal Service</Text>
                                    <Text style={[styles.wlabel, style.rightAlign]}>$ 50</Text>
                                </View>
                                <View style={[style.rowjustify, style.mB2]}>
                                    <Text style={styles.wlabel}>Including Tax</Text>
                                    <Text style={[styles.wlabel, style.rightAlign]}>$ 150</Text>
                                </View>
                                <View style={[style.rowjustify, styles.topborder]}>
                                    <Text style={[styles.wlabel, { fontWeight: 'bold' }]}>Total Payment</Text>
                                    <Text style={[styles.wlabel, style.rightAlign, { fontWeight: 'bold' }]}>$ 212</Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={[style.mB2]}>
                            <Text style={styles.logtext}>Payment Method</Text>
                        </View>
                        <View style={[style.row, { flexWrap: 'wrap' }]}>
                            <View style={[style.width50, style.mB2]}>
                                <TouchableOpacity style={[styles.pbtn, styles.selected]}>
                                    <Text style={styles.blacktext}>VISA</Text>

                                    <Icon name="ios-checkmark-circle" color="#1dae81" size={30} style={styles.cmark} />
                                </TouchableOpacity>
                            </View>
                            <View style={[style.width50, style.mB2]}>
                                <TouchableOpacity style={styles.pbtn}>
                                    <Text style={styles.ptext}>Paypal</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[style.width50, style.mB2]}>
                                <TouchableOpacity style={styles.pbtn}>
                                    <Text style={styles.ptext}>Venmo</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[style.width50, style.mB2]}>
                                <TouchableOpacity style={styles.pbtn}>
                                    <Text style={styles.ptext}>Master Card</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <TouchableOpacity style={[style.themebtn, style.mT4]}>
                            <Text style={style.btntext}>Confirm Payment</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
