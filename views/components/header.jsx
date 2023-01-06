import {View, Text} from 'react-native';
import {styles} from '../styles/style'

const HeaderComponent = () => {
    //Diseño del Header
    return (
        <View style={styles.header}>
        <View style={styles.rowbigpin}>
            <View style={styles.bigpin}></View>
            <View style={styles.rowpin}>
                <View style={{...styles.pin, backgroundColor: '#000000',}}></View>
                <View style={{...styles.pin, backgroundColor: '#FFD700',}}></View>
                <View style={{...styles.pin, backgroundColor: '#008000',}}></View>
            </View>
        </View>
        <Text style={styles.poketitle}>Pokedex</Text>
    </View>
    );
    }

export default HeaderComponent;
