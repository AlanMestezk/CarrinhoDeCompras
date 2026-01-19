
import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({

    container:{
        flex:1,
        paddingEnd:30,
        paddingStart:30,
        justifyContent: 'center'
    },
    cartContent:{
       flexDirection:"row",
       justifyContent: 'space-between',
       alignItems: 'center',
       marginTop:30,
       marginBottom:30
    },
    title:{
        fontSize:24,
        fontWeight:'bold'
    },
    cartButton:{

    },
    dot:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orangered',
        width: 20,
        height: 20,
        borderRadius:10,
        position: 'absolute',
        zIndex: 99,
        top: -5,
        left: 25
    },
    dotText:{
        fontSize: 15
    }

})