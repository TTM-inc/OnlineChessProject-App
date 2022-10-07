import React from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, SafeAreaView } from 'react-native'
import ViewStyle from '../assets/styles/TextInputStyle'
import InputContainer from '../utils/InputContainer'
import { Button, Icon, Overlay, Divider } from '@rneui/themed'
import * as SecureStore from 'expo-secure-store'
import config from '../config'


const getValueFor = async (key) => {
  const result = await SecureStore.getItemAsync(key);
  (result) ?  console.log("this is the result", result) : console.log("nothing  found", result);
}


const isStorageAvailable = async () => {
  const test = await SecureStore.isAvailableAsync();
  console.log("isStorageAvailable", test);
  await getValueFor('token');
  await getValueFor('userId');
}

const Login = ({navigation}) => {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [isPwdVisible, setPwdVisible] = React.useState(true);
  const [eyeCon, setEyeCon] = React.useState('eye');
  const [showOverkay, setShowOverlay] = React.useState(false);
  const [resOverlay, setResOverlay] = React.useState({color: '#000000', message: 'HellaSku'});

  const saveStorage = async (key, value) => {
    await SecureStore.setItemAsync(key, value)
    .then(()=> {
    })
  }

  const goToSignup = () => navigation.replace('Register');

  const handleResponse = async (res) => {
    if (!res.token) {
      setResOverlay({color: '#800E13', message: 'Your username or password is incorrect'});
      setShowOverlay(true);
      return;
    }
    navigation.navigate('Menu')
    await saveStorage('token', res.token);
    await saveStorage('userId', res.userId);
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
    try {
      await fetch(`http://${config.HOST}:${config.PORT}/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'authorization': 'token'
        },
        body: JSON.stringify({
        username: username,
        password: password,
      
      }),
    })
    .then(response => response.json())
    .then(data => {
      handleResponse(data);
    })
  } catch (error) {
    console.error("error", error);
    }
  };

  return (
    <View style={styles.view}>

      <View style={styles.textinputview}>

        <Overlay isVisible={showOverkay} onBackdropPress={() => setShowOverlay(false)}>

          <Divider inset={true} insetType={'left'} color={resOverlay.color}/>
              
          <Text>{resOverlay.message}</Text>
            
        </Overlay>      
        
        <InputContainer label={"Username"}>

          <TextInput style={styles.inputstyle} onChangeText={onChangeUsername} value={username}></TextInput>

          </InputContainer>
              <InputContainer label={"Password"} style={styles.passwordstring}>

              <View style={styles.passwordprops}>

                  <Icon style={styles.eyecon} name={eyeCon} type='entypo' onPress={passwordOnOff} containerStyle={styles.eye}/>

                  <TextInput style={styles.passwordstring} secureTextEntry={isPwdVisible} onChangeText={onChangePassword} value={password} ></TextInput>

              </View>  


        </InputContainer>

      </View>

      <View style={styles.buttonview}>

        <Button buttonStyle={styles.loginbutton} containerStyle={styles.buttonContainer} title={"Login"} titleStyle={{color:'black'}} onPress={submit}/>

        <Button  buttonStyle={styles.button} title="Signup" titleStyle={{color:'white'}} onPress={goToSignup} type="clear"/>

        <Button onPress={isStorageAvailable} buttonStyle={styles.button} title="Forgot Password ?" titleStyle={{color:'white'}} type="clear"/>

      </View>

    </View>
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
  eye: {
    borderRadius: 50,
  }
});

export default Login