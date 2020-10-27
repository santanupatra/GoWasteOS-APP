import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import style from '../../../mainstyle';
import styles from './style'

export default class Thankyou extends Component {
    render() {
        return (
            <SafeAreaView style={style.wrapper}>
                 <StatusBar backgroundColor="transparent" barStyle="dark-content" />
                 <ScrollView>
                    <View style={style.container}>
                        <View style={[style.pT5, style.rowCenter, style.mT4]}>
                            <Icon name="checkmark-circle-outline" color="#1cae81" size={120} />
                        </View>
                        <Text style={styles.thanktext}> Thank You! </Text>
                        <Text style={styles.thankline}>You have booked successfully</Text>

                        <View style={style.divgap}>
                            <View style={style.rowCenter}>
                                <TouchableOpacity style={styles.homebtn} onPress={() => this.props.navigation.navigate('Home')}>
                                        <Image source={require('../../assets/images/homebtn.png')} style={styles.btnimg}></Image>
                                </TouchableOpacity>
                            </View>   
                        </View>
                    </View>
                 </ScrollView>                
            </SafeAreaView>            
        )
    }
}
