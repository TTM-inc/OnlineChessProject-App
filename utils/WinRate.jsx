import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Badge } from '@rneui/themed';
import ViewStyle from '../assets/styles/TextInputStyle';

const WinRate = () => {
  const Data = [
    {
      value: 95,
      color: 'orange',
      name: 'win'
    },
    {
      value: 16,
      color: 'grey',
      name: 'draw'
    },
    {
      value: 75,
      color: 'blue',
      name: 'loose'
    }
  ];

  const total = Data.win + Data.loose + Data.draw;
  const winRate = 100 * (Data.win / total);
  const looseRate = 100 * (Data.loose / total);
  const drawRate = 100 * (Data.draw / total);

  return (
    <View style={styles.rate}>
      <View style={styles.win}>
        <View style={styles.card}>
          <View style={styles.badgeContainer}>
            <Badge badgeStyle={styles.badge.win} />
          </View>
          <Text style={styles.numbertext}>42%</Text>
        </View>
        <View style={styles.textdiv}>
          <Text style={styles.text}>Victories</Text>
        </View>
      </View>

      <View style={styles.loose}>
        <View style={styles.card}>
          <View style={styles.badgeContainer}>
            <Badge badgeStyle={styles.badge.loose} />
          </View>
          <Text style={styles.numbertext}>69%</Text>
        </View>
        <View style={styles.textdiv}>
          <Text style={styles.text}>Defeats</Text>
        </View>
      </View>

      <View style={styles.draw}>
        <View style={styles.card}>
          <View style={styles.badgeContainer}>
            <Badge badgeStyle={styles.badge.draw} />
          </View>
          <Text style={styles.numbertext}>20%</Text>
        </View>
        <View style={styles.textdiv}>
          <Text style={styles.text}>Draws</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rate: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  badgeContainer: {
    alignSelf: 'center'
  },
  badge: {
    draw: {
      borderWidth: 0,
      backgroundColor: '#303242'
    },
    win: {
      borderWidth: 0,
      backgroundColor: '#fd7443'
    },
    loose: {
      borderWidth: 0,
      backgroundColor: '#4b69ff'
    }
  },
  card: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // borderWidth: 2,
    borderColor: 'purple'
  },
  win: {
    flex: 0.33,
    // borderWidth: 2,
    borderColor: 'blue',
    alignItems: 'center'
  },
  loose: {
    flex: 0.33,
    // borderWidth: 2,
    borderColor: 'orange',
    alignItems: 'center'
  },
  draw: {
    flex: 0.33,
    // borderWidth: 2,
    borderColor: 'grey',
    alignItems: 'center'
  },
  numbertext: {
    color: '#b3b3b3'
  },
  text: {
    color: '#676767'
  },
  textdiv: {
    borderColor: 'white',
    // borderWidth: 1,
    alignSelf: 'flex-start',
    marginLeft: 55
  }
});

export default WinRate;
