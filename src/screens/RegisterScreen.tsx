import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const RegisterScreen = ({navigation}:any) => {
    const[nombre,setNombre]= useState('')
    const[email,setEmail]= useState('')
    const[pass,setPass]= useState('')

    const manejarRegistro= async() => {
        if(!nombre || !email || !pass){
            Alert.alert('Error', 'Campos obligatorios');
            return;
        }
       
        try{
            const data= await AsyncStorage.getItem('usuarios'); 
            const usuarios= data? JSON.parse(data): []; 
            const existe= usuarios.find((u: any) => u.email === email); //Buscar si el usuario ya existe
            if(existe){
                Alert.alert('Error', 'El correo ya está registrado'); //Mostrar error si el usuario ya existe
                return;
            }
            const nuevoUsuario= {nombre, email, password:pass}; //Crear un nuevo usuario
            usuarios.push(nuevoUsuario); //Agregar el nuevo usuario al array de usuarios
            await AsyncStorage.setItem('usuarios', JSON.stringify(usuarios)); //Guardar el nuevo usuario en AsyncStorage
            Alert.alert('Éxito', 'Registro Completado')
            navigation.navigate('Login');
        }
        catch (error) {
            Alert.alert('Error', 'Error al guardar el usuario')
        }
        
    }
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Registrarse</Text>

        <TextInput placeholder='Nombre' style={styles.input} 
        value={nombre} onChangeText={setNombre}></TextInput>

        <TextInput placeholder='Correo' style={styles.input} value={email}
        onChangeText={setEmail}></TextInput>

        <TextInput placeholder='Contraseña' secureTextEntry style={styles.input}
        value={pass} onChangeText={setPass}></TextInput>

        <Button title='Crear cuenta' onPress={manejarRegistro}></Button>

    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        padding: 20,
        flex:1,
        justifyContent: 'center',

    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom: 20,
        textAlign:'center'
    },
    input:{
        borderWidth:1,
        borderColor:'#ccc',
        padding:10,
        marginBottom:15,
        borderRadius: 5
    },


})

export default RegisterScreen
