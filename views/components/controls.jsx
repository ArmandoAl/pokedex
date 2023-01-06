import {View, TouchableOpacity, Image,} from 'react-native';
import {styles} from '../styles/style'
import React, {useState} from 'react';

const ControlsComponent = ({setPokeData, nextUrl, prevUrl, setUrl }) => {
    //Usamos estados para saber si se puede ir a la derecha o a la izquierda
    const [aux, setAux] = useState(0);
    function onpresed () {
        //Si es la pagina inicial el usuario no podra pasar a la pagina anterior
        if(aux == 0){
            return
        }
        else{
            setPokeData([]);
            setUrl(prevUrl);
            setAux(aux - 1);
        }
    }

    //funcion para pasar a la siguiente pagina
    function onright () {
        setPokeData([]);
        setUrl(nextUrl);
        setAux(aux+1);
}
    return (
        //Diseño del panel de control usando Assets diseñodos en Figma
        <View style={styles.controlPanel}>
               <View style={styles.buttons} >
                    <TouchableOpacity onPress={
                        onpresed
                    }>
                        <Image style={{width: 50, height: 50}} source={require('../../assets/arroz_left.png')} />
                    </TouchableOpacity>
                    <Image style={{width: 50, height: 50}} source={require('../../assets/Vector.png')} />
                    <TouchableOpacity onPress={
                        onright
                    }>
                        <Image style={{width: 50, height: 50}} source={require('../../assets/arrow_right.png')} />
                    </TouchableOpacity>     
            </View>
               </View>
    );
}

export default ControlsComponent;