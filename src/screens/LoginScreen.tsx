import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { Button, TouchableOpacity } from 'react-native';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const LoginScreen = ({navigation}: any) => {
    //Estado para el usuario y contraseña
    //const [usuario, setUsuario]= useState('');
    const [password,setPassword] = useState('');
    const [correo, setCorreo]= useState('');

    //Función para validar y redirigir
    const manejarLogin=async() =>{
        //Validar campos vacios
        if(!correo||!password){
            Alert.alert('Error', 'Todos los campos son obligatorios')
            return;
        }

        try{
            //Obtener el usuario guardado en AsyncStorage
            const userData = await AsyncStorage.getItem('usuarios');
            const usuarios= userData? JSON.parse(userData): []; //Parsear el usuario guardado

            const usuario= usuarios.find((u: any) => u.email === correo
            && u.password === password ); //Buscar el usuario por email

            if(usuario){
                await AsyncStorage.setItem('usuario', JSON.stringify(usuario)); //Guardar el usuario en AsyncStorage
                navigation.navigate('Home', {user:usuario.nombre}); //Navegar a la pantalla de inicio
            }else{
                Alert.alert('Error', 'Credenciales incorrectas'); //Mostrar error si no se encuentra el usuario
                
            }

        }catch(error){
            Alert.alert('Error', 'No se pudo validar el usuario'); //Mostrar error si no se puede validar el usuario
            
        }

    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar Sesion</Text>
            <TextInput  placeholder="Usuario"
            style={styles.input}
            value={correo}
            onChangeText={setCorreo} />
            
            <TextInput
            placeholder="Contraseña"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword} />
            <Button title="Ingresar" onPress={manejarLogin}/>

            <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
                <Text style={styles.registerText}>No tienes una cuenta? 
                    Registrate</Text>
            </TouchableOpacity>


        </View>

  
     
   
  )
}

const styles=StyleSheet.create({
    container:{
        padding:20,
        flex:1,
        justifyContent:'center',
    },
    title:{fontSize:24, 
        fontWeight:'bold',
        marginBottom: 20,
        textAlign: 'center',

    },
    input:{
        borderWidth:1, 
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10
    },
    button:{
        padding: 10,
        backgroundColor: '#333',
        color: '#fff',
        marginTop:20,
    },
    registerText:{
        marginTop: 20,
        textAlign:'center',
        color:'#0066cc',
        textDecorationLine:'underline'
    },
    
})

export default LoginScreen;
