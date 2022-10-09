import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { Header, Icon, Image } from '@rneui/themed';



const PlayerHeader = () => {

  const playerName = 'Boris Spassky';
  const playerRank = '2660';
  const timing = '02:55';

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.view}>
        <View style={styles.leftContainer}>
          <View style={styles.profileSplit}>
            <View style={styles.profilePhoto}>
              <View style={styles.placeHolder}></View>
            </View>
          </View>
          <View style={styles.playerInfo}>
            <Text style={styles.playerName} >{playerName}</Text>
            <Text style={styles.playerRank}>{playerRank}</Text>
          </View>
        </View>

        <View style={styles.rightContainer}>
          <View style={styles.timer}>
            <Text style={styles.timing}>{timing}</Text>
          </View>
            
          </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // backgroundColor: 'black',
    // borderWidth: 2,
    // borderColor: 'red'
  },
  view: {
    flex: 1,
    // borderColor: 'pink',
    // borderWidth: 2,
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 0.6,
    // borderColor: 'pink',
    // borderWidth: 2,
    flexDirection: 'row',
  },
  profileSplit: {
    flex: 0.38,
    // borderColor: 'yellow',
    // borderWidth: 3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  profilePhoto: {
    flex: 0.7,
    // borderColor: 'blue',
    // borderWidth: 3,
    justifyContent: 'space-evenly',
  },
  placeHolder: {
    flex: 0.58,
    borderColor: '#4b69ff',
    borderWidth: 3,
    borderRadius: 50,
  },
  playerInfo: {
    flex: 0.62,
    // borderColor: 'green',
    // borderWidth: 2,
    justifyContent: 'center',
  },
  playerName: {
    // borderColor: 'cyan',
    // borderWidth: 2,
    color: 'white',
    paddingHorizontal: 5,
  },
  playerRank: {
    // borderColor: 'red',
    // borderWidth: 2,
    color: 'grey',
    paddingHorizontal: 5,
  },
  rightContainer: {
    flex: 0.4,
    // borderColor: 'blue',
    // borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    paddingRight: 18,
    paddingTop: 5,
  },
  timer: {
    flex: 0.6,
    // borderColor: 'yellow',
    // borderWidth: 2,
    marginVertical: 18,
    backgroundColor: '#2E3341',
    justifyContent: 'center',
    borderRadius: 15,
  },
  timing: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 24,
  }
});

export default PlayerHeader;
