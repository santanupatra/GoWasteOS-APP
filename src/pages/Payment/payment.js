import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView, StatusBar, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import style from '../../../mainstyle';
import styles from './style'

export default class Payment extends Component {
    render() {
        return (
            <SafeAreaView style={style.wrapper}>
                <StatusBar backgroundColor="transparent" barStyle="dark-content" />
                <View style={[style.hnavigation, style.mT1]}>
                        <TouchableOpacity style={style.iconback} onPress={() => this.props.navigation.goBack()}>
                            <Icon name="chevron-back" color="#fb6400" size={30} />
                        </TouchableOpacity>
                        <View style={style.hwrap}>
                            <Text style={style.navh}>Payment</Text>                            
                        </View>
                    </View>
                <KeyboardAvoidingView >
                    <ScrollView>
                        <View style={style.container}> 
                        <View style={style.mB2}>
                            <Text style={styles.logtext}>Card Details</Text>
                        </View>                          
                            <View style={[styles.loginbody, style.pB2]}>
                                
                                <View style={[style.card, style.noborder]}>
                                    <View style={style.cardbody}>
                                        <View style={[style.width100, style.pT1]}>
                                            <View style={style.mB2}>
                                                <Text style={style.formlabel}>Card Number</Text>
                                                <View style={style.roundinput}>
                                                    <TextInput  placeholder="xxxx xxxx xxxx xxxx" placeholderTextColor="#acacac" style={style.forminput}/>
                                                    <TouchableOpacity style={style.iconwrap}><Icon name="ios-card" color="#1cae81" size={22} /></TouchableOpacity>
                                                </View>
                                            </View>
                                            <View style={style.row}>
                                                <View style={style.width50}>
                                                    <Text style={style.formlabel}>Expiry Date</Text>
                                                    <View style={style.roundinput}>
                                                        <TextInput  placeholder="12/22" placeholderTextColor="#acacac" style={style.forminput2}/>
                                                        <TouchableOpacity style={style.iconwrap}><Icon name="ios-calendar" color="#1cae81" size={22} /></TouchableOpacity>
                                                    </View>
                                                </View>
                                                <View style={style.width50}>
                                                    <Text style={style.formlabel}>CVV</Text>
                                                    <View style={style.roundinput}>
                                                        <TextInput  placeholder="000" placeholderTextColor="#acacac" style={style.forminput2}/>
                                                        <TouchableOpacity style={style.iconwrap}><Icon name="ios-lock-closed" color="#1cae81" size={22} /></TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={[style.mT2, style.mB2]}>
                                                <Text style={style.formlabel}>Card Holder's Name</Text>
                                                <View style={style.roundinput}>
                                                    <TextInput  placeholder="eg. Jhon" placeholderTextColor="#acacac" style={style.forminput}/>
                                                    <TouchableOpacity style={style.iconwrap}><Icon name="ios-person" color="#1cae81" size={22} /></TouchableOpacity>
                                                </View>
                                            </View>                                  
                                    
                                    </View>
                                </View>       
                                </View>                       


                                    <TouchableOpacity style={[style.themebtn, style.mT4]}>
                                        <Text style={style.btntext}>Next</Text>
                                    </TouchableOpacity>
                                   


                           </View>
                            
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
            
        )
    }
}
