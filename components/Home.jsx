import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { Dimmensions } from 'react-native';
import Background from './Background';
import { Button } from '@rneui/themed'
import Register from './Register';
import { LinearGradient } from 'expo-linear-gradient';
import { color } from '@rneui/base';
import {saveStorage, getValueFor} from './../utils/LocalStorage';
const jwt = require('jsonwebtoken');





const Home = ({navigation}) => {

  const [isLoading, setIsLoading] = React.useState(true);
  const goToLogin = () => navigation.navigate("Login");
  const goToRegister = () => navigation.navigate("Register");
  const isAuthenticated = () => navigation.navigate("Menu");

  


 if (isLoading) {
  const token = getValueFor('token');
  const userId = getValueFor('userId');
  if (!token || !userId) {
    setIsLoading(false);
    return;
  }
  const decodedtoken = jwt.verify(token, )
}


  return (isLoading) ? (
      <SafeAreaView style={styles.view}>
            <View style = {styles.mainview}>
              <View style={styles.titleView}>
                <Text style={styles.text}>Chess</Text>
              </View>
              <View style={styles.buttonView}>
                <Button onPress={goToLogin} buttonStyle={styles.button} containerStyle={styles.buttonContainer} title={"Login"} titleStyle={{color:'#000000'}}></Button>
                <Button onPress={goToRegister} buttonStyle={styles.button} containerStyle={styles.buttonContainer} title={"Register"} titleStyle={{color:'#000000'}}></Button>
                <Button onPress={""} buttonStyle={styles.button} containerStyle={styles.buttonContainer} title={"Play as Guest"} titleStyle={{color:'#000000'}}></Button>
              </View>
            </View>
      </SafeAreaView>
    ) : (
      <View>
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
    flex:1,
    alignItems: 'center',
  }

});


export default Home