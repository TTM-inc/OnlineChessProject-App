import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import InputContainer from '../utils/InputContainer'
import Background from './Background';
import { Button } from '@rneui/themed'


const Register = ({navigation}) => {
  const [username, onChangeUsername] = React.useState('UrFavoriteUsername');
  const [password, onChangePassword] = React.useState('slt');
  const [email, onChangeEmail] = React.useState('UrMailAdress@email.com');
  const [isPwdHidden, setPwdVisible] = React.useState(true);
  const goTo = () => navigation.navigate("Register");

  const  submit = async () => {
    try {
      const res = await fetch('http://192.168.153.1:3000/register', {
        method: 'POST',
        body: JSON.stringify({
        username: username,
        password: password,
        email: email,
      }),
    });
    console.log(res);
    onChangeUsername(res);
    return json; 
  } catch (error) {
    onChangeUsername(error);
    console.error(error);
    }
  };


  return (
    <Background>
      <View style={styles.view}>
        <InputContainer label={"Username :"}>
          <TextInput style={styles.string} onChangeText={onChangeUsername} value={username}></TextInput>
        </InputContainer>
        <InputContainer label={"E-Mail address :"}>
          <TextInput style={styles.string} onChangeText={onChangeEmail} value={email}></TextInput>
        </InputContainer>
        <InputContainer label={"Password :"}>
          <TextInput style={styles.string} secureTextEntry={isPwdHidden} onChangeText={onChangePassword} value={password} ></TextInput>
        </InputContainer>
        <Button buttonStyle={styles.button} onPress={submit} containerStyle={styles.buttonContainer} title={"Register"}/>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  string: {
    height: 40,
    marginBottom: 12,
    borderWidth: 0.1,
    borderRadius: 35,
    paddingLeft: 10,
  },
  number: {
    borderWidth: 1.3,
    borderRadius: 35,
    height: 38,
    width: '20%',
    margin: 12,
    padding: 10,
  },
  container: {
    height: 200,
    width: 65,
    color: 'blue',
  },
  view: {
    height: 500,
    // borderWidth: 3,
    marginVertical: '20%',
    backgroundColor: 'rgb(90, 118, 132)',
    borderRadius: 10,
    paddingTop: 20,
  },
  button: {
    // borderWidth: 2,
    borderRadius: 30,
    borderColor: 'black',
    backgroundColor: 'rgb(57, 91, 80)',
  },
  buttonContainer: {
    width: 250,
    marginHorizontal: 50,
    marginTop: 35,
  },
});


export default Register;