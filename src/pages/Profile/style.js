const React = require("react-native");
const { Dimensions } = React;
const deviceHeight = Dimensions.get("window").height;
export default {
    profiletop:{
        flexDirection:'row',        
        alignItems:'center',     
        marginBottom:20
    },
    profileround: {
        height:120,
        width:120,
        borderRadius:120/2,   
        overflow:'hidden',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',   
      marginRight:15 ,
      overflow:'hidden'   
    },
    profilewrap: {
        position:'relative',
        top:-80,
        marginBottom:-80
    },
    profileimgwrap: {
        height:120,
        width:120,       
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-start', 
        marginRight:'auto',
        marginLeft:'auto',
        position:'relative'
    },
    profileimg: {
        width:107,
        height:107,
        borderRadius:107/2,        
    },
    mailpro: {
        fontSize:15,
        color:'#8a8a8f',     
        fontFamily:'Montserrat-Regular',
        fontWeight:'bold'
    },
    namepro: {
        fontSize:23,
        color:'#212121',     
        fontFamily:'Montserrat-Regular',
        fontWeight:'bold'
    },
    label: {
        fontSize:18,
        color:'#212121',     
        fontFamily:'Montserrat-Regular',
        fontWeight:'600'
    },
    whitecard: {
        backgroundColor:'#fff',
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:'15%',
        paddingRight:'15%',
        borderRadius:17,
        marginBottom:25
    },
    mlabel: {
        fontSize:15,
        color:'#212121',     
        fontFamily:'Montserrat-Regular',
        fontWeight:'600',
        marginTop:15,
        marginBottom:25
    },
    grtext: {
        fontSize:15,
        color:'#1cae81',     
        fontFamily:'Montserrat-Regular',
        fontWeight:'bold',        
    },
    dismiss: {
        fontSize:15,
        color:'#8898a8',     
        fontFamily:'Montserrat-Regular',
        fontWeight:'normal',        
    },
    smlabel: {
        fontSize:15,
        color:'#8a8a8f',     
        fontFamily:'Montserrat-Regular',
        fontWeight:'normal',      
        marginRight:20,
        marginTop:5  
    },
    inrbody: {
        paddingBottom:20,
        paddingLeft:'10%',
        paddingRight:'10%',
        paddingTop:20
    },
    rds: {
        borderRadius:9,  
        overflow:'hidden',
        height:80,
        marginBottom:20,
           
    },
    clbgr: {
        height:80,       
        flexDirection:'row',
        alignItems:'center',
        paddingBottom:15,
        paddingTop:15,
        paddingLeft:15,
        paddingRight:15,       
        resizeMode:'contain',       
    },
    typtext: {
        color:'#fff',
        fontSize:20,       
        lineHeight:24,       
        fontFamily:'Montserrat-Regular',
        lineHeight:50
    },
    bgwhite: {
        backgroundColor:'#fff',
        flex:1,        
        marginTop:110,   
        minHeight:650 
    },
    profilebadge: {
        width:32,
        height:32,
        borderRadius:32/2,
        overflow:'hidden',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        shadowColor: '#ddd',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 1,  
        elevation: 4,
        backgroundColor:'#fff',
        position:'absolute',
        bottom:5,
        right:5
      },
      labelgray: {
        fontSize:22,
        color:'#8a8a8f',     
        fontFamily:'Montserrat-Regular',
        fontWeight:'600',
        marginBottom:20
      },
      grayrow: {
          backgroundColor:'#f5f4f4',
          borderRadius:5,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between',
          alignItems:'center',
          paddingBottom:3,
          paddingTop:3,
          paddingLeft:10,
          paddingRight:10,
          marginBottom:15
      },
      formtext: {
        fontSize:18,
        color:'#8a8a8f',     
        fontFamily:'Montserrat-Regular',  
        maxWidth:200     
      }

}