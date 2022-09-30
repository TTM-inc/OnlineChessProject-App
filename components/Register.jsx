import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import InputContainer from '../utils/InputContainer'
import { Button } from '@rneui/themed'


const Register = ({navigation}) => {
  const [username, onChangeUsername] = React.useState('UrFavoriteUsername');
  const [password, onChangePassword] = React.useState('slt');
  const [email, onChangeEmail] = React.useState('UrMailAdress@email.com');
  const [isPwdHidden, setPwdVisible] = React.useState(true);
  

  const  submit = async () => {
    console.log("username", username, "Password", password);
    try {
        const res = await fetch('http://192.168.1.45:3000/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        username: username,
        password: password,
        email: email,
      }),
    });
    console.log(res);
    onChangeUsername(res);
    return res;
  } catch (error) {
    console.error("error", error);
    onChangeUsername(error);
    }
  };
  
  
  return (
    <View style={styles.safeview}>

      <View style={styles.textview}>

          <InputContainer label={"Username :"}>

            <TextInput style={styles.string} onChangeText={onChangeUsername} value={username}></TextInput>

          </InputContainer>

          <InputContainer label={"E-Mail address :"}>

            <TextInput style={styles.string} onChangeText={onChangeEmail} value={email}></TextInput>

          </InputContainer>

          <InputContainer label={"Password :"}>

            <TextInput style={styles.string} secureTextEntry={isPwdHidden} onChangeText={onChangePassword} value={password} ></TextInput>

          </InputContainer>

      </View>  

      <View style={styles.buttonview}> 

          <Button buttonStyle={styles.button} onPress={submit} containerStyle={styles.buttonContainer} title={"Register"} titleStyle={{color:'black'}}/>

      </View>

    </View>
  )
};


const styles = StyleSheet.create({
  string: {
    padding: 14,
    fontSize: 17,
    width: '95%',
  },
  safeview: {
    flex:1,
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  textview: {
    flex:0.75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  buttonview: {
    flex:0.25,
    backgroundColor: '#000000',
  },
  button: {
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    height:55
  },
  buttonContainer: {
    padding:14
  },
});


export default Register