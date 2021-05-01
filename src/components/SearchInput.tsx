import React from 'react';
import { View ,StyleSheet,Text, Platform} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export const SearchInput = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textBackground} >
                
             <TextInput
             placeholder="Buscar Pokemon"
             style={{
                 ...styles.textInput,
                 top:(Platform.OS === 'ios' ) ? 0 :2
                }}
             autoCapitalize='none'
             autoCorrect={false}
             />
             <Icon name="search-outline" 
             color='grey'
             size={30} />
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
       // backgroundColor:'red'
    },
    textBackground:{
        backgroundColor:'#F3F1F3',
        borderRadius:50,
        height:40,
        paddingHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        
        elevation: 17,

    },
    textInput:{
        flex:1,
        fontSize:18,
        top:1
    }
});