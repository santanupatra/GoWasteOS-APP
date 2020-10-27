const React = require("react-native");
const { Dimensions } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
    flexOne: {
        flex: 1,
      },
      wrapper: {
        flex: 1,       
        backgroundColor: '#fafafa',
        height: deviceHeight,
        
      },     
      container:{
        flex:1,
        paddingHorizontal: '3%',
        paddingVertical: '5%'
      },
      flexRow: {
        flexDirection: "row",
      },
      mlAuto: {
        marginLeft: "auto",
      },
      alignCenter:{
        alignItems:"center",
      },
    rowCenter: {
        justifyContent: "center",
        flexDirection: "row",
      },
      rowSec: {
        flexDirection: "row",
      },
      rowjustify: {
        flexDirection: "row",
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%'
      },
      rowSec_ar: {
        flexDirection: "row-reverse",
      },
      rightAlign: {
        textAlign: "right",
      },
      mrLeft: {
        marginLeft: "auto",
      },
      mrRight: {
        marginRight: "auto",
      },
      align_en: {
        textAlign: "left",
      },
      align_ar: {
        textAlign: "right",
      },
      // Margin Top
      mT1:{
        marginTop:10,
      },
      mT2:{
        marginTop:20,
      },
      mT3:{
        marginTop:30,
      },
      mT4:{
        marginTop:40,
      },
      mL1:{
        marginLeft: 5,
      },
      mR1:{
        marginRight: 5,
      },
      mL1:{
        marginLeft: 5,
      },
      // Margin bottom
      mB1:{
        marginBottom:10,
      },
      mB2:{
        marginBottom:20,
      },
      mB3:{
        marginBottom:30,
      },
      mB4:{
        marginBottom:40,
      },   
    
      // Padding Top
      pT1: {
        paddingTop: 10,
      },
      pT2: {
        paddingTop: 20,
      },
      pT3: {
        paddingTop: 30,
      },
      pT4: {
        paddingTop: 40,
      },
      pT5: {
        paddingTop: 50,
      },
     // Padding Bottom
      mR1:{
        marginRight: 10,
      },
      pL1:{
        paddingLeft: 10,
      },
      // Padding Bottom
      pB1: {
        paddingBottom: 10,
      },
      pB2: {
        paddingBottom: 20,
      },
      pB3: {
        paddingBottom: 30,
      },
      pB4: {
        paddingBottom: 40,
      },
      pB5: {
        paddingBottom: 50,
      },
      width100: {
        width:'100%'
      },
      width50: {
        width:'50%',        
        paddingHorizontal:8
      },
      row: {
        flexDirection:'row',
        marginLeft:-8,
        marginRight:-8
      },
      formlabel: {
        fontSize:15,
        color:'#212121',
        textAlign:'left',
        fontFamily:'Montserrat-Regular',
        marginLeft:10,
        fontWeight:'bold'
      },

      //common styles
      roundinput: {
        borderColor:'#82d7b6',
        borderWidth:1,
        borderRadius:35,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10,
        marginTop:10,
        paddingHorizontal:5,
        paddingVertical:4,
        shadowColor: '#ddd',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,  
        elevation: 2,
        backgroundColor:'#fff',
        width:'100%'
      },
      iconwrap: {
        backgroundColor:'#eaf2f2',
        borderRadius:45/2,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:45,
        height:45
      },
      forminput:{
        marginLeft:5,
        fontSize:16,
        width:'75%',
        fontFamily:'Montserrat-Regular',
      },
      forminput2:{
        marginLeft:5,
        fontSize:16,
        fontFamily:'Montserrat-Regular',
        width:'65%'
      },
      themebtn: {
        borderRadius:35,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        paddingHorizontal:20,
        paddingVertical:15,
        backgroundColor:'#fb6400',
        marginBottom:20
      },
      btntext: {
        color:'#fff',
        fontSize:20,
        fontFamily:'Montserrat-Regular',
        fontWeight:'600',        
      },
      linktext: {
        color:'#f4aa48'
      },
      hnavigation: {
        paddingHorizontal:10,
        paddingVertical:10,
        flexDirection:'row',
        alignItems:'center',
        marginTop:15
      },
      iconback: {
        width:'11%'
      },
      hwrap: {
        width:'89%',
        flexDirection:'row',
        justifyContent:'center',
        paddingRight:'15%',
        position:'relative'
      },
      righticon: {
        position:'absolute',
        right:1,
        width:'11%',
        flexDirection:'row',
        justifyContent:'center',    
      },
      navh: {
        textAlign:'center',        
        fontSize:20,
        color:'#1a1a1a',
        fontWeight:'600',
        fontFamily:'Montserrat-Regular',
      },
      divgap: {
        marginTop:'45%',
        paddingBottom:20
      },
      frmbetween: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:10
      },
      card: {
        shadowColor: '#ddd',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 1,  
        elevation: 2,
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#d3d3d3',       
        borderRadius:18,
        marginBottom:20,
        overflow:'hidden'
      },
      cardbody: {
        paddingHorizontal:10,
        paddingVertical:10,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%'
      },
      cardthumb:{
        height:70,
        width:70,
        backgroundColor:'#f7f7f7',
        borderRadius:4,
        marginRight:15,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
      },
      thumbimg: {
        resizeMode:'contain',
        height:60
      },
      smbtn: {
        backgroundColor:'#fd5b29',
        paddingHorizontal:10,
        paddingVertical:3,
        minWidth:'20%',
        alignSelf:'center',
        borderRadius:7,
        height:30,
        marginRight:5
             
      },
      smbtntext: {
        fontSize:14,
        color:'#fff',
        textAlign:'center',
        fontFamily:'Montserrat-Regular',
      },
    cyanbg: {
        backgroundColor:'#3ad2c8'
    },
    Greenbg: {
        backgroundColor:'#2fd07c'
    },
    redbg: {
        backgroundColor:'#f83a3c'
    },
    yellowbg: {
        backgroundColor:'#fffc00'
    },
    themebg: {
      backgroundColor:'#fb6400'
    },
    avtbox: {
      width:'12%',
      overflow:'hidden',
      position:'relative',
      paddingBottom:5
    },
    avatar: {
      width:40,
      height:40,
      borderRadius:40/2,
      overflow:'hidden',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    },
    avtimage: {
      resizeMode:'contain',
      height:40,
      width:40
    },
    centercontent: {
      width:'80%'
    },
    headingmain: {
      color:'#000000',
      fontFamily:'Montserrat-Regular',
      fontSize:17,
      fontWeight:'bold',
      lineHeight:22,
      marginBottom:4
    },
    msgtext: {
      fontSize:13,
        color:'#777',     
        fontFamily:'Montserrat-Regular',
    },
    badgen: {
      width:20,
      height:20,
      borderRadius:20/2,
      overflow:'hidden',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#e1ad01',
      position:'absolute',
      bottom:5,
      right:5
    },
    mimg: {
      resizeMode:'contain',
      height:18
  },
  noborder: {
    borderWidth:0,
    borderColor:'tranparent'
  },
  modalcenter: {
    backgroundColor:'#3ca874',
    paddingHorizontal:20,
    paddingVertical:20,
    borderRadius:5,
    width:280,
    marginLeft:'auto',
    marginRight:'auto'
  },
  mheading: {
    fontSize:18,
    color:'#fff',     
    fontFamily:'Montserrat-Regular',
    marginBottom:15,
    textAlign:'center'
  },
  whitebtn: {
    backgroundColor:'#fbfbfb',
    paddingHorizontal:10,
    paddingVertical:3,
    minWidth:100,
    alignSelf:'center',
    borderRadius:7,
    height:30,    
    marginTop:20,
    
  },
  wbttext: {
    fontSize:14,
    color:'#212121',
    textAlign:'center',
    fontFamily:'Montserrat-Regular',
  },
  datedevider: {
    paddingBottom:20,
    flexDirection:'row'
  },
  datemute: {
    fontSize:16,
    fontFamily:'Montserrat-Regular',
    color:'#8898a8',
    },
    mb0: {
      marginBottom:0
    },
    righttext: {
      fontSize:15,
      fontFamily:'Montserrat-Bold',
      color:'#fb6400',    
      width:50 ,
      fontWeight:'bold'
    },
    whitetext: {
      color:'#fff'
    },
    closelist: {
      position:'absolute',
      right:8,
      top:8
    }
}