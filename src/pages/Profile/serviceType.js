import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, StatusBar, ImageBackground, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import style from '../../../mainstyle'
import styles from './style'

export default class ServiceType extends Component {
    render() {
        return (
            <SafeAreaView style={style.wrapper}>
                <StatusBar barStyle="dark-content" backgroundColor="transparent" />
                <View style={style.hnavigation}>
                    <TouchableOpacity style={style.iconback} onPress={() => this.props.navigation.goBack()}>
                        <Icon name="chevron-back" color="#fb6400" size={30} />
                    </TouchableOpacity>
                    <View style={style.hwrap}>
                        <Text style={style.navh}>Service type</Text>                       
                    </View>
                </View>
                <ScrollView>
                    <View style={style.container}>
                        <View style={styles.rds}>
                            <ImageBackground source={require('../../assets/images/type1bg.png')} style={styles.clbgr}>                                
                                <TouchableOpacity style={{width:'100%', height:'100%'}}>
                                    <Text style={styles.typtext} numberOfLines={1}>Recyclable Waste</Text>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                        <View style={styles.rds}>
                            <ImageBackground source={require('../../assets/images/type2bg.png')} style={styles.clbgr}>                                
                                <TouchableOpacity style={{width:'100%', height:'100%'}}>
                                    <Text style={styles.typtext} numberOfLines={1}>Green Waste</Text>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                        <View style={styles.rds}>
                            <ImageBackground source={require('../../assets/images/type3bg.png')} style={styles.clbgr}>                                
                                <TouchableOpacity style={{width:'100%', height:'100%'}}>
                                    <Text style={styles.typtext} numberOfLines={1} >Construction & Demolition Debris.</Text>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                        <View style={styles.rds}>
                            <ImageBackground source={require('../../assets/images/type4bg.png')} style={styles.clbgr}>                                
                                <TouchableOpacity style={{width:'100%', height:'100%'}}>
                                    <Text style={styles.typtext} numberOfLines={1} >Liquid or Solid Household Waste.</Text>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                        <View style={styles.rds}>
                            <ImageBackground source={require('../../assets/images/type5bg.png')} style={styles.clbgr}>                                
                                <TouchableOpacity style={{width:'100%', height:'100%'}}>
                                    <Text style={styles.typtext} numberOfLines={1} >Hazardous Waste</Text>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>                        
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
