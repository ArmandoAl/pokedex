import { StyleSheet } from "react-native";

//Estilos
const styles = StyleSheet.create({

//Generales

    app: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    appP: {
        flex: 1,
        justifyContent: 'center',
      },
    container: {
        flex: 20,
        justifyContent: 'center',
    },


//Pokeball inicial

    pokeball: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
        alignSelf: 'center'
    },

//Header y Footer
    header: {
          flex: 2,
          padding: 10,
          backgroundColor: '#D83D3D',
          justifyContent: 'space-between',
          flexDirection: 'row',
          borderBottomEndRadius: 0,
          borderBottomStartRadius: 40,
          shadowColor: '#000000',
          shadowOpacity: 10,
          shadowOffset: 10,
          shadowRadius: 40,
          elevation:10,
      },
      pokedexfooter: {
          flex: 1,
          backgroundColor: '#D83D3D',
          justifyContent: 'center',
          alignItems: 'center',
          borderTopEndRadius: 5,
          borderTopStartRadius: 5,
          shadowColor: '#000000',
          shadowOpacity: 10,
          shadowOffset: 10,
          shadowRadius: 40,
          elevation:10,
      },
      rowbigpin: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
      },
      rowpin: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
      },
      bigpin: {
          width: 30,
          height: 30,
          borderRadius:50,
          backgroundColor: '#0000FF',
      },
      pin: {
          width: 10,
          height: 10,
          borderRadius:50,
          margin: 5,
      },
      poketitle: {
          paddingTop: 15,
          color: '#000000',
          fontSize: 30,
          fontWeight: 'bold',
      },


//Control panel
      buttons: {
         flexDirection: 'row',
         justifyContent: 'space-between',
         width: 250,
        },
       controlPanel: {
         flex: 2,
         padding: 10,
         backgroundColor: '#D83D3D',
         justifyContent: 'center',
         alignItems: 'center',
         borderTopEndRadius: 10,
         borderTopStartRadius: 10,
         shadowColor: '#000000',
         shadowOpacity: 10,
         shadowOffset: 10,
         shadowRadius: 40,
         elevation:10,
        },

//Vista de Pokemons
       pokemonContainer: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
        },
        column: {
            flex: 1,
        },
        blanck: {
            flex: 0.3,
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
        },
        startsBlock: {
            flex: 1,
            backgroundColor: '#F2F2F2',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopEndRadius: 25,
            borderTopStartRadius: 25,
            elevation:10,
            shadowColor: '#000000',
            shadowOpacity: 10,
            shadowOffset: 10,
            shadowRadius: 40,
        },
        pokeImage: {
            width: 200,
            height: 200,
            position: 'absolute',
            backgroundColor: 'transparent',
            resizeMode: 'contain',
            left: '25%',
            top: '5%',
        },
        stats: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 300,
            marginTop: 10,
        },
        types: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 300,
            marginTop: 10,
        },

//pokemon types
    type:{
        borderRadius:5,
        fontSize: 15,
        marginHorizontal: 10,
        paddingHorizontal: 8
    },

  });
  
export {styles};