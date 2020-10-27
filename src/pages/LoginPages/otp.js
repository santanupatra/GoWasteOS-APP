import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView, SafeAreaView, StatusBar, KeyboardAvoidingView } from 'react-native'
import OtpInputs from 'react-native-otp-inputs';
import Icon from 'react-native-vector-icons/Ionicons';
import style from '../../../mainstyle';
import styles from './style'

export default class Otppage extends Component {
    
    render() {      
        return (
            <SafeAreaView style={style.wrapper}>
                 <StatusBar backgroundColor="transparent" barStyle="dark-content" />
                <KeyboardAvoidingView>
                    <View style={style.hnavigation}>
                        <TouchableOpacity style={style.iconback} onPress={() => this.props.navigation.goBack()}>
                            <Icon name="chevron-back" color="#fb6400" size={30} />
                        </TouchableOpacity>
                        <View style={style.hwrap}>
                            <Text style={style.navh}>Verification</Text>
                        </View>
                    </View>
                    <ScrollView>
                        <View style={style.container}>
                            <View style={styles.otpbox}>
                                <Text style={styles.h1}>Verify your mobile</Text>
                                <Text style={styles.ptext}>Enter your OTP code here</Text>
                                <OtpInputs
                                    inputStyles={styles.otpbx}
                                    numberOfInputs={4}
                                    style={styles.otpwrap}
                                    />
                                    
                            </View>
                            <TouchableOpacity style={[style.themebtn, style.mB1]} onPress={() => this.props.navigation.navigate('Thankyou')}>
                                <Text style={style.btntext}>Verify</Text>
                            </TouchableOpacity>
                           
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
           
        )
    }
}
