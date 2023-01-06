import {View, Text, FlatList} from 'react-native';
import {styles} from '../../styles/style.jsx'

function StatsDetails ({data}) {
    //Stats
    return(
       <View style={{height: 200}}>
          <FlatList 
                scrollEnabled={false}
                data={data.stats}
                keyExtractor={(item) => item.stat.name}
                renderItem={({item}) => (
                  <View style={styles.stats}>
                    <Text style={{fontSize: 12, padding: 2, borderRadius: 5}}>{item.stat.name.toUpperCase()}</Text>
                    <Text style={{fontSize: 15}}>{item.base_stat}</Text>
                  </View>
                )}
              />
          </View>
    );
}

export default StatsDetails;