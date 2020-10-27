import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image, ImageBackground, } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import style from '../../../mainstyle'
import styles from './style'

export default class NewBooking extends Component {
    render() {
        return (
            <SafeAreaView style={style.wrapper}>
                <ScrollView>
                    <View style={[style.container, {paddingHorizontal:2}]}>
                        <View style={[style.datedevider, style.rowjustify]}>
                            <Text style={style.datemute}>23 Sep, 20</Text>

                            <Text style={[style.datemute, {fontWeight:'bold'}]}>11:15 am</Text>
                        </View>
                        <View style={style.mB2}>
                        <View style={[style.card, styles.heightcard]}>
                            <ImageBackground source={require('../../assets/images/listbg.png')} style={styles.sidecard}></ImageBackground>
                                <View style={style.cardbody}>
                                    <View style={[style.rowSec, styles.width75]}> 
                                        <View style={style.cardthumb}>
                                            <Image source={require('../../assets/images/car.png')} style={style.thumbimg} />
                                        </View>
                                    <View style={styles.carddesc}>                                                                            
                                        <Text style={styles.sheading}> Customer Name</Text>                                                                               
                                            <Text style={[styles.sdate2, style.mb0]}> Order Id: 01A14</Text>                                         
                                            <Text style={[styles.sdate2, style.mb0]}>125-A Camak Street</Text>                                                                                  
                                    </View>
                                    </View>
                                    
                                </View>
                                <TouchableOpacity style={styles.detailsbtn}>
                                    <Text style={styles.dtext}>Details</Text>    
                                </TouchableOpacity>
                                <TouchableOpacity style={style.closelist}>
                                    <Icon name="ios-close" color="#8898a8" size={24} />    
                                </TouchableOpacity>
                            </View>
                            </View>
                            <View style={style.mB2}>
                                <View style={[style.card, styles.heightcard]}>
                                    <ImageBackground source={require('../../assets/images/listbg.png')} style={styles.sidecard}></ImageBackground>
                                        <View style={style.cardbody}>
                                            <View style={[style.rowSec, styles.width75]}> 
                                                <View style={style.cardthumb}>
                                                    <Image source={require('../../assets/images/car.png')} style={style.thumbimg} />
                                                </View>
                                            <View style={styles.carddesc}>                                                                            
                                                <Text style={styles.sheading}> Customer Name</Text>                                                                               
                                                    <Text style={[styles.sdate2, style.mb0]}> Order Id: 01A14</Text>                                         
                                                    <Text style={[styles.sdate2, style.mb0]}>125-A Camak Street</Text>                                                                                  
                                            </View>
                                            </View>
                                            
                                        </View>
                                        <TouchableOpacity style={styles.detailsbtn}>
                                            <Text style={styles.mutetext}>Details</Text>    
                                        </TouchableOpacity>
                                        <TouchableOpacity style={style.closelist}>
                                            <Icon name="ios-close" color="#8898a8" size={24} />    
                                        </TouchableOpacity>
                                    </View>
                                  
                            </View>
                    </View>
                </ScrollView>
            </SafeAreaView>

        )
    }
}

