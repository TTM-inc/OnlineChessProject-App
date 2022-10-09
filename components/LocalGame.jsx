import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import ChessBoard from './../utils/ChessBoard';
import PlayerHeader from '../utils/Game/PlayerHeader';


const LocalGame = () => {


    return (
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
      style={styles.background}
    >
      <SafeAreaView style={styles.mainview}>
        <View name='header' style={styles.header}>
        </View> 
        <View name='playertop' style={styles.playertop}>
          <PlayerHeader/>
        </View>
        <View name='chessboard' style={styles.chessboard}>
            <ChessBoard/>
        </View>
        
        <View name='playerbot' style={styles.playerbot}>
          <PlayerHeader/>
        </View>
      
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  mainview: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    justifySelf:'flex-start',
    flex: 0.12,
    borderColor: 'yellow',
    borderWidth: 2,
    bottomMargin:10,
  },
  playertop: {
    flex:0.12,
    borderColor: 'white',
    borderWidth: 2,
    paddingVertical: 5,
  },
  chessboard: {
    flex:0.6,
    borderColor: 'white',
    borderWidth: 2,
  },
  playerbot: {
    flex:0.12,
    // width:'100%',
    borderColor: 'white',
    borderWidth: 2,
    paddingVertical: 5,
  }

});

export default LocalGame;
