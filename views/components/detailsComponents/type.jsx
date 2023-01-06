import {Text, FlatList, View} from 'react-native';
import {colorP} from '../../const/conts.jsx'
import {styles} from '../../styles/style.jsx'

function Type ({data}) {
    return(
            //Tipos
              <View style={styles.types}>
              <Text style={{borderRadius: 5, padding: 2}}>Types:</Text>
              <FlatList
                numColumns={2}
                scrollEnabled={false}
                data={data.types}
                keyExtractor={(item) => item.type.name}
                renderItem={({item}) => {
                  return(
                    <Text style={{
                      ...styles.type,
                      backgroundColor: colorP[item.type.name],
                    }}>{item.type.name}</Text>
                  )
                }
                }
              />
            </View>
    );
}

export default Type;