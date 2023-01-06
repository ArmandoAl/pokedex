import {Text, FlatList, View} from 'react-native';
import {styles} from '../../styles/style.jsx'

function Abilities ({data}) {
    //Abilidades
    return(
      <View style={styles.types}>
              <Text style={{borderRadius: 5, padding: 2}}>Abilities:</Text>
              <FlatList
              numColumns={2}
              scrollEnabled={false}
              data={data.abilities}
              keyExtractor={(item) => item.ability.name}
              renderItem={({item}) => (
                <Text style={{fontSize: 15, paddingHorizontal: 5, borderRadius: 5, backgroundColor: '#E4DCCF', marginHorizontal: 10 }}>{item.ability.name.toUpperCase()}</Text>
              )}
            />
        </View>
    );
}

export default Abilities;