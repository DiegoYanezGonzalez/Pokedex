import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { Text, TouchableOpacity, View } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

const windowWidth = Dimensions.get('window').width

interface Props{
    pokemon:SimplePokemon;
}

export const PokemonCard = ( { pokemon }:Props ) => {
    return (
        <TouchableOpacity
        activeOpacity={0.7}
        >
             <View style={{
                 ...styles.cardContainer,
                 width:windowWidth * 0.4
             }}>

                 <View>
                     <Text style={styles.name}>
                         {pokemon.name}
                         {'\n#' + pokemon.id}
                     </Text>
                 </View>
                
                   <View style={styles.pokebolaContainer} >
                        <Image
                            source={require('../assets/pokebola-blanca.png')}
                            style={styles.pokebola}
                        />
                   </View>
                 <FadeInImage
                 uri={pokemon.picture}
                 style={styles.pokemonImage}
                 />

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
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	     height: 7,
         },
          shadowOpacity: 0.43,
         shadowRadius: 9.51,

        elevation: 15

    },
    name:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        top:20,
        left:10
    },
    pokebola:{
        width:100,
        height:100,
        position:"absolute",
        bottom:-20,
        right:-25,
        // opacity:0.5
    },
    pokemonImage:{
        width:120,
        height:120,
        position:'absolute',
        right:-7,
        bottom:-7
    },
    pokebolaContainer:{
        
        width:100,
        height:100,
        position:'absolute',
        bottom:0,
        right:0,
        overflow:'hidden',
        opacity:0.6
    }
});