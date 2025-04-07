import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({route,navigation}: any) => {
    const {user} = route.params;  //Extraer el usuario desde Params

    //Función para manejar el cierre de sesión
    const cerrarSesion= async() => {
        try{
            await AsyncStorage.removeItem('usuario');
            Alert.alert('Éxito', 'Sesión cerrada') //Eliminar el usuario de AsyncStorage
            navigation.replace('Login'); //Reemplaza la pantalla de inicio de sesion por la de Login
        }catch(error){
            Alert.alert('Error', 'Error al cerrar sesión')
        }
    }

    return (
    <View style={styles.container}>
        <Text style={styles.text}>Bienvenido, {user}</Text>
        <Button title='Cerrar Sesión' onPress={cerrarSesion} color='#FF0000' />
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    text:{
        fontSize:22
    },
})

export default HomeScreen
