import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import ViewStyle from '../assets/styles/TextInputStyle'
import InputContainer from '../utils/InputContainer'
import Background from './Background';
import { Button } from '@rneui/themed'
const Login = () => {
  const [username, onChangeUsername] = React.useState('UrFavoriteUsername');
  const [password, onChangePassword] = React.useState('*************');
  const [isPwdVisible, setPwdVisible] = React.useState(true);

  return (
    <Background>
      <View style={styles.view}>
        <Text>Login</Text>
        <InputContainer label={"Username"}>
          <TextInput style={styles.string} onChangeText={onChangeUsername} value={username}></TextInput>
        </InputContainer>
        <InputContainer label={"Password"}>
          <TextInput style={styles.string} secureTextEntry={isPwdVisible} onChangeText={onChangePassword} value={password} ></TextInput>
        </InputContainer>
        <Button buttonStyle={styles.button} containerStyle={styles.buttonContainer} title={"Login"}/>
      </View>
    </Background>
  )
};

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
    height: 400,
    // borderWidth: 3,
    marginVertical: '20%',
    backgroundColor: 'rgb(90, 118, 132)'
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

export default Login