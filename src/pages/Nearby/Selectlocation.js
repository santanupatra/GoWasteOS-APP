import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, StatusBar, Image, ScrollView, ImageBackground, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import IconFont from 'react-native-vector-icons/FontAwesome'
import style from '../../../mainstyle'
import styles from './style'

export default class SelectLocation extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ImageBackground source={require('../../assets/images/crmap.png')} style={styles.wrappers}>
            <SafeAreaView style={[style.wrapper, { position: 'relative', backgroundColor:'transparent' }]}>
                <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
                <View style={[style.hnavigation, style.mT3]}>
                        <TouchableOpacity style={style.iconback} onPress={this.props.navigation.openDrawer}>
                            <Image source={require('../../assets/images/menubar.png')} style={style.mimg} />
                        </TouchableOpacity>
                    <View style={style.hwrap}>
                        <Text style={style.navh}></Text>
                        <View style={style.righticon}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Notification')}>
                                <Icon name="ios-notifications-circle" color="#fb6400" size={28} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={style.container}>
                        <View style={styles.srchwrap}>
                            <View style={styles.srchbox}>
                                <TouchableOpacity >
                                    <Icon name="ios-search-outline" color="#212121" size={22} />
                                </TouchableOpacity>
                                <TextInput placeholder="My address" placeholderTextColor="#6a6a6a" style={styles.srch}/>
                                <TouchableOpacity >
                                    <Icon name="ios-location" color="#212121" size={22} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.abscard, {marginTop:'60%'}]}>
                            <View style={[style.card, style.noborder]}>
                                <View style={style.cardbody}>
                                    <View style={styles.inrbody}>
                                        <View style={style.mB2}>
                                            <Text style={styles.labelg}>Select Location</Text>
                                            <View style={[style.rowSec, style.alignCenter]}>
                                                <TouchableOpacity style={[styles.btntype, style.themebg]} >
                                                    <Text style={[styles.typtext, style.whitetext]}>Home</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={styles.btntype} >
                                                    <Text style={styles.typtext}>Work</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={styles.btntype} >
                                                    <Text style={styles.typtext}>Other</Text>
                                                </TouchableOpacity>                                                
                                            </View>
                                        </View>

                                        <View style={styles.mB1}>
                                            <View style={[style.rowSec]}>
                                                <TouchableOpacity style={style.mR1}>
                                                    <IconFont name="circle-thin" color="#212121" size={10} />
                                                </TouchableOpacity>
                                                <View style={styles.width95}>
                                                    <Text style={styles.inputlabel}>Start</Text>
                                                    <TextInput placeholder="Current Location here" placeholderTextColor="#777" style={styles.linput} />
                                                </View>
                                            </View>                                           
                                        </View>
                                        <View style={styles.mB1}>
                                            <View style={[style.rowSec]}>
                                                <TouchableOpacity style={style.mR1}>
                                                    <IconFont name="circle-thin" color="#fb6400" size={10} />
                                                </TouchableOpacity>
                                                <View style={styles.width95}>
                                                <Text style={styles.inputlabel}>End</Text>
                                                <TextInput placeholder="Enter Destination here" placeholderTextColor="#777" style={styles.linput} />
                                                </View>
                                            </View>                                           
                                        </View>
                                                                            

                                        <View style={style.rowCenter}>
                                            <TouchableOpacity style={styles.grbtn} >
                                                <Text style={styles.btnlabel}>Send Request</Text>
                                                <Icon name="ios-paper-plane-sharp" color="#fff" size={15} />
                                            </TouchableOpacity>
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
