import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, StatusBar, Image, ScrollView, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import IconFont from 'react-native-vector-icons/FontAwesome'
import style from '../../../mainstyle'
import styles from './style'

export default class Nearby extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ImageBackground source={require('../../assets/images/map.png')} style={styles.wrappers}>
            <SafeAreaView style={[style.wrapper, { position: 'relative', backgroundColor:'transparent' }]}>
                <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
                <View style={[style.hnavigation, style.mT3]}>
                    <TouchableOpacity style={style.iconback} onPress={() => this.props.navigation.goBack()}>
                        <Icon name="chevron-back" color="#fb6400" size={30} />
                    </TouchableOpacity>
                    <View style={style.hwrap}>
                        <Text style={style.navh}>Tracking on map</Text>
                        <View style={style.righticon}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                                <IconFont name="trash" color="#fb6400" size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={style.container}>
                        <View style={styles.abscard}>
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
                                        <View style={style.mB2}>
                                            <Text style={styles.labelg}>Short Route</Text>
                                            <View style={[style.rowSec, style.alignCenter]}>
                                                <TouchableOpacity style={style.mR1}>
                                                    <IconFont name="circle" color="#0a8791" size={15} />
                                                </TouchableOpacity>
                                                <Text style={styles.smlabel}> A-1 Camak St</Text>
                                            </View>
                                            <View style={styles.hline}></View>
                                            <View style={[style.rowSec, style.alignCenter]}>
                                                <TouchableOpacity style={style.mR1}>
                                                    <IconFont name="circle" color="#fb6400" size={15} />
                                                </TouchableOpacity>
                                                <Text style={styles.smlabel}> A-1 Camak St</Text>
                                            </View>
                                        </View>

                                        <View style={style.rowCenter}>
                                            <TouchableOpacity style={styles.grbtn} >
                                                <Text style={styles.btnlabel}> Save Route</Text>
                                                <Icon name="ios-save-outline" color="#fff" size={15} />
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
