import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, StatusBar, Image, ScrollView, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import IconFont from 'react-native-vector-icons/FontAwesome'
import style from '../../../mainstyle'
import styles from './style'

export default class Profile extends Component {
    constructor(props){
        super(props);     
    }
    render() {
        return (
            <SafeAreaView style={style.wrapper}>
                <StatusBar barStyle="dark-content" backgroundColor="transparent" />
                <View style={style.hnavigation}>
                        <TouchableOpacity style={style.iconback} onPress={this.props.navigation.openDrawer}>
                            <Image source={require('../../assets/images/menubar.png')} style={style.mimg} />
                        </TouchableOpacity>
                        <View style={style.hwrap}>
                            <Text style={style.navh}>Profile</Text>
                            <View style={style.righticon}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('EditProfile')}>
                                    <IconFont name="pencil" color="#fb6400" size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                <ScrollView>
                    <View style={style.container}>
                        <View style={styles.profiletop}>
                            <ImageBackground source={require('../../assets/images/profilebg.png')} style={styles.profileround} >
                                <Image source={require('../../assets/images/profile.png')} style={styles.profileimg} />
                            </ImageBackground>
                            <View style={styles.procontent}>
                                <Text style={styles.namepro}>Aliga parker</Text>
                                <Text style={styles.mailpro}>aliga@info.com</Text>
                            </View>
                        </View>
                        <View style={styles.whitecard}>
                            <View style={[style.rowSec,]}>
                                <TouchableOpacity>
                                    <Icon name="camera" color="#212121" size={20} />
                                </TouchableOpacity>
                                <View style={style.mL1}>
                                    <Text style={[styles.label]}> Upload your profile photo</Text>
                                    <Text style={styles.mlabel}>Your photo helps to identify you for view.</Text>

                                    <View style={[style.rowSec,]}>
                                        <TouchableOpacity style={[style.mR1, style.mB1]}>
                                            <Text style={styles.grtext}>Upload </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[style.mL1, style.mB1]}>
                                            <Text style={styles.dismiss}>Dismiss </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                
                            </View>
                        </View>
                        <View style={[style.card, style.noborder]}>
                            <View style={style.cardbody}>
                                <View style={styles.inrbody}>
                                    <View style={[style.rowSec, style.mB2]}>
                                        <TouchableOpacity style={style.mR1}>
                                            <Icon name="ios-location" color="#fb6400" size={20} />
                                        </TouchableOpacity>
                                        <View style={[styles.info, style.mL1]}>
                                            <Text style={styles.label}>Location</Text>
                                            <Text style={styles.smlabel}>1258, Stemacho way, Las vegas, Usa, 256951</Text>
                                        </View>
                                    </View>
                                    <View style={[style.rowSec, style.mB2]}>
                                        <TouchableOpacity style={style.mR1}>
                                            <Icon name="mail" color="#fb6400" size={20} />
                                        </TouchableOpacity>
                                        <View style={[styles.info, style.mL1]}>
                                            <Text style={styles.label}>Email</Text>
                                            <Text style={styles.smlabel}>aliga@info.com</Text>
                                        </View>
                                    </View>
                                    <View style={[style.rowSec, style.mB2]}>
                                        <TouchableOpacity style={style.mR1}>
                                            <Icon name="call" color="#fb6400" size={20} />
                                        </TouchableOpacity>
                                        <View style={[styles.info, style.mL1]}>
                                            <Text style={styles.label}>Phone</Text>
                                            <Text style={styles.smlabel}>236 - 236 - 1478 </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
