import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import style from '../../../mainstyle'
import styles from './style'

export default class Notification extends Component {
    render() {
        return (
            <SafeAreaView style={style.wrapper}>
                <StatusBar barStyle="dark-content" backgroundColor="transparent" />
                <View style={style.hnavigation}>
                        <TouchableOpacity style={style.iconback} onPress={() => this.props.navigation.goBack()}>
                            <Icon name="chevron-back" color="#fb6400" size={30} />
                        </TouchableOpacity>
                        <View style={style.hwrap}>
                            <Text style={style.navh}>Notifications</Text>
                            <View style={style.righticon}>
                                <TouchableOpacity>
                                    <Icon name="ios-trash-sharp" color="#fb6400" size={24} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                <ScrollView>     
                    <View style={style.container}>
                        <TouchableOpacity style={styles.notificationbox}>
                            <View style={style.avtbox}>
                                <View style={style.avatar}>
                                    <Image source={require('../../assets/images/noti1.png')} style={style.avtimage} />
                                </View>
                            </View>
                            <View style={style.centercontent}>
                                <Text style={style.headingmain} numberOfLines={1} >GoWasteOS  has updated their terms</Text>
                                <View style={[style.rowSec, style.alignCenter]}>
                                    <Icon name="ios-time-outline" color="#777" size={14} />
                                    <Text style={style.msgtext}> 6 June at 8.45 pm</Text>
                                </View>                                
                            </View>
                            <View style={style.colicon}>
                                <Icon name="chevron-forward" color="#1cae81" size={24} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.notificationbox}>
                            <View style={style.avtbox}>
                                <View style={style.avatar}>
                                    <Image source={require('../../assets/images/noti2.png')} style={style.avtimage} />
                                </View>
                            </View>
                            <View style={style.centercontent}>
                                <Text style={style.headingmain} numberOfLines={1} >You have been reported</Text>
                                <View style={[style.rowSec, style.alignCenter]}>
                                    <Icon name="ios-time-outline" color="#777" size={14} />
                                    <Text style={style.msgtext}> 6 June at 8.45 pm</Text>
                                </View>                                
                            </View>
                            <View style={style.colicon}>
                                <Icon name="chevron-forward" color="#1cae81" size={24} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.notificationbox}>
                            <View style={style.avtbox}>
                                <View style={style.avatar}>
                                    <Image source={require('../../assets/images/noti3.png')} style={style.avtimage} />
                                </View>
                                <TouchableOpacity style={style.badgen}>
                                    <Icon name="ios-mail" color="#fff" size={12} />            
                                </TouchableOpacity>
                            </View>
                            <View style={style.centercontent}>
                                <Text style={style.headingmain} numberOfLines={1} >Imran has accepted your invitation</Text>
                                <View style={[style.rowSec, style.alignCenter]}>
                                    <Icon name="ios-time-outline" color="#777" size={14} />
                                    <Text style={style.msgtext}> 6 June at 8.45 pm</Text>
                                </View>                                
                            </View>
                            <View style={style.colicon}>
                                <Icon name="chevron-forward" color="#1cae81" size={24} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.notificationbox}>
                            <View style={style.avtbox}>
                                <View style={style.avatar}>
                                    <Image source={require('../../assets/images/noti1.png')} style={style.avtimage} />
                                </View>
                            </View>
                            <View style={style.centercontent}>
                                <Text style={style.headingmain} numberOfLines={1} >GoWasteOS  has updated their services</Text>
                                <View style={[style.rowSec, style.alignCenter]}>
                                    <Icon name="ios-time-outline" color="#777" size={14} />
                                    <Text style={style.msgtext}> 6 June at 8.45 pm</Text>
                                </View>                                
                            </View>
                            <View style={style.colicon}>
                                <Icon name="chevron-forward" color="#1cae81" size={24} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.notificationbox}>
                            <View style={style.avtbox}>
                                <View style={style.avatar}>
                                    <Image source={require('../../assets/images/noti5.png')} style={style.avtimage} />
                                </View>
                                <TouchableOpacity style={[style.badgen, style.redbg]}>
                                    <Icon name="ios-mail" color="#fff" size={12} />            
                                </TouchableOpacity>
                            </View>
                            <View style={style.centercontent}>
                                <Text style={style.headingmain} numberOfLines={1} >Arsad has accepted your service request</Text>
                                <View style={[style.rowSec, style.alignCenter]}>
                                    <Icon name="ios-time-outline" color="#777" size={14} />
                                    <Text style={style.msgtext}> 6 June at 8.45 pm</Text>
                                </View>                                
                            </View>
                            <View style={style.colicon}>
                                <Icon name="chevron-forward" color="#1cae81" size={24} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.notificationbox}>
                            <View style={style.avtbox}>
                                <View style={style.avatar}>
                                    <Image source={require('../../assets/images/noti6.png')} style={style.avtimage} />
                                </View>
                                <TouchableOpacity style={style.badgen}>
                                    <Icon name="ios-mail" color="#fff" size={12} />            
                                </TouchableOpacity>
                            </View>
                            <View style={style.centercontent}>
                                <Text style={style.headingmain} numberOfLines={1} >Amin has rejected your service request</Text>
                                <View style={[style.rowSec, style.alignCenter]}>
                                    <Icon name="ios-time-outline" color="#777" size={14} />
                                    <Text style={style.msgtext}> 6 June at 8.45 pm</Text>
                                </View>                                
                            </View>
                            <View style={style.colicon}>
                                <Icon name="chevron-forward" color="#1cae81" size={24} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.notificationbox}>
                            <View style={style.avtbox}>
                                <View style={style.avatar}>
                                    <Image source={require('../../assets/images/noti1.png')} style={style.avtimage} />
                                </View>
                            </View>
                            <View style={style.centercontent}>
                                <Text style={style.headingmain} numberOfLines={1} >GoWasteOS  has updated their terms</Text>
                                <View style={[style.rowSec, style.alignCenter]}>
                                    <Icon name="ios-time-outline" color="#777" size={14} />
                                    <Text style={style.msgtext}> 6 June at 8.45 pm</Text>
                                </View>                                
                            </View>
                            <View style={style.colicon}>
                                <Icon name="chevron-forward" color="#1cae81" size={24} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.notificationbox}>
                            <View style={style.avtbox}>
                                <View style={style.avatar}>
                                    <Image source={require('../../assets/images/noti2.png')} style={style.avtimage} />
                                </View>
                            </View>
                            <View style={style.centercontent}>
                                <Text style={style.headingmain} numberOfLines={1} >You have been reported</Text>
                                <View style={[style.rowSec, style.alignCenter]}>
                                    <Icon name="ios-time-outline" color="#777" size={14} />
                                    <Text style={style.msgtext}> 6 June at 8.45 pm</Text>
                                </View>                                
                            </View>
                            <View style={style.colicon}>
                                <Icon name="chevron-forward" color="#1cae81" size={24} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.notificationbox}>
                            <View style={style.avtbox}>
                                <View style={style.avatar}>
                                    <Image source={require('../../assets/images/noti3.png')} style={style.avtimage} />
                                </View>
                                <TouchableOpacity style={style.badgen}>
                                    <Icon name="ios-mail" color="#fff" size={12} />            
                                </TouchableOpacity>
                            </View>
                            <View style={style.centercontent}>
                                <Text style={style.headingmain} numberOfLines={1} >Imran has accepted your invitation</Text>
                                <View style={[style.rowSec, style.alignCenter]}>
                                    <Icon name="ios-time-outline" color="#777" size={14} />
                                    <Text style={style.msgtext}> 6 June at 8.45 pm</Text>
                                </View>                                
                            </View>
                            <View style={style.colicon}>
                                <Icon name="chevron-forward" color="#1cae81" size={24} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.notificationbox}>
                            <View style={style.avtbox}>
                                <View style={style.avatar}>
                                    <Image source={require('../../assets/images/noti1.png')} style={style.avtimage} />
                                </View>
                            </View>
                            <View style={style.centercontent}>
                                <Text style={style.headingmain} numberOfLines={1} >GoWasteOS  has updated their services</Text>
                                <View style={[style.rowSec, style.alignCenter]}>
                                    <Icon name="ios-time-outline" color="#777" size={14} />
                                    <Text style={style.msgtext}> 6 June at 8.45 pm</Text>
                                </View>                                
                            </View>
                            <View style={style.colicon}>
                                <Icon name="chevron-forward" color="#1cae81" size={24} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.notificationbox}>
                            <View style={style.avtbox}>
                                <View style={style.avatar}>
                                    <Image source={require('../../assets/images/noti5.png')} style={style.avtimage} />
                                </View>
                                <TouchableOpacity style={[style.badgen, style.redbg]}>
                                    <Icon name="ios-mail" color="#fff" size={12} />            
                                </TouchableOpacity>
                            </View>
                            <View style={style.centercontent}>
                                <Text style={style.headingmain} numberOfLines={1} >Arsad has accepted your service request</Text>
                                <View style={[style.rowSec, style.alignCenter]}>
                                    <Icon name="ios-time-outline" color="#777" size={14} />
                                    <Text style={style.msgtext}> 6 June at 8.45 pm</Text>
                                </View>                                
                            </View>
                            <View style={style.colicon}>
                                <Icon name="chevron-forward" color="#1cae81" size={24} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.notificationbox}>
                            <View style={style.avtbox}>
                                <View style={style.avatar}>
                                    <Image source={require('../../assets/images/noti6.png')} style={style.avtimage} />
                                </View>
                                <TouchableOpacity style={style.badgen}>
                                    <Icon name="ios-mail" color="#fff" size={12} />            
                                </TouchableOpacity>
                            </View>
                            <View style={style.centercontent}>
                                <Text style={style.headingmain} numberOfLines={1} >Amin has rejected your service request</Text>
                                <View style={[style.rowSec, style.alignCenter]}>
                                    <Icon name="ios-time-outline" color="#777" size={14} />
                                    <Text style={style.msgtext}> 6 June at 8.45 pm</Text>
                                </View>                                
                            </View>
                            <View style={style.colicon}>
                                <Icon name="chevron-forward" color="#1cae81" size={24} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
