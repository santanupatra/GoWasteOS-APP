import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, StatusBar, Image, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import IconFont from 'react-native-vector-icons/FontAwesome'
import style from '../../../mainstyle'
import styles from './style'

export default class EditProfile extends Component {
    render() {
        return (
            <SafeAreaView style={style.wrapper}>
                <StatusBar barStyle="dark-content" backgroundColor="transparent" />
                <View style={style.hnavigation}>
                    <TouchableOpacity style={style.iconback} onPress={() => this.props.navigation.goBack()}>
                        <Icon name="chevron-back" color="#fb6400" size={30} />
                    </TouchableOpacity>
                    <View style={style.hwrap}>
                        <Text style={style.navh}>Edit Profile</Text>
                        <View style={style.righticon}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                                <Text style={style.righttext}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <KeyboardAvoidingView>
                    <ScrollView>
                        <View style={[style.container, styles.bgwhite]}>
                            <View style={styles.profilewrap}>
                                <View style={styles.profileimgwrap} >
                                    <Image source={require('../../assets/images/profile.png')} style={styles.profileimg} />
                                    <TouchableOpacity style={styles.profilebadge}>
                                        <Icon name="camera" color="#1cae81" size={20} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={style.mT2}>
                                <Text style={[styles.labelgray]}>Public</Text>
                                <View style={styles.grayrow}>
                                    <Text style={styles.label}>Name</Text>
                                    <View style={[style.rowSec, style.alignCenter]}>
                                        <TextInput style={styles.formtext} defaultValue="Jhone Deo" ></TextInput>
                                        <IconFont name="pencil" color="#1cae81" size={15} style={style.mL1} />
                                    </View>
                                </View>
                                <View style={styles.grayrow}>
                                    <Text style={styles.label}>Location</Text>
                                    <View style={[style.rowSec, style.alignCenter]}>
                                        <TextInput style={styles.formtext} defaultValue="Las vegas, Usa, 256951" ></TextInput>
                                        <IconFont name="pencil" color="#1cae81" size={15} style={style.mL1} />
                                    </View>
                                </View>
                                <View style={styles.grayrow}>
                                    <Text style={styles.label}>Gender</Text>
                                    <View style={[style.rowSec, style.alignCenter]}>
                                        <TextInput style={styles.formtext} defaultValue="Female" ></TextInput>
                                        <IconFont name="pencil" color="#1cae81" size={15} style={style.mL1} />
                                    </View>
                                </View>
                                <Text style={[styles.labelgray]}>Private</Text>
                                <View style={styles.grayrow}>
                                    <Text style={styles.label}>Email</Text>
                                    <View style={[style.rowSec, style.alignCenter]}>
                                        <TextInput style={styles.formtext} defaultValue="info32@info.com" ></TextInput>
                                        <IconFont name="pencil" color="#1cae81" size={15} style={style.mL1} />
                                    </View>
                                </View>
                                <View style={styles.grayrow}>
                                    <Text style={styles.label}>Phone</Text>
                                    <View style={[style.rowSec, style.alignCenter]}>
                                        <TextInput style={styles.formtext} defaultValue="236 - 258 - 1245" ></TextInput>
                                        <IconFont name="pencil" color="#1cae81" size={15} style={style.mL1} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}
