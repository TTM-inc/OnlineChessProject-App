import { Header, Icon, Image } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { Text, StyleSheet, View } from 'react-native'
import sentenceList from '../assets/sentenceList';

const HeaderMenu = () => {
  const [sentencePosition, setSentencePosition] = useState();
  console.log('sentenceList', sentenceList);
  console.log('SentencePosition', sentencePosition);
  useEffect(() => {
    setSentencePosition(Math.round(Math.random(sentenceList.length)));
  },[])

  return (
    <View style={styles.header} >
        <View style={styles.leftContainer}>
            <Text style={styles.text}>
                Welcome,
            </Text>
            <Text style={styles.text}>
              {sentenceList[sentencePosition]}
            </Text>
        </View>
        <View  style={styles.rightContainer}>
          <Image/>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
   header: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection:'row',
   },
   leftContainer: {
    flex: 0.85,
    borderColor: 'white',
    // borderWidth: 1,
    flexDirection:'column',
    justifyContent: 'space-around',
    paddingLeft:20
   },
   rightContainer: {
    flex:0.15,
    borderColor: 'green',
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    color:'white'
  }
});

export default HeaderMenu