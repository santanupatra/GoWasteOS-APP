export default {
    sidebar: {
        flex:1,
        backgroundColor:'transparent',
        paddingTop:'30%'
    },
    sidewrap: {
        backgroundColor:'#fff',
        flex:1,
        borderTopRightRadius:15,
        borderBottomRightRadius:15,
        paddingbottom:20,
        paddingTop:20      
    },
    profiletop:{
        flexDirection:'row',        
        alignItems:'center',     
        marginBottom:20,
        paddingTop:20,
        paddingLeft:15,
        paddingRight:15,
        paddingBottom:20,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    },
    profileround: {
        height:70,
        width:70,
        borderRadius:70/2, 
        flexDirection:'row',
        position:'relative',
        marginRight:5    
    },    
    profileimg: {
        width:60,
        height:60,
        borderRadius:60/2,        
    },
    namepro: {
        fontSize:16,
        color:'#212121',     
        fontFamily:'Montserrat',
        fontWeight:'bold',
        marginBottom:10
    },
    profilebadge: {
        width:26,
        height:26,
        borderRadius:26/2,
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
      menulink: {
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingBottom:10,
        paddingTop:10,
        paddingRight:15,
        paddingLeft:15
      },
      linktext: {
          color:'#000000',
          fontSize:16,
          fontFamily:'Montserrat',  
      },
      activetext: {
        color:'#1cae81'
      },
      micon: {
        resizeMode:'contain',
        height:18,
        width:24,
        
      },
      imgbx: {
        flexDirection:'row',
        justifyContent:'center',
        width:26,
        marginRight:8
      }
}