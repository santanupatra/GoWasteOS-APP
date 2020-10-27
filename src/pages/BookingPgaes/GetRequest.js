import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import style from '../../../mainstyle'
import styles from './style'

export default class GetRequest extends Component {
    render() {
        return (
            <SafeAreaView style={style.wrapper}>
                <StatusBar barStyle="dark-content" backgroundColor="transparent" />
                <View style={style.hnavigation}>
                        <TouchableOpacity style={style.iconback} onPress={() => this.props.navigation.goBack()}>
                            <Icon name="chevron-back" color="#fb6400" size={30} />
                        </TouchableOpacity>
                        <View style={style.hwrap}>
                            <Text style={style.navh}>Get Request</Text>
                            <View style={style.righticon}>
                                <TouchableOpacity>
                                    <Icon name="ios-search" color="#fb6400" size={24} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                <ScrollView>                    
                        <View style={[style.container]}>  
                        <View style={style.datedevider}>
                            <Text style={style.datemute}>22 Sep, 2020</Text>
                        </View>                          
                            <View style={[style.card, style.noborder]}>
                                <View style={style.cardbody}>
                                    <View style={[style.rowSec, styles.width75]}> 
                                        <View style={style.cardthumb}>
                                            <Image source={require('../../assets/images/sr1.png')} style={style.thumbimg} />
                                        </View>
                                    <View style={styles.carddesc}>
                                        <View style={style.rowSec}>
                                        <Text style={[styles.sheading, {color:'#484848'}]}>Service Id :</Text> 
                                        <Text style={styles.sheading}> 001A</Text> 
                                        </View>  
                                        <View style={[style.rowSec, style.alignCenter]}>
                                            <Icon name="ios-location" color="#fb6400" size={14} />
                                            <Text style={[styles.sdate2, style.mb0]}> A-14 Sikago, USA</Text> 
                                        </View>                                        
                                        <View style={[style.rowSec, style.alignCenter]}>
                                            <Icon name="ios-time-outline" color="#fb6400" size={14} />
                                            <Text style={[styles.sdate2, style.mb0]}>11:15 am</Text> 
                                        </View>                                        
                                                                                 
                                    </View>
                                    </View>
                                   
                                </View>
                            </View>
                            <View style={[style.card, style.noborder]}>
                                <View style={style.cardbody}>
                                    <View style={[style.rowSec, styles.width75]}> 
                                        <View style={style.cardthumb}>
                                            <Image source={require('../../assets/images/sr2.png')} style={style.thumbimg} />
                                        </View>
                                    <View style={styles.carddesc}>
                                        <View style={style.rowSec}>
                                        <Text style={[styles.sheading, {color:'#484848'}]}>Service Id :</Text> 
                                        <Text style={styles.sheading}> 0012AB</Text> 
                                        </View>  
                                        <View style={[style.rowSec, style.alignCenter]}>
                                            <Icon name="ios-location" color="#fb6400" size={14} />
                                            <Text style={[styles.sdate2, style.mb0]} numberOfLines={1}> C-18 camack Street, New york</Text> 
                                        </View>                                        
                                        <View style={[style.rowSec, style.alignCenter]}>
                                            <Icon name="ios-time-outline" color="#fb6400" size={14} />
                                            <Text style={[styles.sdate2, style.mb0]}>10:45 am</Text> 
                                        </View>                                 
                                    </View>
                                    </View>                                   
                                </View>
                            </View>
                            <View style={[style.card, style.noborder]}>
                                <View style={style.cardbody}>
                                    <View style={[style.rowSec, styles.width75]}> 
                                        <View style={style.cardthumb}>
                                            <Image source={require('../../assets/images/sr3.png')} style={style.thumbimg} />
                                        </View>
                                    <View style={styles.carddesc}>
                                        <View style={style.rowSec}>
                                        <Text style={[styles.sheading, {color:'#484848'}]}>Service Id :</Text> 
                                        <Text style={styles.sheading}> AC-158</Text> 
                                        </View>  
                                        <View style={[style.rowSec, style.alignCenter]}>
                                            <Icon name="ios-location" color="#fb6400" size={14} />
                                            <Text style={[styles.sdate2, style.mb0]}> 76 A MangoLane , USA</Text> 
                                        </View>                                        
                                        <View style={[style.rowSec, style.alignCenter]}>
                                            <Icon name="ios-time-outline" color="#fb6400" size={14} />
                                            <Text style={[styles.sdate2, style.mb0]}>03:00 pm</Text> 
                                        </View>                                        
                                                                                 
                                    </View>
                                    </View>                                    
                                </View>
                            </View>
                            <View style={style.datedevider}>
                                <Text style={style.datemute}>21 Sep, 2020</Text>
                            </View> 
                            <View style={[style.card, style.noborder]}>
                                <View style={style.cardbody}>
                                    <View style={[style.rowSec, styles.width75]}> 
                                        <View style={style.cardthumb}>
                                            <Image source={require('../../assets/images/sr4.png')} style={style.thumbimg} />
                                        </View>
                                    <View style={styles.carddesc}>
                                        <View style={style.rowSec}>
                                        <Text style={[styles.sheading, {color:'#484848'}]}>Service Id :</Text> 
                                        <Text style={styles.sheading}> 001A</Text> 
                                        </View>  
                                        <View style={[style.rowSec, style.alignCenter]}>
                                            <Icon name="ios-location" color="#fb6400" size={14} />
                                            <Text style={[styles.sdate2, style.mb0]}> A-14 Sikago, USA</Text> 
                                        </View>                                        
                                        <View style={[style.rowSec, style.alignCenter]}>
                                            <Icon name="ios-time-outline" color="#fb6400" size={14} />
                                            <Text style={[styles.sdate2, style.mb0]}>11:15 am</Text> 
                                        </View>                                        
                                                                                 
                                    </View>
                                    </View>                                   
                                </View>
                            </View>
                            <View style={[style.card, style.noborder]}>
                                <View style={style.cardbody}>
                                    <View style={[style.rowSec, styles.width75]}> 
                                        <View style={style.cardthumb}>
                                            <Image source={require('../../assets/images/sr5.png')} style={style.thumbimg} />
                                        </View>
                                    <View style={styles.carddesc}>
                                        <View style={style.rowSec}>
                                        <Text style={[styles.sheading, {color:'#484848'}]}>Service Id :</Text> 
                                        <Text style={styles.sheading}> 0012AB</Text> 
                                        </View>  
                                        <View style={[style.rowSec, style.alignCenter]}>
                                            <Icon name="ios-location" color="#fb6400" size={14} />
                                            <Text style={[styles.sdate2, style.mb0]} numberOfLines={1}> C-18 camack Street, New york</Text> 
                                        </View>                                        
                                        <View style={[style.rowSec, style.alignCenter]}>
                                            <Icon name="ios-time-outline" color="#fb6400" size={14} />
                                            <Text style={[styles.sdate2, style.mb0]}>10:45 am</Text> 
                                        </View>                                        
                                                                                 
                                    </View>
                                    </View>                                   
                                </View>
                            </View>
                            <View style={[style.card, style.noborder]}>
                                <View style={style.cardbody}>
                                    <View style={[style.rowSec, styles.width75]}> 
                                        <View style={style.cardthumb}>
                                            <Image source={require('../../assets/images/sr6.png')} style={style.thumbimg} />
                                        </View>
                                    <View style={styles.carddesc}>
                                        <View style={style.rowSec}>
                                        <Text style={[styles.sheading, {color:'#484848'}]}>Service Id :</Text> 
                                        <Text style={styles.sheading}> AC-158</Text> 
                                        </View>  
                                        <View style={[style.rowSec, style.alignCenter]}>
                                            <Icon name="ios-location" color="#fb6400" size={14} />
                                            <Text style={[styles.sdate2, style.mb0]}> 76 A MangoLane , USA</Text> 
                                        </View>                                        
                                        <View style={[style.rowSec, style.alignCenter]}>
                                            <Icon name="ios-time-outline" color="#fb6400" size={14} />
                                            <Text style={[styles.sdate2, style.mb0]}>03:00 pm</Text> 
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
