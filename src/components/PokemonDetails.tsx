import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';


interface Props{
    pokemon:PokemonFull
}

export const PokemonDetails = ( {pokemon}:Props) => {



    return (  
        <ScrollView 
        showsVerticalScrollIndicator={false}
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
                            
                            }} key={type.name}>
                            {type.name}
                        </Text>
                   ))
               }
            </View>
            </View>

            {/* Ttypes */}
            <View style={{
                ...styles.container
               
            }}> 
            <Text style={styles.title}>Sprites</Text>

            </View>

            {/* Peso */}
            <View style={styles.container}> 
            <Text style={styles.title}>Peso</Text>
            <Text style={styles.regularText}>{pokemon.weight} lb </Text>
            </View>


           <ScrollView 
          // style
          showsHorizontalScrollIndicator={false}
           horizontal={true}
           >
              <FadeInImage
              style={styles.basicSprites}
              uri={pokemon.sprites.front_default}
              />

            <FadeInImage
              style={styles.basicSprites}
              uri={pokemon.sprites.back_default}
              />

                <FadeInImage
              style={styles.basicSprites}
              uri={pokemon.sprites.front_shiny}
              />

            <FadeInImage
              style={styles.basicSprites}
              uri={pokemon.sprites.back_shiny}
              />  
           </ScrollView>
           {/* Habilidades */}

           <View style={styles.container
            }> 

            {/* Types */}
            <Text
            style={styles.title}>Habilidades base</Text>
             <View style={{flexDirection:"row"}}>
            {
                   pokemon.abilities.map( ({ability}) =>(
                        <Text style={{
                            ...styles.regularText
                            
                            }} key={ability.name}>
                            {ability.name}
                        </Text>
                   ))
               }
            </View>
        </View>

        {/* Habilidades */}

        <View style={styles.container
            }> 

            {/* Habilidades */}
            <Text
            style={styles.title}>Movimientos</Text>
             <View style={{flexDirection:"row" , flexWrap:"wrap"}}>
            {
                   pokemon.moves.map( ({move}) =>(
                        <Text style={{
                            ...styles.regularText
                            
                            }} key={move.name}>
                            {move.name}
                        </Text>
                   ))
               }
            </View>
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
         fontWeight:"bold",
         marginTop:20
     },
     regularText:{
         fontSize:19,

     },
     basicSprites:{
         width:100,
         height:100
     }
});
