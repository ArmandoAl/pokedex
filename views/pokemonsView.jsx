import axios from 'axios';
import {View } from 'react-native';
import React, { useState, useEffect } from 'react';
import Card from './components/pokemonCard';
import Stats from './statsView';
import ControlsComponent from './components/controls';
import {styles} from './styles/style';
import HeaderComponent from './components/header';

function Pokemons () {
    //Estados necesarios para cambiar de listado de pokemon, definir si estan cargando los datos
    //y para mostrar la informacion de cada pokemon
   const [pokeData, setPokeData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
   const [nextUrl, setNextUrl] = useState("");
   const [prevUrl, setPrevUrl] = useState("");
   const [pokeDex, setPokeDex] = useState();

    //Funcion que se encarga de obtener un arreglo de pokemons y definir el estado de loading
    //como true
    const pokeFun = async () => {
        setLoading(true);
        const response = await axios.get(url);
        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);
        getPoke(response.data.results);
        setLoading(false);
    }

    //Funcion que se encarga de obtener los datos de cada pokemon
    const getPoke = async (data) => {
        data.map(async(item) => {
            const response = await axios.get(item.url);
            setPokeData((state) => {
                state=[...state, response.data]
                state.sort((a,b) => a.id>b.id?1:-1);
                return state;
            }
            ); 
        });
    }

    //Con useEffect hacemos que la funcion interna de ejecute junto con la pantalla/componente
    useEffect(() => {
        pokeFun();
    }, [url]);

    //Si pokeDex es null, se muestra la lista de pokemons
    if(!pokeDex){
        return (
            <View style={styles.app}>
                <HeaderComponent />
                    <View style={styles.container}>
                    <Card pokemon={pokeData} loading={loading} infoPoke={poke => setPokeDex(poke)} />
                    </View>
               <ControlsComponent setPokeData={
                     () => setPokeData([])} nextUrl={nextUrl} prevUrl={prevUrl     
               }
                setUrl={setUrl} 
               />
        </View>
        );
    }
    else{
        //Si pokeDex no es null, se muestra la informacion del pokemon
        return (
            <Stats data={pokeDex} infoPoke={
                () => setPokeDex(null)
            } />
        );
    }
}
export default Pokemons;