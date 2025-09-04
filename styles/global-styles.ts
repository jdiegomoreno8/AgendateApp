import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create({

    background: {
        flex: 1,
        backgroundColor: Colors.background ,
    },

    agendaAPPContainer:{
        flex:1,
        justifyContent: 'flex-end',
        paddingBottom: 20
    },

    mainResult: {
        color: Colors.textSecondary,
        fontSize: 50,        
        fontWeight: '400'
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },

    button: {
        height: 80,
        width: 80,
        backgroundColor: Colors.orangeshort,
        borderRadius:3,
        justifyContent: 'center',
        marginHorizontal: 10,
  
    },
buttonText:{
    textAlign:'center',
    padding: 10,
    fontSize: 30,
    color: Colors.textSecondary,
    fontWeight: '300',
    
    }


})