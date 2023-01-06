import {Text, View, Image, FlatList, TouchableOpacity, Button } from 'react-native';
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import {styles} from './styles/style';
import {colorP} from '../views/const/conts';
import Abilities from './components/detailsComponents/abilities';
import Type from './components/detailsComponents/type';
import StatsDetails from './components/detailsComponents/stats';
import BackButton from './components/detailsComponents/backButton';
import ImageAsset from './components/detailsComponents/image';


function Stats ({data, infoPoke}) {
  //Si los datos no se han cargado se desplagara un mensaje de Loading
  if(!data) {
    return (
      <View style={styles.app}>
        <HeaderComponent />
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
        <FooterComponent />
      </View>
    )
  }
  else{
    //Si hay datos, se mostrara una estructura con los datos y un diseño restatado de style.jsx
    return (
      <View style={{...styles.appP,
        backgroundColor: colorP[data.types[0].type.name]
      }}>
        <HeaderComponent />
        <View style={styles.container}>
          <View style={styles.column}>
            <View style={{...styles.blanck, backgroundColor: colorP.color }}>
              <Text style={{fontSize: 50, color: '#000000', padding: 15}}>#{data.id}</Text>
            </View>
            <View style={styles.startsBlock}>
              <Text style={{fontSize: 20}}>{data.name.toUpperCase()}</Text>

            <StatsDetails data={data} />
            <Type data={data} />
            <Abilities data={data} />
            <View style={{height: 30}}></View>
            <BackButton infoPoke={infoPoke} />

            </View>

            <ImageAsset data={data} />

          </View>
        </View>
        <FooterComponent />
      </View>
    )
  }
}

export default Stats;

