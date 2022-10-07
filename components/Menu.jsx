import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import {saveStorage, getValueFor} from './../utils/LocalStorage';
import HeaderMenu from "../utils/Header";
import DonutChartMenu from "../utils/DonutChart";
import WinRateMenu from "../utils/WinRate";
import PlayButtonMenu from "../utils/PlayButton";
import { LinearGradient } from 'expo-linear-gradient';

const Menu = (navigation) => {




  return (
    <SafeAreaView style={styles.background} >

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
        style={styles.linearGradient}>

          <View style={styles.infodiv} >

            <View style={styles.header} >
              <HeaderMenu/>
            </View>

            <View style={styles.graph} >
              <DonutChartMenu />
            </View>
            
            <View style={styles.winrate} >
              <WinRateMenu />
            </View>

          </View>

          <View style={styles.playdiv} >
            <PlayButtonMenu/>

          </View>

      </LinearGradient>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
background: {
  flex: 1,
  backgroundColor:'#13141D',
},

infodiv: {
  flex:0.5,
  // borderColor: 'red',
  // borderWidth: 1,
  flexDirection: 'column',
},
header:{
  flex:0.2,
  // borderColor: 'white',
  // borderWidth: 1,
},
graph:{
  flex:0.6,
  // borderColor: 'white',
  // borderWidth: 1,
},
winrate:{
  flex:0.2,
  borderColor: 'white',
  // borderWidth: 1,
},
playdiv:{
  flex:0.5,
  // borderColor: 'blue',
  // borderWidth: 1,
},
linearGradient: {
  flex: 1,
},
});


export default Menu