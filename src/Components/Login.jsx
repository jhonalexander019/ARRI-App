import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';

const Main = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (inputText) => {
    setUsername(inputText);
  };

  const handlePasswordChange = (inputText) => {
    setPassword(inputText);
  };

  const handleLogin = () => {
    // Lógica para realizar el inicio de sesión
    if (username === 'usuario' && password === 'contraseña') {
      Alert.alert('Inicio de sesión exitoso');
    } else {
      Alert.alert('Error de inicio de sesión');
    }
  };

    return (
      <View style={styles.container}>
        <Image source={require('../img/logo.png')} style={styles.img}/>
        <View style={styles.seccion}>
          <Text style={styles.textos}>Correo</Text>
          <TextInput style={styles.inputs}
            value={username}
            onChangeText={handleUsernameChange}
            placeholder="Ingrese su correo"
          />
          <Text style={styles.textos}>Contraseña</Text>
          <TextInput style={styles.inputs}
            value={password}
            onChangeText={handlePasswordChange}
            placeholder="Ingrese su contraseña"
            secureTextEntry={true}
          />
        </View>
        <Button title="Enviar" onPress={handleLogin}/>
        <View style={styles.espacio}></View>
        <Button title="Registrarse" onPress={() => navigation.navigate('Register')}/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#032',
      alignItems: 'center',
      justifyContent: 'center',
    },
    seccion: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 40,
    },
    espacio: {
      margin: 60,
    },
    img: {
      objectFit: 'contain',
      marginBottom: 40,
      width: 200,
      height: 200,
    },
    textos: {
      margin: 10,
    },
    inputs: {
      backgroundColor: '#033',
      padding:10,
      borderRadius:25,
      width:300,
    },
  });

export default Main