import React, { Component, useState } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, StatusBar, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import New from './NewBooking';
import Upcoming from './UpcomingBooking';
import Past from './PastBooking';
import style from '../../../mainstyle'
import styles from './style'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
    <View style={[styles.scene,]}>
        <New />
    </View>
  );
   
  const SecondRoute = () => (
    <View style={[styles.scene,]}>
        <Past />
    </View>
  );
  const ThirdRoute = () => (
    <View style={[styles.scene,]}>
        <Upcoming />
    </View>
  );

  const initialLayout = { width: Dimensions.get('window').width };

export default function BookingDetails() {   
    const [index, setIndex] = React.useState(0);
        const [routes] = React.useState([
            { key: 'first', title: 'New' },
            { key: 'second', title: 'Past' },
            { key: 'Third', title: 'Upcoming' },
        ]);
        
        const renderScene = SceneMap({
            first: FirstRoute,
            second: SecondRoute,
            Third: ThirdRoute,
        });
        return (
            <SafeAreaView style={style.wrapper}>
                <StatusBar barStyle="dark-content" backgroundColor="transparent" />
                <View style={style.hnavigation}>
                        <TouchableOpacity style={style.iconback} onPress={() => this.props.navigation.goBack()}>
                            <Icon name="chevron-back" color="#fb6400" size={30} />
                        </TouchableOpacity>
                        <View style={style.hwrap}>
                            <Text style={style.navh}>Booking Details</Text>
                            <View style={style.righticon}>
                                <TouchableOpacity>
                                    <Icon name="ios-trash" color="#fb6400" size={24} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View> 
                   
                    <TabView
                        navigationState={{ index, routes }}
                        renderScene={renderScene}
                        onIndexChange={setIndex}
                        initialLayout={initialLayout}
                        renderTabBar={(props) => {
                            return (
                              <TabBar
                                {...props}
                                indicatorStyle={styles.indicator}
                                style={styles.tab}
                                inactiveColor={'#b5b5b5'}
                                activeColor={'#0a8791'}
                                labelStyle={styles.label}
                              />
                            );
                          }}
                        />
                                  
            </SafeAreaView>
            
        );
    }

