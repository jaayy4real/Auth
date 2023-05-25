import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const Dash = () => {
        navigation.navigate('Dashboard');
    };
  return (
        <View style={styles.container}>
      <Text style={styles.email}>Email</Text>
      <TextInput style={styles.input} textContentType='emailAddress'/>
      <Text style={styles.email}>Password</Text>
      <TextInput style={styles.input} textContentType='password'/>
      <TouchableOpacity style={styles.login}>
        <Button  title='Login' onPress={Dash}/>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    marginLeft:40,
    marginRight:40,
  },
  email:{
    fontSize:25,
  },
  input:{
    minWidth:'85%',
    backgroundColor:'gray',
    height:40,
    borderRadius:10,
    fontSize:25
  },
  login:{
    backgroundColor:'black',
    width:'30%',
    marginTop:15,
    borderRadius:7,
    color:''
  }
});
  


export default Login