import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import style from '../../../mainstyle'
import styles from './style'
import Modal from 'react-native-modal';

export default class BookService extends Component {
    constructor(props){
            super(props);     
        }
    state = {
        isModalVisible: false,
      };
     
      toggleModal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});
      };
    render() {
        return (
            <SafeAreaView style={style.wrapper}>
                <StatusBar barStyle="dark-content" backgroundColor="transparent" />

                <Modal isVisible={this.state.isModalVisible}>
                    <View style={style.modalcenter}>
                        <Text style={style.mheading}>Rating Us</Text>
                        <View style={[style.rowCenter, style.alignCenter ]}>
                            <Icon name="star-sharp" color="#fff" size={20} style={style.mR1} />
                            <Icon name="star-sharp" color="#fff" size={20} style={style.mR1} />
                            <Icon name="star-sharp" color="#fff" size={20} style={style.mR1} />
                            <Icon name="star-half-sharp" color="#fff" size={20} style={style.mR1} />
                            <Icon name="star-outline" color="#fff" size={20} style={style.mR1} />
                        </View>
                            
                            <TouchableOpacity style={style.whitebtn} onPress={this.toggleModal}>
                                <Text style={style.wbttext}>Submit</Text>
                            </TouchableOpacity>
                    </View>
                </Modal>
                
                <View style={style.hnavigation}>
                        <TouchableOpacity style={style.iconback} onPress={() => this.props.navigation.goBack()}>
                            <Icon name="chevron-back" color="#fb6400" size={30} />
                        </TouchableOpacity>
                        <View style={style.hwrap}>
                            <Text style={style.navh}>Book Services</Text>
                        </View>
                    </View>
                <ScrollView>
                    <View style={styles.calpart}>
                        <View style={style.container}>
                            <Text style={styles.label}>Book by</Text>
                            <View style={[style.frmbetween, style.mT2]}>
                                <Text style={styles.label}>Date & Time :</Text>
                                <View style={styles.dtwrap}>
                                    <View style={style.mR1}>
                                        <Text style={styles.label}>15th Set, 2020</Text>
                                    </View>
                                    <Icon name="calendar" color="#fb6400" size={22} />
                                </View>
                            </View>
                            <View style={[style.frmbetween]}>
                                <Text style={styles.label}>Weekly:</Text>                                
                            </View>
                            <View style={[style.frmbetween, styles.daywrap]}>
                                <TouchableOpacity style={styles.day}>
                                    <Text style={styles.labelday} numberOfLines={1}>Sunday</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.day}>
                                    <Text style={styles.labelday} numberOfLines={1}>Monday</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.day, styles.activegreen]}>
                                    <Text style={[styles.labelday, styles.whitetext]} numberOfLines={1}>Tuesday</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.day}>
                                    <Text style={styles.labelday} numberOfLines={1}>Wednesday</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.day}>
                                    <Text style={styles.labelday} numberOfLines={1}>Thursday</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.day, styles.activegreen]}>
                                    <Text style={[styles.labelday, styles.whitetext]} numberOfLines={1}>Friday</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.day}>
                                    <Text style={styles.labelday} numberOfLines={1}>Saturday</Text>
                                </TouchableOpacity>
                                                                
                            </View>
                            
                        </View>                        
                    </View>
                    <View >
                        <View style={style.container}>
                            <Text style={[styles.label, style.mB2]}>Services List</Text>

                                <View style={style.card}>
                                    <View style={style.cardbody}>
                                        <View style={[style.rowSec, styles.width75]}>                                         
                                        <View style={style.cardthumb}>
                                            <Image source={require('../../assets/images/s1.png')} style={style.thumbimg} />
                                        </View>
                                        <View style={styles.carddesc}>
                                            <Text style={styles.sheading}>Service 1</Text>
                                            <View style={styles.rowbetween}>
                                                <View style={styles.rwrap}>
                                                     <Text style={styles.mutetext}>Rating</Text>
                                                     <View style={style.rowSec}>
                                                        <Icon name="star-sharp" color="#fbc201" size={20} />
                                                        <Text style={styles.rtext}>4.0</Text>
                                                        <TouchableOpacity style={styles.rateus} onPress={this.toggleModal}>
                                                            <Text style={styles.rttext}>Rate Us</Text>
                                                        </TouchableOpacity>
                                                     </View>
                                                </View>
                                                <View style={styles.prwrap}>
                                                    <Text style={styles.mutetext}>Price</Text>
                                                    <Text style={styles.plabel}>$50</Text>
                                                </View>                                                
                                            </View>          
                                        </View>
                                        </View>
                                        <TouchableOpacity style={style.smbtn}>
                                            <Text style={style.smbtntext}>Book</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={style.card}>
                                    <View style={style.cardbody}>
                                        <View style={[style.rowSec, styles.width75]}>                                         
                                        <View style={style.cardthumb}>
                                            <Image source={require('../../assets/images/s2.png')} style={style.thumbimg} />
                                        </View>
                                        <View style={styles.carddesc}>
                                            <Text style={styles.sheading}>Service 2</Text>
                                            <View style={styles.rowbetween}>
                                                <View style={styles.rwrap}>
                                                     <Text style={styles.mutetext}>Rating</Text>
                                                     <View style={style.rowSec}>
                                                        <Icon name="star-sharp" color="#fbc201" size={20} />
                                                        <Text style={styles.rtext}>3.0</Text>
                                                        <TouchableOpacity style={styles.rateus} onPress={this.toggleModal}>
                                                            <Text style={styles.rttext}>Rate Us</Text>
                                                        </TouchableOpacity>
                                                     </View>
                                                </View>
                                                <View style={styles.prwrap}>
                                                    <Text style={styles.mutetext}>Price</Text>
                                                    <Text style={styles.plabel}>$30</Text>
                                                </View>                                                
                                            </View>
                                        </View>
                                        </View>
                                        <TouchableOpacity style={style.smbtn}>
                                            <Text style={style.smbtntext}>Book</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={style.card}>
                                    <View style={style.cardbody}>
                                        <View style={[style.rowSec, styles.width75]}>                                         
                                        <View style={style.cardthumb}>
                                            <Image source={require('../../assets/images/s3.png')} style={style.thumbimg} />
                                        </View>
                                        <View style={styles.carddesc}>
                                            <Text style={styles.sheading}>Service 3</Text>
                                            <View style={styles.rowbetween}>
                                                <View style={styles.rwrap}>
                                                     <Text style={styles.mutetext}>Rating</Text>
                                                     <View style={style.rowSec}>
                                                        <Icon name="star-sharp" color="#fbc201" size={20} />
                                                        <Text style={styles.rtext}>4.0</Text>
                                                        <TouchableOpacity style={styles.rateus} onPress={this.toggleModal}>
                                                            <Text style={styles.rttext}>Rate Us</Text>
                                                        </TouchableOpacity>
                                                     </View>
                                                </View>
                                                <View style={styles.prwrap}>
                                                    <Text style={styles.mutetext}>Price</Text>
                                                    <Text style={styles.plabel}>$50</Text>
                                                </View>                                                
                                            </View>
                                        </View>
                                        </View>
                                        <TouchableOpacity style={style.smbtn}>
                                            <Text style={style.smbtntext}>Book</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={style.card}>
                                    <View style={style.cardbody}>
                                        <View style={[style.rowSec, styles.width75]}>                                         
                                        <View style={style.cardthumb}>
                                            <Image source={require('../../assets/images/s4.png')} style={style.thumbimg} />
                                        </View>
                                        <View style={styles.carddesc}>
                                            <Text style={styles.sheading}>Service 4</Text>
                                            <View style={styles.rowbetween}>
                                                <View style={styles.rwrap}>
                                                     <Text style={styles.mutetext}>Rating</Text>
                                                     <View style={style.rowSec}>
                                                        <Icon name="star-sharp" color="#fbc201" size={20} />
                                                        <Text style={styles.rtext}>4.0</Text>
                                                        <TouchableOpacity style={styles.rateus} onPress={this.toggleModal}>
                                                            <Text style={styles.rttext}>Rate Us</Text>
                                                        </TouchableOpacity>
                                                     </View>
                                                </View>
                                                <View style={styles.prwrap}>
                                                    <Text style={styles.mutetext}>Price</Text>
                                                    <Text style={styles.plabel}>$70</Text>
                                                </View>                                                
                                            </View>
                                        </View>
                                        </View>
                                        <TouchableOpacity style={style.smbtn}>
                                            <Text style={style.smbtntext}>Book</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>


                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
            
        )
    }
}
