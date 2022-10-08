import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { Button } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import * as Storage from './../utils/LocalStorage';

const Home = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState('');
  const goToLogin = () => navigation.navigate('Login');
  const goToRegister = () => navigation.navigate('Register');
  const goToMenu = () =>
    isConnected ? navigation.navigate('Menu') : console.log('isNot connected');
  const [isConnected, setIsConnected] = useState('');
  console.log('isLoading', isLoading);
  console.log('is connected', isConnected);

  const CheckToken = async () => {
    await Storage.isTokenValid(setIsConnected);
  };

  useEffect(() => {
    CheckToken();
  }, []);

  useEffect(() => {
    if (isConnected === false || isConnected === true) setIsLoading(false);
  }, [isConnected]);

  return isLoading === false ? (
    <LinearGradient
      colors={['#31344b', '#13141D']}
      start={{
        x: 0,
        y: 0
      }}
      end={{
        x: 0.3,
        y: 0.4
      }}
      style={styles.view}
    >
      <SafeAreaView style={styles.view}>
        <View style={styles.mainview}>
          <View style={styles.titleView}>
            <Text style={styles.text}>Chess</Text>
          </View>
          <View style={styles.buttonView}>
            <Button
              onPress={goToLogin}
              buttonStyle={styles.button}
              containerStyle={styles.buttonContainer}
              title={'Login'}
              titleStyle={{ color: '#b3b3b3' }}
            ></Button>
            <Button
              onPress={goToRegister}
              buttonStyle={styles.button}
              containerStyle={styles.buttonContainer}
              title={'Register'}
              titleStyle={{ color: '#b3b3b3' }}
            ></Button>
            <Button
              onPress={goToMenu}
              buttonStyle={styles.button}
              containerStyle={styles.buttonContainer}
              title={'Play as Guest'}
              titleStyle={{ color: '#676767' }}
            ></Button>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  ) : (
    <View style={styles.tmpStyle}>
      <Text>LOADING</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    color: '#676767'
  },
  view: {
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    height: '100%',
    backgroundColor: 'transparent'
  },
  mainview: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1,
    height: 55,
    marginTop: 10,
    borderRadius: 30,
    borderColor: '#31344b',
    borderWidth: 1.5
  },
  buttonView: {
    flex: 0.45,
    justifyContent: 'center',
    marginHorizontal: '5%'
  },
  titleView: {
    flex: 1,
    alignItems: 'center'
  },
  tmpStyle: {
    flex: 1,
    color: 'blue',
    backgroundColor: 'blue'
  }
});

export default Home;
