import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView, StatusBar, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import style from '../../../mainstyle';
import styles from './style'

export default class ForgotPassword extends Component {
    render() {
        return (
            <SafeAreaView style={style.wrapper}>
                <StatusBar backgroundColor="transparent" barStyle="dark-content" />
                <KeyboardAvoidingView >
                    <View style={style.hnavigation}>
                        <TouchableOpacity style={style.iconback} onPress={() => this.props.navigation.goBack()}>
                            <Icon name="chevron-back" color="#fb6400" size={30} />
                        </TouchableOpacity>                        
                    </View>
                    <ScrollView>
                        <View style={style.container}>                            
                            <View style={[styles.loginbody, style.pB2]}>
                                <Text style={styles.lheading}>Forgot password </Text>
                                <Text style={styles.ltext}>Please enter your email so we can help you recover your password. </Text>

                                <View style={[style.mB4, style.pT2]}>                                    
                                    <View style={style.roundinput}>
                                        <TextInput  placeholder="ex : info@info,com" placeholderTextColor="#acacac" style={style.forminput}/>
                                        <TouchableOpacity><Icon name="ios-close-circle" color="#1cae81" size={22} /></TouchableOpacity>
                                    </View>
                                   
                                </View> 
                                <View style={style.divgap}>
                                    <TouchableOpacity style={[style.themebtn, style.mT4]} onPress={() => this.props.navigation.navigate('ResetPassword')}>
                                        <Text style={style.btntext}>Submit</Text>
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
