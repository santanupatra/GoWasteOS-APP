import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, StatusBar, Image, ScrollView, ImageBackground, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import style from '../../../mainstyle'
import styles from './style'

export default class CurrentLocation extends Component {
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
                        <View style={styles.abscard}>
                            <View style={[style.card, style.noborder]}>
                                <View style={style.cardbody}>
                                    <View style={styles.inrbody}>
                                        <View style={style.mB2}>
                                            <Text style={styles.labelg}>Start</Text>
                                            <View style={[style.rowSec, style.alignCenter]}>
                                                <TouchableOpacity >
                                                    <Icon name="locate-outline" color="#212121" size={15} />
                                                </TouchableOpacity>
                                                <Text style={styles.smlabel}> Current Location</Text>
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
