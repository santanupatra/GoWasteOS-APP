import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView, StatusBar, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import style from '../../../mainstyle';
import styles from './style'

export default class SignUp extends Component {
    render() {
        return (
            <SafeAreaView style={style.wrapper}>
                <StatusBar backgroundColor="transparent" barStyle="dark-content" />
                <KeyboardAvoidingView >
                    <ScrollView>
                        <View style={style.container}>
                            <View style={styles.logotop}>
                                <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
                            </View>
                            <View style={[styles.loginbody, style.pB2]}>
                                <View style={[style.mB2, style.pT2]}>
                                    <View style={style.roundinput}>
                                        <TextInput  placeholder="Full Name" placeholderTextColor="#acacac" style={style.forminput}/>
                                        <TouchableOpacity style={style.iconwrap}><Icon name="ios-person" color="#1cae81" size={22} /></TouchableOpacity>
                                    </View>
                                    <View style={style.roundinput}>
                                        <TextInput  placeholder="Location" placeholderTextColor="#acacac" style={style.forminput}/>
                                        <TouchableOpacity style={style.iconwrap}><Icon name="location-sharp" color="#1cae81" size={22} /></TouchableOpacity>
                                    </View>
                                    <View style={style.roundinput}>
                                        <TextInput  placeholder="Phone No." placeholderTextColor="#acacac" style={style.forminput}/>
                                        <TouchableOpacity style={style.iconwrap}><Icon name="call" color="#1cae81" size={22} /></TouchableOpacity>
                                    </View>
                                    <View style={style.roundinput}>
                                        <TextInput  placeholder="Password" placeholderTextColor="#acacac" style={style.forminput}/>
                                        <TouchableOpacity style={style.iconwrap}><Icon name="eye-off" color="#1cae81" size={22} /></TouchableOpacity>
                                    </View>
                                    <View style={style.roundinput}>
                                        <TextInput  placeholder="Confirm Password" placeholderTextColor="#acacac" style={style.forminput}/>
                                        <TouchableOpacity style={style.iconwrap}><Icon name="ios-lock-closed" color="#1cae81" size={22} /></TouchableOpacity>
                                    </View>
                                   
                                </View>                              


                                    <TouchableOpacity style={[style.themebtn, style.mT4]} onPress={() => this.props.navigation.navigate('OtpInput')}>
                                        <Text style={style.btntext}>Sign Up</Text>
                                    </TouchableOpacity>
                                    <View style={style.rowCenter}>
                                        <Text style={styles.logtext}>Already have an account?  </Text>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                                            <Text style={[styles.logtext, style.linktext]}>Sign In</Text>
                                        </TouchableOpacity>
                                    </View>



                            </View>
                            
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
            
        )
    }
}
