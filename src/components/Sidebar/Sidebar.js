import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './style'

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView style={styles.sidebar}>
                <View style={styles.sidewrap}>
                        <View style={styles.profiletop}>
                            <View style={styles.profileround} >
                                <Image source={require('../../assets/images/profile.png')} style={styles.profileimg} />
                                <TouchableOpacity style={styles.profilebadge}>
                                        <Icon name="camera" color="#1cae81" size={16} />
                                    </TouchableOpacity>
                            </View>
                            <View style={styles.procontent}>                           
                                <Text style={styles.namepro}>Aliga parker</Text>                                
                            </View>
                        </View>
                        <ScrollView>
                            <View style={styles.menuwrap}>
                                <TouchableOpacity style={styles.menulink}> 
                                    <View style={styles.imgbx}>
                                        <Image source={require('../../assets/images/micon1.png')} style={styles.micon} /> 
                                    </View>
                                    <Text style={styles.linktext}>About</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.menulink}> 
                                    <View style={styles.imgbx}>
                                        <Image source={require('../../assets/images/micon2.png')} style={styles.micon} /> 
                                    </View> 
                                <Text style={[styles.linktext, styles.activetext]}>Notifications</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.menulink}>
                                    <View style={styles.imgbx}>
                                        <Image source={require('../../assets/images/micon3.png')} style={styles.micon} /> 
                                    </View>
                                   <Text style={styles.linktext}>Invite friends</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.menulink}> 
                                    <View style={styles.imgbx}>
                                        <Image source={require('../../assets/images/micon4.png')} style={styles.micon} /> 
                                    </View>
                                    <Text style={styles.linktext}>Terms & Condition</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.menulink}> 
                                    <View style={styles.imgbx}>
                                        <Image source={require('../../assets/images/micon5.png')} style={styles.micon} /> 
                                    </View> 
                                    <Text style={styles.linktext}>Promos</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.menulink}> 
                                    <View style={styles.imgbx}>
                                        <Image source={require('../../assets/images/micon6.png')} style={styles.micon} /> 
                                    </View>
                                    <Text style={styles.linktext}>Help</Text>                                    
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.menulink}>  
                                    <View style={styles.imgbx}>
                                        <Image source={require('../../assets/images/micon7.png')} style={styles.micon} /> 
                                    </View> 
                                    <Text style={styles.linktext}>Change password</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.menulink}>  
                                    <View style={styles.imgbx}>
                                        <Image source={require('../../assets/images/micon8.png')} style={styles.micon} /> 
                                    </View>
                                    <Text style={styles.linktext}>Logout</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                </View>
            </SafeAreaView>
           
        )
    }
}
