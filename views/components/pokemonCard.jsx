
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { colorP } from '../const/conts.jsx';

function Card ({pokemon, infoPoke }) {
  return (
    <>
        {/* Simple diseño de la targeta pokemon */}
        <View style={styles.container}>
            <FlatList
                data={pokemon}
                numColumns={2}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => {
                        infoPoke(item);
                    }}>
                        <View style={{...styles.card,
                        backgroundColor: colorP[item.types[0].type.name]
                        }}>
                            <Image style={styles.image} source={{uri: item.sprites.front_default}} />
                            <Text style={styles.text}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    </>
);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'space-between',
      padding: 15,
    },
      card: {
          alignItems: 'center',
          padding: 5,
          shadowColor: '#000000',
          justifyContent: 'space-between',
          margin: 10,
          shadowOpacity: 10,
          shadowOffset: 10,
            shadowRadius: 10,
            elevation: 10,
            borderRadius: 10,
      },
      image: {
            width: 150,
            height: 150,
        },
        text: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
        },
      
  });

export default Card;


/* navigation.navigate('Start', {
    name: item.name,
    id: item.id,
    attack: item.stats[1].base_stat,
    defense: item.stats[2].base_stat,
    hp: item.stats[0].base_stat,
    speed: item.stats[5].base_stat,
    spAttack: item.stats[3].base_stat,
    spDefense: item.stats[4].base_stat,
    type: item.types[0].type.name,
    image: item.sprites.front_default,
});
} */