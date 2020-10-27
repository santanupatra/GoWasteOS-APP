const React = require("react-native");
const { Dimensions } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
    inrbody: {
        padding:15,
        flex:1,
        width:'100%'
    },
    labelg: {
        color:'#8a8a8a',
        fontSize:16,            
        fontFamily:'Montserrat-Regular',
        fontWeight:'600',
        marginBottom:5
    },
    smlabel: {
        fontSize:14,
        color:'#212121',     
        fontFamily:'Montserrat-Regular',
        fontWeight:'normal',   
    },
    hline: {
        width:1,
        backgroundColor:'#0a8791',
        height:45,
        marginLeft:5,
        marginTop:-5,
        marginBottom:-5
    },
    grbtn: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:50,
        paddingLeft:15,
        paddingRight:15,
        backgroundColor:'#18b868',
        width:200,
        borderRadius:5,
        marginTop:20
    },
    btnlabel: {
        fontSize:16,
        color:'#fff',     
        fontFamily:'Montserrat-Regular',
        fontWeight:'normal',  
        marginRight:8
    },
    abscard: {
       marginTop:'85%',
       flex:1
    },
    wrappers: {
        height:deviceHeight,
        width:'100%',
        flex:1,       
    },
    srchwrap: {
        marginTop:10,
        marginBottom:'20%'
    },
    srchbox: {
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff',
        borderRadius:5,
        height:50,
        width:'100%',
        paddingLeft:10,
        paddingRight:10
    },
    srch: {
        width:'85%',
        marginLeft:5,
        marginRight:5,
        fontSize:15,
        color:'#212121',     
        fontFamily:'Montserrat-Regular',
        fontWeight:'normal',          
    },
    nopadd: {
        paddingLeft:0,
        paddingRight:0
    },
    carddesc: {       
        width:'65%',        
    },
    sheading: {
        color:'#1a1a1a',
        fontSize:16,
        lineHeight:20,
        fontWeight:'bold',
        fontFamily:'Montserrat-Regular',
    },
    width75: {
        width:'78%',
        paddingRight:10
    },
    
    mimg: {
        resizeMode:'contain',
        height:18
    },  
    sdate2: {
        fontSize:14,
        color:'#8a8a8f',
        lineHeight:18,     
        fontFamily:'Montserrat-Regular',
    },
    smbtn: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:30,
        width:35,
        borderRadius:5,
        marginLeft:3
    },
    cardthumb:{
        height:60,
        width:55,
        backgroundColor:'#f7f7f7',
        borderRadius:4,
        marginRight:15,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
      },
      thumbimg: {
        resizeMode:'contain',
        height:50
      },
      btntype: {
        backgroundColor:'#f7f7f7',
        borderRadius:4,
        marginRight:5,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:3,
        paddingbottom:3,
        height:28
      },
      typtext: {
        fontSize:13,
        color:'#8a8a8f',
        fontFamily:'Montserrat-Regular',
        lineHeight:14
      },
      inputlabel: {
        fontSize:13,
        color:'#000',
        fontFamily:'Montserrat-Regular',
        lineHeight:14
      },
      linput: {
          paddingTop:0,
          color:'#212121',
          fontSize:16,
          borderBottomWidth:0.6,
          borderBottomColor:'#ddd',
          paddingBottom:3,
          marginBottom:15,          
      },
      width95: {
          width:'95%'
      }

}