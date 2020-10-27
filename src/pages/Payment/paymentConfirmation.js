import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, SafeAreaView, StatusBar, } from 'react-native';
import style from '../../../mainstyle';
import styles from './style'

export default class Payment extends Component {
    render() {
        return (
            <SafeAreaView style={[style.wrapper, styles.greenwrap]}>
                <StatusBar backgroundColor="#40b779" barStyle="light-content" />              
                <ScrollView>
                    <View style={style.container}>
                            <View style={styles.logotop}>
                                <Image source={require('../../assets/images/thumbsup.png')} style={styles.logo} />
                            </View> 
                            <View style={styles.succbox}>
                                <Text style={styles.sheading}>Success!</Text>
                                <Text style={styles.price}>You’ve just paid </Text>
                                <Text style={styles.pricevalue}>$77</Text>
                            </View>
                           
                        </View>                          
                </ScrollView> 
                        <TouchableOpacity style={styles.okbtn}>
                            <Text style={style.btntext}>Ok</Text>
                        </TouchableOpacity>               
            </SafeAreaView>            
        )
    }
}
