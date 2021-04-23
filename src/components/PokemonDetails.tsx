import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { PokemonFull } from '../interfaces/pokemonInterfaces';


interface Props{
    pokemon:PokemonFull
}

export const PokemonDetails = ( {pokemon}:Props) => {



    return (  
        <ScrollView 
        style={{...StyleSheet.absoluteFillObject
        }}
        >

            <View style={{
                 ...styles.container,
                 marginTop:380
            }}> 

            {/* Types */}
            <Text
            style={styles.title}>Types</Text>
            <View style={{flexDirection:"row"}}>
            {
                   pokemon.types.map( ({type}) =>(
                        <Text style={{
                            ...styles.regularText
                            ,
                            marginRight:15
                            }} key={type.name}>
                            {type.name}
                        </Text>
                   ))
               }
            </View>
            </View>

            {/* Ttypes */}
            <View style={{
                ...styles.container,
                marginTop:20
            }}> 
            <Text style={styles.title}>Sprites</Text>

            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
     container:{
         marginHorizontal:20
     },
     title:{
         fontSize:22,
         fontWeight:"bold"
     },
     regularText:{
         fontSize:19,

     }
});