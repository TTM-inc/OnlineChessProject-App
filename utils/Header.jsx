import { Header, Icon, Image } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import AnimatedButton from './AnimatedButton';
import sentenceList from '../assets/sentenceList';

const HeaderMenu = () => {
  const [sentencePosition, setSentencePosition] = useState();
  console.log('sentenceList', sentenceList);
  console.log('SentencePosition', sentencePosition);
  useEffect(() => {
    setSentencePosition(Math.round(Math.random(sentenceList.length)));
  }, []);

  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        <Text style={styles.text}>Welcome,</Text>
        <Text style={styles.sentence}>{sentenceList[sentencePosition]}</Text>
      </View>
      <View style={styles.rightContainer}>
        <AnimatedButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row'
  },
  leftContainer: {
    flex: 0.8,
    borderColor: 'white',
    // borderWidth: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 20
  },
  rightContainer: {
    flex: 0.2,
    borderColor: 'green',
    // borderWidth: 1,
    alignItems: 'center'
  },
  text: {
    color: '#b3b3b3'
  },
  sentence: {
    color: '#676767'
  }
});

export default HeaderMenu;
