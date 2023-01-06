import {TouchableOpacity, Text} from 'react-native';;

function BackButton ({infoPoke}) {
    //Boton para volver a ver la lista de pokemons
    return(
            <TouchableOpacity onPress={
              () => {
                infoPoke();
              }
            } >
              <Text style={{fontSize: 25, color: '#000000', backgroundColor: '#7895B2', padding: 3, borderRadius: 50, paddingHorizontal: 20, elevation: 3}}>Back</Text>
            </TouchableOpacity>
    );
}

export default BackButton;