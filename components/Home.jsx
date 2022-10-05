import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { Dimmensions } from 'react-native';
import Background from './Background';
import { Button } from '@rneui/themed'
import Register from './Register';
import { LinearGradient } from 'expo-linear-gradient';
import { color } from '@rneui/base';
import * as Storage from './../utils/LocalStorage';

const Home = ({navigation}) => {

  const [isLoading, setIsLoading] = useState('');
  const goToLogin = () => navigation.navigate("Login");
  const goToRegister = () => navigation.navigate("Register");
  const goToMenu = () => (isConnected) ? navigation.navigate("Menu") : console.log("isNot connected");
  const [isConnected, setIsConnected] = useState('');
  console.log("isLoading", isLoading);
  
  const CheckToken = async () => {
    await Storage.isTokenValid(setIsConnected)
  }
  
  useEffect(() => {
    CheckToken();
  }, [])

  useEffect(() => {
    if(isConnected === false || isConnected === true) 
      setIsLoading(false);
  }, [isConnected])

  return (isLoading === false) ? (
      <SafeAreaView style={styles.view}>
            <View style = {styles.mainview}>
              <View style={styles.titleView}>
                <Text style={styles.text}>Chess</Text>
              </View>
              <View style={styles.buttonView}>
                <Button onPress={goToLogin} buttonStyle={styles.button} containerStyle={styles.buttonContainer} title={"Login"} titleStyle={{color:'#000000'}}></Button>
                <Button onPress={goToRegister} buttonStyle={styles.button} containerStyle={styles.buttonContainer} title={"Register"} titleStyle={{color:'#000000'}}></Button>
                <Button onPress={goToMenu} buttonStyle={styles.button} containerStyle={styles.buttonContainer} title={"Play as Guest"} titleStyle={{color:'#000000'}}></Button>
              </View>
            </View>
      </SafeAreaView>
    ) : (
      <View style={styles.tmpStyle}>
        <Text>LOADING</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  
  text:{
    fontSize: 50,
    color:'#FFFFFF',
  },
  view: {
    flex:1,
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  button: {
    height: 55,
    marginTop: 10,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
  },
  mainview: {
    flex:1,
    flexDirection:'column',
    justifyContent: 'center',
  },
  buttonView: {
    flex:0.45,
    justifyContent: 'center',
    marginHorizontal: '5%',
  },
  titleView: {
    flex: 1,
    alignItems: 'center',
  },
  tmpStyle: {
    flex: 1,
    color: 'blue',
    backgroundColor: 'blue',
  }
});


export default Home