import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import InputContainer from '../utils/InputContainer'
import { Button, Icon, Overlay, Divider } from '@rneui/themed'

const Register = ({navigation}) => {
  const [username, onChangeUsername] = React.useState('UrFavoriteUsername');
  const [password, onChangePassword] = React.useState('slt');
  const [email, onChangeEmail] = React.useState('UrMailAdress@email.com');
  const [isPwdHidden, setPwdVisible] = React.useState(true);
  const [error, onSetError] = React.useState("test");
  const [eyeCon, setEyeCon] = React.useState('eye');
  const [showOverkay, setShowOverlay] = React.useState(false);
  const [resOverlay, setResOverlay] = React.useState({color: '#000000', message: 'HellaSku'});

  const handleResponse = (res) => {
    console.log(res);
    let color = '';
    let message = '   ';
    switch (res.status) {
      case (201):
        color = '#004F2D'
        message = res.json.username
        break;
      case (400):
        color = '#800E13',
        message = 'Your username or email address is already in use'
      default:
        break;
    }
    setResOverlay({color: color, message: message});
    setShowOverlay(true);
  }

  const passwordOnOff = () => {
    if (eyeCon === 'eye') {
      setEyeCon('eye-with-line');
      setPwdVisible(false);
      return;
    }
    else {
      setPwdVisible(true)
    } setEyeCon('eye');
  }

  const  submit = async () => {
    console.log("username", username, "Password", password);
    try {
          const res = await fetch('http://192.168.1.29:3000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      username: username,
      password: password,
      email: email,
      })
    })
    .then((data) => {
      console.log(data);
      handleResponse(data);
    })
  } catch (error) {
    console.error("error", error);
    }
  };
  
  
  return (
    <View style={styles.safeview}>

      <View style={styles.textview}>
        <Overlay
          isVisible={showOverkay}
          onBackdropPress={() => setShowOverlay(false)}
        >
          <Divider inset={true} insetType={'left'} color={resOverlay.color}/>
          <Text>{resOverlay.message}</Text>
        </Overlay>
          <InputContainer label={"Username :"}>
            <TextInput style={styles.string} onChangeText={onChangeUsername} value={username}></TextInput>

          </InputContainer>

          <InputContainer label={"E-Mail address :"}>
            <TextInput style={styles.string} onChangeText={onChangeEmail} value={email}></TextInput>

          </InputContainer>

          <InputContainer label={"Password :"}>
            <View style={styles.passwordprops}>
              <Icon style= {styles.eyecon} name={eyeCon} type='entypo' onPress={passwordOnOff}/>
              <TextInput style={styles.passwordstring} secureTextEntry={isPwdHidden} onChangeText={onChangePassword} value={password} ></TextInput>
            </View>

          </InputContainer>

          <Text style = {styles.text} title={"Error message"}>
            ""
          </Text>

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
    width: '85%',
  },
  passwordstring: {
    flex:1,
    padding: 14,
    fontSize: 17,
  },
  passwordprops: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },
  eyecon: {
    justifyContent: "center",
    alignItems:'center',
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

