import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Sidebar from '../components/Sidebar/Sidebar'
import Swiper from '../pages/welcome/swiper'
import Login from '../pages/LoginPages/Login'
import SignUp from '../pages/LoginPages/Signup'
import Register from '../pages/LoginPages/Registration'
import OtpInput from '../pages/LoginPages/otp'
import ForgotPassword from '../pages/LoginPages/ForgotPassword'
import ResetPassword from '../pages/LoginPages/Resetpassword'
import Thankyou from '../pages/LoginPages/Thankyou'
import BookService from '../pages/BookingPgaes/BookService'
import Profile from '../pages/Profile/Profile'
import Notification from '../pages/Notification/Notification'
import Nearby from '../pages/Nearby/Nearby'
import Chat from '../pages/Chat/Chatlist'
import History from '../pages/BookingPgaes/BookingHistory'
import ConfirmBooking from '../pages/BookingPgaes/BookingConfirmation'
import BookingList from '../pages/BookingPgaes/BookingCofirmList'
import GetRequest from '../pages/BookingPgaes/GetRequest'
import ServiceType from '../pages/Profile/serviceType'
import EditProfile from '../pages/Profile/editProfile'
import CurrentLocation from '../pages/Nearby/CurrentLocation'
import TrackRoute from '../pages/Nearby/TrackRoute'
import RequestPlaces from '../pages/Nearby/RequestPlaces'
import SelectLocation from '../pages/Nearby/Selectlocation'
import Payment from '../pages/Payment/payment'
import paymentconfirm from '../pages/Payment/paymentConfirmation'
import TotalPayment from '../pages/Payment/TotalPayment'
import BookingDetails from '../pages/BookingPgaes/BookingDetails'



const AuthStack = createStackNavigator(
    {

      Swiper:Swiper, 
     Thankyou:Thankyou,
      Login:Login,
      ForgotPassword:ForgotPassword,
      ResetPassword:ResetPassword,
      OtpInput:OtpInput,
      SignUp:SignUp,
      Register:Register,        
     TotalPayment: TotalPayment,
      paymentconfirm:paymentconfirm,
      Payment: Payment,
      SelectLocation: SelectLocation,
      RequestPlaces: RequestPlaces,
      TrackRoute:TrackRoute,
      CurrentLocation:CurrentLocation,
      EditProfile:EditProfile,
      ServiceType: ServiceType,
       GetRequest:GetRequest, 
       BookingList:BookingList,
       BookingDetails: BookingDetails,
        ConfirmBooking:ConfirmBooking,
        History:History,
           
    },
   
    {
     defaultNavigationOptions: {     
        headerShown: false,
            headerMode: 'none'     
        },
    },
    
);

const Homestack = createStackNavigator(
    {
      BookService: { screen: BookService },
      
    },
    {
      defaultNavigationOptions: {     
       headerShown: false,
        headerMode: 'none'     
      },
    }
  );
  const NearbyStack = createStackNavigator(
    {   
      Nearby: { screen: Nearby }
      
    },
    {
      defaultNavigationOptions: {     
       headerShown: false,
        headerMode: 'none'     
      },
    }
  );
  const ChatStack = createStackNavigator(
    {       
      Chat: { screen: Chat },   
    },
    {
      defaultNavigationOptions: {     
       headerShown: false,
        headerMode: 'none'     
      },
    }
  );
  const NotificationStack = createStackNavigator(
    {   
      Notification: { screen: Notification },        
    },
    {
      defaultNavigationOptions: {     
       headerShown: false,
        headerMode: 'none'     
      },
    }
  );
  const ProfileStack = createStackNavigator(
    {   
      Profile: { screen: Profile },   
    },
    {
      defaultNavigationOptions: {     
       headerShown: false,
        headerMode: 'none' ,   
      },    
    }  
  );

const App = createBottomTabNavigator(
    { 
      Home: { screen: Homestack },
      Nearby: { screen: NearbyStack },
      Chat: { screen: ChatStack },   
      Notification: { screen: NotificationStack },
      Profile: { screen: ProfileStack },
    },
    { 
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-home`;
          } else if (routeName === 'Nearby') {
            iconName = `md-location-outline`;
          }else if(routeName === 'Chat'){
              iconName = `md-chatbox-outline`;
        
          } else if(routeName === 'Notification'){
              iconName = `notifications-outline`;
  
            } else if (routeName === 'Profile') {
            iconName = `md-person-sharp`;
         
          }
          return <IconComponent name={iconName} size={20} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: '#fd5b29', 
        inactiveTintColor: '#c9c9c9',
        style:{height:55, 
            borderTopColor:'transparent', 
            borderTopWidth:0, 
            backgroundColor:'#fff'
        },       
        labelStyle:{
          fontSize:12,
          textTransform:'uppercase',
          fontFamily:'Montserrat-Bold',
          fontWeight:'bold'
        },
        tabStyle: {
          paddingTop:5,   
          paddingBottom:5         
        }
      },
    }
  );

  const DrawerStack = createDrawerNavigator(
    {        
        Dashboard:App,        
       
    },
    {
    contentComponent: (props) =>  <Sidebar {...props}/>,     
      drawerType:'front',
      drawerWidth: 260,
      drawerLockMode:'unlocked', 
      hideStatusBar:'true',
      drawerBackgroundColor:'transparent'
    },
  )


const AppContainer = createSwitchNavigator(
    {
        Drawer: DrawerStack,
        Auth:AuthStack,
      
        
    },{
        initialRouteName:"Auth"
    }
)

export default createAppContainer(AppContainer);