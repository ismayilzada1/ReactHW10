import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        paddingTop: 5,
        backgroundColor:"white"
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        width: "100%",
        paddingHorizontal: 10,
    },

    closeButtonContainer:{
        alignItems:"center",
        flex:1,
    },
    closeButton:{
        fontSize:40,
        color:"#BDBDBD",
        fontWeight:"600",
        transform: [{ rotate: '45deg' }]
    },
    title:{
        flex:2,
        textAlign:"center",
        fontSize:30,
        fontWeight:"600",
        lineHeight:36
    },
    loginButtonContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    loginButton:{
        color:"#5DB075",
        fontSize:16,
        fontWeight:"500",
        lineHeight:19
    },

    form:{
        flex:1,
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        gap:15,
    },
    input:{
        backgroundColor:"#F6F6F6",
        width:343,
        height:50,
        border:1,
        borderColor:"#E8E8E8",
        borderRadius:10,
        paddingLeft: 10,
        fontSize:16,
        fontWeight:500,
        paddingRight:10
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: 'center',
    },
    label: {
        margin: 8,
    },
    bottomContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:"center",
        width: '100%',
        marginTop: 20,
        marginBottom:20
    },
    forgotPassword: {
        color: '#5DB075',
        fontWeight:600,
        fontSize:16,
        lineHeight:19,
    },
    signUpButton:{
        borderRadius:25,
        width:343,
        height:51,
        backgroundColor:"#5DB075",
        alignItems:"center",
        justifyContent:"center"
    },
    signUpButtonText:{
        fontSize:16,
        fontWeight:600,
        color:"white",
        lineHeight:19
    }

});

export default styles;
