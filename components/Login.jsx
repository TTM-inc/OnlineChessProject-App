import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, SafeAreaView } from 'react-native';
import ViewStyle from '../assets/styles/TextInputStyle'
import InputContainer from '../utils/InputContainer'
import { Button } from '@rneui/themed'



/**
 * TODO: Set padding/margin for Signup and rstPwd buttons
 * @returns 
 */


const Login = ({navigation}) => {
  const [username, onChangeUsername] = React.useState('UrFavoriteUsername');
  const [password, onChangePassword] = React.useState('*************');
  const [isPwdVisible, setPwdVisible] = React.useState(true);
  const goTo = () => navigation.navigate("Register");

  return (
    <SafeAreaView style={styles.view}>

          <View style={styles.textinputview}>

              <InputContainer label={"Username"}>

                <TextInput style={styles.inputstyle} onChangeText={onChangeUsername} value={username}></TextInput>

              </InputContainer>

              <InputContainer label={"Password"}>

                <TextInput style={styles.inputstyle} secureTextEntry={isPwdVisible} onChangeText={onChangePassword} value={password} ></TextInput>

              </InputContainer>

          </View>

          <View style={styles.buttonview}>

              <Button buttonStyle={styles.loginbutton} containerStyle={styles.buttonContainer} title={"Login"} titleStyle={{color:'black'}}/>

              <Button  buttonStyle={styles.button} title="Signup" titleStyle={{color:'white'}} onPress={goTo} type="clear"/>

              <Button  buttonStyle={styles.button} title="Forgot Password ?" titleStyle={{color:'white'}} type="clear"/>

            </View>

      </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  view: {
    flex:1,
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  textinputview: {
    flex:0.65,
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor:'white',
    // borderWidth: 1
  },
  inputstyle: {
    padding: 14,
    fontSize: 17,
    width: '95%'
  },
  buttonview: {
    flex:0.35,
    // borderColor:'white',
    // borderWidth: 1
  },
  loginbutton: {
    height: 55,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    marginHorizontal: '5%'
  },
  button: {
    // borderColor:'red',
    // borderWidth: 1,
    padding: 14,
  },
  buttonContainer: {
    height:55,
    // borderColor:'red',
    // borderWidth: 1
  },
});

export default Login