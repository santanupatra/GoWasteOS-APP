import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView, StatusBar, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import style from '../../../mainstyle';
import styles from './style'

export default class Login extends Component {
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
                                <Text style={styles.lheading}> Welcome </Text>
                                <Text style={styles.ltext}> Sign in to continue </Text>

                                <View style={[style.mB2, style.pT2]}>
                                    <View style={style.roundinput}>
                                        <TextInput  placeholder="Phone No." placeholderTextColor="#acacac" style={style.forminput}/>
                                        <TouchableOpacity style={style.iconwrap}><Icon name="call" color="#1cae81" size={22} /></TouchableOpacity>
                                    </View>
                                    <View style={style.roundinput}>
                                        <TextInput  placeholder="Password" placeholderTextColor="#acacac" style={style.forminput}/>
                                        <TouchableOpacity style={style.iconwrap}><Icon name="eye-off" color="#1cae81" size={22} /></TouchableOpacity>
                                    </View>

                                    <View style={styles.fpass}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                                            <Text style={styles.forgottext}>Forgot Password ?</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={style.pB4}>
                                    <Text style={styles.stext}>Sign in with</Text>
                                    <View style={style.flexRow}>
                                        <TouchableOpacity style={style.mR1}>
                                            <Image source={require('../../assets/images/facebook.png')} style={styles.slogo} />      
                                        </TouchableOpacity>
                                        <TouchableOpacity style={style.mL1}>
                                            <Image source={require('../../assets/images/google.png')} style={styles.slogo} />      
                                        </TouchableOpacity>
                                    </View>
                                </View>


                                    <TouchableOpacity style={[style.themebtn, style.mT4]} onPress={() => this.props.navigation.navigate('OtpInput')}>
                                        <Text style={style.btntext}>Log In</Text>
                                    </TouchableOpacity>
                                    
                                    <View style={style.rowCenter}>
                                        <Text style={styles.logtext}>New User? </Text>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                                            <Text style={[styles.logtext, style.linktext]}>Sign Up</Text>
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
