import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, TouchableOpacity, View } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

interface Props{
    pokemon:SimplePokemon;
}

export const PokemonCard = ( { pokemon }:Props ) => {
    return (
        <TouchableOpacity>
             <View style={{
                 ...styles.cardContainer
             }}>

             </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    cardContainer:{
        marginHorizontal:10,
        backgroundColor:'red',
        height:120,
        width:160,
        marginBottom:25,
        borderRadius:10
    }
});