import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Register = () => {
    const navigation = useNavigation ();
    const Logn = () => {
        navigation.navigate('Login');
    };
  return (
     <View style={styles.container}>
   
     <Text style={styles.email}>Name</Text>
     <TextInput style={styles.input}></TextInput>
      <Text style={styles.email}>Email</Text>
      <TextInput style={styles.input} textContentType='emailAddress'/>
    
      <Text style={styles.email}>Password</Text>
      <TextInput style={styles.input}/>
      <Text style={styles.email}>Phone</Text>
      <TextInput style={styles.input} textContentType='password'/>
      <TouchableOpacity style={styles.login} >
        <Button  title='Register' onPress={Logn}>
        </Button>
        {/* <Text>f</Text> */}
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
  },
  first:{
    flexDirection:'row'
  }
});
 
  


export default Register