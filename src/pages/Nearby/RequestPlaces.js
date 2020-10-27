import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, StatusBar, Image, ScrollView, ImageBackground, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import style from '../../../mainstyle'
import styles from './style'

export default class RequestPlaces extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ImageBackground source={require('../../assets/images/map-blank.png')} style={styles.wrappers}>
                <SafeAreaView style={[style.wrapper, {  backgroundColor: 'transparent' }]}>
                    <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
                    <View style={[style.hnavigation, style.mT3]}>
                        <TouchableOpacity style={style.iconback} onPress={this.props.navigation.openDrawer}>
                            <Image source={require('../../assets/images/menubar.png')} style={style.mimg} />
                        </TouchableOpacity>
                        <View style={style.hwrap}>
                            <Text style={style.navh}>Track on Map</Text>
                            <View style={style.righticon}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Notification')}>
                                    <Icon name="ios-notifications-circle" color="#fb6400" size={28} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <ScrollView style={{flex:1}}>
                        <View style={style.container}>
                            <View style={[styles.abscard, {marginTop:'90%'}]}>
                                <View style={[style.card, style.noborder]}>
                                    <View style={style.cardbody}>
                                        <View style={styles.inrbody}>
                                        <View style={style.mB2}>
                                            <Text style={styles.labelg}>Customer Location</Text>
                                            <View style={[style.rowSec, style.alignCenter]}>
                                                <TouchableOpacity >
                                                    <Icon name="ios-location" color="#fb6400" size={15} />
                                                </TouchableOpacity>
                                                <Text style={styles.smlabel}> 1258, Stemacho way, Las vegas, Usa, 256951</Text>
                                            </View>
                                        </View>
                                            <View>
                                                <Text style={styles.labelg}>Nearest Provider</Text>                                                
                                            </View>

                                            <View style={[style.noborder]}>
                                                <View style={[style.cardbody, styles.nopadd]}>
                                                    <View style={[style.rowSec, styles.width75]}>
                                                        <View style={styles.cardthumb}>
                                                            <Image source={require('../../assets/images/sr1.png')} style={styles.thumbimg} />
                                                        </View>
                                                        <View style={styles.carddesc}>                                                                                                                          
                                                            <Text style={styles.sheading}>Nikolay thomas</Text>                                                                                                                                                                          
                                                            <Text style={styles.sdate2}>Service Provider</Text>
                                                            <Text style={styles.sdate2}>id: A-001</Text>
                                                        </View>
                                                    </View>
                                                    <View style={[style.rowSec, style.alignCenter]}>
                                                    <TouchableOpacity style={[styles.smbtn, style.Greenbg]} >
                                                        <Icon name="ios-call" color="#fff" size={16} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={[styles.smbtn, style.themebg]} >
                                                        <Icon name="chatbubble-outline" color="#fff" size={16} />
                                                    </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={[style.noborder]}>
                                                <View style={[style.cardbody, styles.nopadd]}>
                                                    <View style={[style.rowSec, styles.width75]}>
                                                        <View style={styles.cardthumb}>
                                                            <Image source={require('../../assets/images/sr4.png')} style={styles.thumbimg} />
                                                        </View>
                                                        <View style={styles.carddesc}>                                                                                                                          
                                                            <Text style={styles.sheading}>Jhone Mak</Text>                                                                                                                                                                          
                                                            <Text style={styles.sdate2}>Service Provider 2</Text>
                                                            <Text style={styles.sdate2}>id: Ac-0025</Text>
                                                        </View>
                                                    </View>
                                                    <View style={[style.rowSec, style.alignCenter]}>
                                                    <TouchableOpacity style={[styles.smbtn, style.Greenbg]} >
                                                        <Icon name="ios-call" color="#fff" size={16} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={[styles.smbtn, style.themebg]} >
                                                        <Icon name="chatbubble-outline" color="#fff" size={16} />
                                                    </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>

                                        </View>
                                    </View>
                                </View>

                            </View>

                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        )
    }
}
