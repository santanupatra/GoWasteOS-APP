import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native'
import style from '../../../mainstyle'
import styles from './style'

export default class BookingHistory extends Component {
    render() {
        return (
            <SafeAreaView style={style.wrapper}>
                <StatusBar barStyle="dark-content" backgroundColor="transparent" />
                <View style={style.hnavigation}>
                        <TouchableOpacity style={style.iconback} >
                            <Image source={require('../../assets/images/menubar.png')} style={styles.mimg} />
                        </TouchableOpacity>
                        <View style={style.hwrap}>
                            <Text style={style.navh}>Booking History</Text>
                        </View>
                    </View>
                <ScrollView>                    
                        <View style={[style.container, style.mT2]}>                            
                                <View style={style.card}>
                                    <View style={style.cardbody}>
                                        <View style={[style.rowSec, styles.width75]}> 
                                        <View style={styles.carddesc}>
                                            <Text style={styles.sheading}>Service 1</Text>                                           
                                            <Text style={styles.sdate}>Jan 15, 2020 at 10.00 am</Text>                                           
                                        </View>
                                        </View>
                                        <TouchableOpacity style={[style.smbtn, style.cyanbg]}>
                                            <Text style={style.smbtntext}>Running</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={style.card}>
                                    <View style={style.cardbody}>
                                        <View style={[style.rowSec, styles.width75]}> 
                                        <View style={styles.carddesc}>
                                            <Text style={styles.sheading}>Service 2</Text>                                           
                                            <Text style={styles.sdate}>Mar 22, 2020 at 12.45 pm</Text>                                           
                                        </View>
                                        </View>
                                        <TouchableOpacity style={[style.smbtn, style.Greenbg]}>
                                            <Text style={style.smbtntext}>Complete</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={style.card}>
                                    <View style={style.cardbody}>
                                        <View style={[style.rowSec, styles.width75]}> 
                                        <View style={styles.carddesc}>
                                            <Text style={styles.sheading}>Service 3</Text>                                           
                                            <Text style={styles.sdate}>Oct 10, 2020 at 03.00 pm</Text>                                           
                                        </View>
                                        </View>
                                        <TouchableOpacity style={[style.smbtn, style.redbg]}>
                                            <Text style={style.smbtntext}>Canceled</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={style.card}>
                                    <View style={style.cardbody}>
                                        <View style={[style.rowSec, styles.width75]}> 
                                        <View style={styles.carddesc}>
                                            <Text style={styles.sheading}>Service 4</Text>                                           
                                            <Text style={styles.sdate}>Jun 7, 2020 at 10.05 am</Text>                                           
                                        </View>
                                        </View>
                                        <TouchableOpacity style={[style.smbtn, style.yellowbg]}>
                                            <Text style={[style.smbtntext, {color:'#000'}]}>Pending</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={style.card}>
                                    <View style={style.cardbody}>
                                        <View style={[style.rowSec, styles.width75]}> 
                                        <View style={styles.carddesc}>
                                            <Text style={styles.sheading}>Service 1</Text>                                           
                                            <Text style={styles.sdate}>Jan 15, 2020 at 10.00 am</Text>                                           
                                        </View>
                                        </View>
                                        <TouchableOpacity style={[style.smbtn, style.cyanbg]}>
                                            <Text style={style.smbtntext}>Running</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={style.card}>
                                    <View style={style.cardbody}>
                                        <View style={[style.rowSec, styles.width75]}> 
                                        <View style={styles.carddesc}>
                                            <Text style={styles.sheading}>Service 2</Text>                                           
                                            <Text style={styles.sdate}>Mar 22, 2020 at 12.45 pm</Text>                                           
                                        </View>
                                        </View>
                                        <TouchableOpacity style={[style.smbtn, style.Greenbg]}>
                                            <Text style={style.smbtntext}>Complete</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={style.card}>
                                    <View style={style.cardbody}>
                                        <View style={[style.rowSec, styles.width75]}> 
                                        <View style={styles.carddesc}>
                                            <Text style={styles.sheading}>Service 3</Text>                                           
                                            <Text style={styles.sdate}>Oct 10, 2020 at 03.00 pm</Text>                                           
                                        </View>
                                        </View>
                                        <TouchableOpacity style={[style.smbtn, style.redbg]}>
                                            <Text style={style.smbtntext}>Canceled</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={style.card}>
                                    <View style={style.cardbody}>
                                        <View style={[style.rowSec, styles.width75]}> 
                                        <View style={styles.carddesc}>
                                            <Text style={styles.sheading}>Service 4</Text>                                           
                                            <Text style={styles.sdate}>Jun 7, 2020 at 10.05 am</Text>                                           
                                        </View>
                                        </View>
                                        <TouchableOpacity style={[style.smbtn, style.yellowbg]}>
                                            <Text style={[style.smbtntext, {color:'#000'}]}>Pending</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                        </View>
                </ScrollView>
            </SafeAreaView>
            
        )
    }
}
