import React from "react";
import {View, Animated, TouchableWithoutFeedback } from "react-native";
import HeaderComponent from "./components/header";
import FooterComponent from "./components/footer";
import {styles} from './styles/style'
import { useState } from "react";

//Assets
const logo1 = '../assets/Component2.png';
const logo2 = '../assets/Component3.png';


function Start({navigation}) {

    //Usamos estamos para cambiar de logo dinamicamente
    const [logo, setLogo] = useState(0);
    const animation = new Animated.Value(0);

    //Animacion de rotacion
    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: 5040,
            duration: 3500,
            useNativeDriver: true,
        }).start()
        //add a delay
        setTimeout(() => {
                setLogo(1);
                navigation.push('Pokemons');
        }, 10);
    };

    const rotateInterPolate = animation.interpolate({
        inputRange: [0, 360],
        outputRange: ["0deg", "360deg"],
    })
    const animatedStyles = {
        transform: [{ rotate: rotateInterPolate }],
        width: 150, height: 150, alignSelf: 'center'
    }

    return (
        //Design
        <View style={styles.app}>
            <HeaderComponent styleHeader={{name: 'header'}} />
                <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => {
                            startAnimation();
                    }}>
                    {
                        logo === 0 ? <Animated.Image style={animatedStyles} source={require(logo1)} /> :
                        <Animated.Image style={animatedStyles} source={require(logo2)} />
                    }
                </TouchableWithoutFeedback>
                </View>
            <FooterComponent />
        </View>
     )
}

export default Start;