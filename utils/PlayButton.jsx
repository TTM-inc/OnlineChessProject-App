import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { Button } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';

const PlayButton = ({ route, navigation, ...props }) => {
  const goToLogin = () => navigation.navigate('Login');

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.card}>
        <LinearGradient
          colors={['#31344b', '#13141D']}
          start={{
            x: 1,
            y: 0
          }}
          end={{
            x: 0.75,
            y: 0.85
          }}
          style={styles.button.topleftcontainer}
        >
          <Button
            onPress={goToLogin}
            buttonStyle={styles.button.style}
            title={'Online'}
            titleStyle={styles.button.title}
          />
        </LinearGradient>
      </View>
      <View style={styles.card}>
        <LinearGradient
          colors={['#31344b', '#13141D']}
          start={{
            x: 1,
            y: 0
          }}
          end={{
            x: 0.75,
            y: 0.85
          }}
          style={styles.button.bottomleftcontainer}
        >
          <Button
            buttonStyle={styles.button.style}
            title={'Robot'}
            titleStyle={styles.button.title}
          />
        </LinearGradient>
      </View>
      <View style={styles.card}>
        <LinearGradient
          colors={['#31344b', '#13141D']}
          start={{
            x: 1,
            y: 0
          }}
          end={{
            x: 0.75,
            y: 0.85
          }}
          style={styles.button.toprightcontainer}
        >
          <Button
            buttonStyle={styles.button.style}
            title={'Local'}
            titleStyle={styles.button.title}
          />
        </LinearGradient>
      </View>
      <View style={styles.card}>
        <LinearGradient
          colors={['#31344b', '#13141D']}
          start={{
            x: 1,
            y: 0
          }}
          end={{
            x: 0.75,
            y: 0.85
          }}
          style={styles.button.bottomrightcontainer}
        >
          <Button
            buttonStyle={styles.button.style}
            title={'Twitch'}
            titleStyle={styles.button.title}
          />
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: 'red',
    flexWrap: 'wrap'
  },
  card: {
    height: '50%',
    width: '50%'
    // borderColor: 'green',
    // borderWidth: 2,
  },
  button: {
    topleftcontainer: {
      flex: 1,
      marginBottom: 4,
      marginLeft: 15,
      marginTop: 10,
      marginRight: 4,
      // borderColor: 'red',
      // borderWidth: 2,
      borderRadius: 8
    },
    bottomleftcontainer: {
      flex: 1,
      marginLeft: 15,
      marginTop: 4,
      marginRight: 4,
      marginBottom: 10,
      // borderColor: 'red',
      // borderWidth: 2,
      borderRadius: 8
    },
    toprightcontainer: {
      flex: 1,
      marginRight: 15,
      marginTop: 10,
      marginLeft: 4,
      marginBottom: 4,
      // borderColor: 'red',
      // borderWidth: 2,
      borderRadius: 8
    },
    bottomrightcontainer: {
      flex: 1,
      marginLeft: 4,
      marginBottom: 10,
      marginRight: 15,
      marginTop: 4,
      // borderColor: 'red',
      // borderWidth: 2,
      borderRadius: 8
    },
    style: {
      // flex: 1,
      // backgroundColor: 'white',
      height: '100%',
      backgroundColor: 'transparent'
    },
    title: {
      color: '#676767'
    }
  }
});

export default PlayButton;
