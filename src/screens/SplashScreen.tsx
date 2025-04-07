
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native';

//Recibe por parametros la navegación
const SplashScreen = ({navigation}:any) => {
    useEffect(() => {
        const verificarSesion = async () => { //verificamos si hay un usuario activo
            const user= await AsyncStorage.getItem('usuarioActivo'); //Obtenemos el usuario activo
    setTimeout(() => { //Esperamos 2 segundos para mostrar la pantalla de carga
        if(user){
            const datos= JSON.parse(user); //Parseamos el usuario activo
            navigation.replace('Home', {user: datos.nombre}); //Navegamos a la pantalla de inicio

        }else {
            navigation.replace('Login'); //Navegamos a la pantalla de login
        }
    }, 2000); //Esperamos 2 segundos para mostrar la pantalla de carga
}
verificarSesion(); //Llamamos a la función para verificar la sesión
},[]);

  return (
    <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" /> 
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    
});

export default SplashScreen
