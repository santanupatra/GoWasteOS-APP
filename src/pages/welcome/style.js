const React = require("react-native");
const { Dimensions } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
    wrapper: {
        backgroundColor:'#fff',
        flex:1
    },
    container: {
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:20,
        flex:1
    },
    slideimg:{
        resizeMode:'contain',
        width:'100%',
        height:350,
        marginTop:40,
        marginBottom:10
    },
    slideheading: {
        fontSize:30,
        color:'#212121',
        fontWeight:'bold',
        textTransform:'uppercase',
        lineHeight:36,
        textAlign:'center',
        fontFamily:'Montserrat-Regular',
    },
    slidetext: {
        fontSize:18,
        lineHeight:26,
        color:'#646f7a',
        textAlign:'center',
        marginTop:10,
        fontFamily:'Montserrat-Regular',        
    },
    sliderwrap: {
        height:"100%",
        flex:1,
        maxHeight:680
    },
    btnimg: {
        resizeMode:'contain',
        height:60,
        width:60
    },
    nextbtn: {
        height:60,
        width:60
    }
}