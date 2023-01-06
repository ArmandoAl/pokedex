import {View, Image} from 'react-native';
import {styles} from '../../styles/style.jsx';

function ImageAsset ({data}) {
    //Image
    return(
        <View style={styles.pokeImage}>
        <Image source={{
          uri: data.sprites.front_default
        }}
        style={{width: 200, height: 200}}
        />
      </View>
    );
}

export default ImageAsset;