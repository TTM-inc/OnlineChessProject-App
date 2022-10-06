import { StyleSheet, View, SafeAreaView, Text } from 'react-native' ;
import { useEffect, useState } from 'react';
import { Button } from '@rneui/themed';


const PlayButton = ({route, navigation, ...props}) => {
  const goToLogin = () => navigation.navigate("Login");


  return (
    
    <SafeAreaView style={styles.background} >

      <View style={styles.card}>

        <Button
          onPress={goToLogin}
          containerStyle={styles.button.container}
          buttonStyle={styles.button.style}
          title={'Online'}
          titleStyle={styles.button.title}
        />

      </View>
      <View style={styles.card}>
      
        <Button
          containerStyle={styles.button.container}
          buttonStyle={styles.button.style}
          title={'Robot'}
          titleStyle={styles.button.title}
          />
      
      </View>
      <View style={styles.card}>

        <Button
          containerStyle={styles.button.container}
          buttonStyle={styles.button.style}
          title={'Local'}
          titleStyle={styles.button.title}
        />

      </View>
      <View style={styles.card}>

        <Button 
          containerStyle={styles.button.container} 
          buttonStyle={styles.button.style}
          title={'Twitch'}
          titleStyle={styles.button.title}
        />

      </View>

    </SafeAreaView>

   )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
    // borderWidth: 2,
    // borderColor: 'red',
    flexWrap: 'wrap',
  },
  card: {
    height: '50%',
    width: '50%',
    backgroundColor: 'black',
    // borderColor: 'green',
    // borderWidth: 2,
  },
  button: {
    container: {
      flex: 1,
      margin: 15,
      // borderColor: 'red',
      // borderWidth: 2,
      borderRadius: 15,
    },
    style: {
      flex: 1,
      backgroundColor: 'white',
    },
    title: {
      color: 'black',
    },
  }
})

export default PlayButton