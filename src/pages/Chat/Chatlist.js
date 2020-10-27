import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import style from '../../../mainstyle'
import styles from './style'

export default class ChatList extends Component {
    render() {
        return (
            <SafeAreaView style={style.wrapper}>
                <StatusBar barStyle="dark-content" backgroundColor="transparent" />
                <View style={style.hnavigation}>
                        <TouchableOpacity style={style.iconback} onPress={() => this.props.navigation.goBack()}>
                            <Icon name="chevron-back" color="#fb6400" size={30} />
                        </TouchableOpacity>
                        <View style={style.hwrap}>
                            <Text style={style.navh}>Messages</Text>
                            <View style={style.righticon}>
                                <TouchableOpacity>
                                    <Icon name="ellipsis-vertical-sharp" color="#fb6400" size={24} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                <ScrollView>     
                    <View style={style.container}>
                        <TouchableOpacity style={styles.chatbox}>
                            <View style={style.avtbox}>
                                <View style={style.avatar}>
                                    <Image source={require('../../assets/images/noti6.png')} style={style.avtimage} />
                                </View>
                            </View>
                            <View style={styles.centercontent}>
                                <Text style={style.headingmain} numberOfLines={1} >Allen Soly</Text>                               
                                <Text style={style.msgtext} numberOfLines={1}> we list the most common diagonal screen size in 36 countries across the world based </Text>
                            </View>
                            <View style={style.colicon}>
                            <Text style={styles.datetext}> 8.45 pm</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chatbox}>
                            <View style={style.avtbox}>
                                <View style={style.avatar}>
                                    <Image source={require('../../assets/images/noti5.png')} style={style.avtimage} />
                                </View>
                            </View>
                            <View style={styles.centercontent}>
                                <Text style={style.headingmain} numberOfLines={1} >Jhone Doe</Text>                               
                                <Text style={style.msgtext} numberOfLines={1}> we list the most common diagonal screen size in 36 countries across the world based </Text>
                            </View>
                            <View style={style.colicon}>
                            <Text style={styles.datetext}> 8.45 pm</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chatbox}>
                            <View style={style.avtbox}>
                                <View style={style.avatar}>
                                    <Image source={require('../../assets/images/noti6.png')} style={style.avtimage} />
                                </View>
                            </View>
                            <View style={styles.centercontent}>
                                <Text style={style.headingmain} numberOfLines={1} >Dhiman Soly</Text>                               
                                <Text style={style.msgtext} numberOfLines={1}> we list the most common diagonal screen size in 36 countries across the world based </Text>
                            </View>
                            <View style={style.colicon}>
                            <Text style={styles.datetext}> 8.45 pm</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chatbox}>
                            <View style={style.avtbox}>
                                <View style={style.avatar}>
                                    <Image source={require('../../assets/images/noti5.png')} style={style.avtimage} />
                                </View>
                            </View>
                            <View style={styles.centercontent}>
                                <Text style={style.headingmain} numberOfLines={1} >Spandan Sen</Text>                               
                                <Text style={style.msgtext} numberOfLines={1}> we list the most common diagonal screen size in 36 countries across the world based </Text>
                            </View>
                            <View style={style.colicon}>
                            <Text style={styles.datetext}> 8.45 pm</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chatbox}>
                            <View style={style.avtbox}>
                                <View style={style.avatar}>
                                    <Image source={require('../../assets/images/noti6.png')} style={style.avtimage} />
                                </View>
                            </View>
                            <View style={styles.centercontent}>
                                <Text style={style.headingmain} numberOfLines={1} >Santanu trump</Text>                               
                                <Text style={style.msgtext} numberOfLines={1}> we list the most common diagonal screen size in 36 countries across the world based </Text>
                            </View>
                            <View style={style.colicon}>
                            <Text style={styles.datetext}> 8.45 pm</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chatbox}>
                            <View style={style.avtbox}>
                                <View style={style.avatar}>
                                    <Image source={require('../../assets/images/noti5.png')} style={style.avtimage} />
                                </View>
                            </View>
                            <View style={styles.centercontent}>
                                <Text style={style.headingmain} numberOfLines={1} >Allen Soly</Text>                               
                                <Text style={style.msgtext} numberOfLines={1}> we list the most common diagonal screen size in 36 countries across the world based </Text>
                            </View>
                            <View style={style.colicon}>
                            <Text style={styles.datetext}> 8.45 pm</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chatbox}>
                            <View style={style.avtbox}>
                                <View style={style.avatar}>
                                    <Image source={require('../../assets/images/noti6.png')} style={style.avtimage} />
                                </View>
                            </View>
                            <View style={styles.centercontent}>
                                <Text style={style.headingmain} numberOfLines={1} >San Jo</Text>                               
                                <Text style={style.msgtext} numberOfLines={1}> we list the most common diagonal screen size in 36 countries across the world based </Text>
                            </View>
                            <View style={style.colicon}>
                            <Text style={styles.datetext}> 8.45 pm</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chatbox}>
                            <View style={style.avtbox}>
                                <View style={style.avatar}>
                                    <Image source={require('../../assets/images/noti5.png')} style={style.avtimage} />
                                </View>
                            </View>
                            <View style={styles.centercontent}>
                                <Text style={style.headingmain} numberOfLines={1} >sam Jonshon</Text>                               
                                <Text style={style.msgtext} numberOfLines={1}> we list the most common diagonal screen size in 36 countries across the world based </Text>
                            </View>
                            <View style={style.colicon}>
                            <Text style={styles.datetext}> 8.45 pm</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chatbox}>
                            <View style={style.avtbox}>
                                <View style={style.avatar}>
                                    <Image source={require('../../assets/images/noti6.png')} style={style.avtimage} />
                                </View>
                            </View>
                            <View style={styles.centercontent}>
                                <Text style={style.headingmain} numberOfLines={1} >Peter Jhon</Text>                               
                                <Text style={style.msgtext} numberOfLines={1}> we list the most common diagonal screen size in 36 countries across the world based </Text>
                            </View>
                            <View style={style.colicon}>
                            <Text style={styles.datetext}> 8.45 pm</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chatbox}>
                            <View style={style.avtbox}>
                                <View style={style.avatar}>
                                    <Image source={require('../../assets/images/noti5.png')} style={style.avtimage} />
                                </View>
                            </View>
                            <View style={styles.centercontent}>
                                <Text style={style.headingmain} numberOfLines={1} >Barak Obama</Text>                               
                                <Text style={style.msgtext} numberOfLines={1}> we list the most common diagonal screen size in 36 countries across the world based </Text>
                            </View>
                            <View style={style.colicon}>
                            <Text style={styles.datetext}> 8.45 pm</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chatbox}>
                            <View style={style.avtbox}>
                                <View style={style.avatar}>
                                    <Image source={require('../../assets/images/noti6.png')} style={style.avtimage} />
                                </View>
                            </View>
                            <View style={styles.centercontent}>
                                <Text style={style.headingmain} numberOfLines={1} >Allen Soly</Text>                               
                                <Text style={style.msgtext} numberOfLines={1}> we list the most common diagonal screen size in 36 countries across the world based </Text>
                            </View>
                            <View style={style.colicon}>
                            <Text style={styles.datetext}> 8.45 pm</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
