import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, Image, StatusBar, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import style from '../../../mainstyle';
import styles from './style';

export default class swiper extends Component {
    render() {
        return (
            <SafeAreaView style={styles.wrapper}>
                <StatusBar barStyle="dark-content" backgroundColor="#fff"  />               
                    <View style={styles.container}>
                        <View style={styles.sliderwrap}>
                            <Swiper style={styles.slider} showsButtons={false} loop={false}  
                            dot={<View style={{ backgroundColor: '#c8c8d8', width:10, height: 10, borderRadius: 100, marginLeft: 2, marginRight:2 }}/>}
                            activeDot={<View style={{ backgroundColor: '#1cae81', width:10, height: 10, borderRadius: 100, marginLeft: 2, marginRight:2 }} />}>
                                <View style={styles.slide1}>
                                    <Image source={require('../../assets/images/welcome.png')} style={styles.slideimg}></Image>
                                    <Text style={styles.slideheading}>Welcome</Text>
                                    <Text style={styles.slidetext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, .</Text>
                                </View>
                                <View style={styles.slide1}>
                                    <Image source={require('../../assets/images/welcome.png')} style={styles.slideimg}></Image>
                                    <Text style={styles.slideheading}>Welcome</Text>
                                    <Text style={styles.slidetext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, .</Text>
                                </View>
                                <View style={styles.slide1}>
                                    <Image source={require('../../assets/images/welcome.png')} style={styles.slideimg}></Image>
                                    <Text style={styles.slideheading}>Welcome</Text>
                                    <Text style={styles.slidetext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, .</Text>
                                </View>
                            </Swiper>
                        </View>

                        <View style={style.rowCenter}>
                            <TouchableOpacity style={styles.nextbtn} onPress={() => this.props.navigation.navigate('Login')}>
                                    <Image source={require('../../assets/images/next-btn.png')} style={styles.btnimg}></Image>
                            </TouchableOpacity>
                        </View>                        
                    </View>               
            </SafeAreaView>           
        )
    }
}
