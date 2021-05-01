import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native';
import { View, Text, Platform, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import {styles as globalStyle} from '../theme/appTheme';

const SearchScreen = () => {

const {top} = useSafeAreaInsets();
const {isFetching,simplePokemonList} = usePokemonSearch();

if(isFetching) {
    return(
        <View style={styles.activityContainer}>
            <ActivityIndicator
            size={50}
            color="grey"
            />
            <Text>Cargando...</Text>
        </View>
    )
}

    return (
        <View style={{
            flex:1,
            marginTop:(Platform.OS === 'ios' ) ? top : top + 10,
            marginHorizontal:20
            }}>


            <SearchInput />

            <FlatList
               data={simplePokemonList}
               keyExtractor={(pokemon)=>pokemon.id}
               showsVerticalScrollIndicator={false}
               numColumns={ 2 }

               //Header

               ListHeaderComponent={(
                <Text style={{ 
                    ...globalStyle.title,
                    ...globalStyle.globalMargin,
                    paddingBottom:10
                     }}>Pokedex</Text>

               )}
               renderItem={ ( {item} ) =>( <PokemonCard pokemon={item}  /> )}
           />
        </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    activityContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});
