import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import style from '../../../mainstyle'
import styles from './style'

export default class BookingHistory extends Component {
    render() {
        return (
            <SafeAreaView style={style.wrapper}>
                <StatusBar barStyle="dark-content" backgroundColor="transparent" />
                <View style={style.hnavigation}>
                        <TouchableOpacity style={style.iconback} onPress={() => this.props.navigation.goBack()}>
                            <Icon name="chevron-back" color="#fb6400" size={30} />
                        </TouchableOpacity>
                        <View style={style.hwrap}>
                            <Text style={style.navh}>Booking Confirmation</Text>
                        </View>
                    </View>
                <ScrollView>                    
                        <View style={[style.container, style.mT2]}>                            
                                <View style={style.card}>
                                    <View style={style.cardbody}>
                                        <View style={styles.inbody}>
                                       <Text style={styles.grtext}>Order Preview</Text>                                      
                                       <View style={styles.rowavt}>
                                           <View style={styles.avt}>
                                                <Icon name="person-circle-outline" color="#212121" size={25} />
                                           </View>
                                           <Text style={styles.label}>Jhone deo</Text>
                                       </View>
                                       <View style={styles.rowavt}>
                                           <View style={styles.avticon}>
                                                <Icon name="location" color="#8898a8" size={25} />
                                           </View>
                                           <Text style={styles.prvtext}>87 Briahill lane Askon, OH, USA</Text>
                                       </View>
                                       <View style={styles.rowavt}>
                                           <View style={styles.avticon}>
                                           <Icon name="calendar" color="#8898a8" size={25} />
                                           </View>
                                           <Text style={styles.prvtext}>10th Set, 2020</Text>
                                       </View>
                                       <View style={styles.rowavt}>
                                           <View style={styles.avticon}>
                                           <Icon name="md-time-outline" color="#8898a8" size={25} />
                                           </View>
                                           <Text style={styles.prvtext}>At 10.00 am</Text>
                                       </View>
                                    </View>
                                    </View>
                                </View>   

                                <View style={style.divgap}>
                                    <TouchableOpacity style={[style.themebtn, style.mT4]} onPress={() => this.props.navigation.navigate('')}>
                                        <Text style={style.btntext}>Confirm</Text>
                                    </TouchableOpacity> 
                                </View>                             
                        </View>
                </ScrollView>
            </SafeAreaView>
            
        )
    }
}
