import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import {saveStorage, getValueFor} from './../utils/LocalStorage';
import HeaderMenu from "../utils/Header";
import DonutChartMenu from "../utils/DonutChart";
//import LinearGradient from 'react-native-linear-gradient';

const Menu = (navigation) => {

  return (
    <SafeAreaView style={styles.background}>

      <View style={styles.infodiv}>

        <View style={styles.header}>
          <HeaderMenu/>
        </View>

        <View style={styles.graph}>
          <DonutChartMenu/>
        </View>
        
        <View style={styles.winrate}>

        </View>

      </View>

      <View style={styles.playdiv}>


      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
background: {
  flex: 1,
  backgroundColor: '#000000'
},
infodiv: {
  flex:0.5,
  borderColor: 'red',
  borderWidth: 1,
  flexDirection: 'column',
},
header:{
  flex:0.2,
  borderColor: 'white',
  borderWidth: 1,
},
graph:{
  flex:0.6,
  borderColor: 'white',
  borderWidth: 1,
},
winrate:{
  flex:0.2,
  borderColor: 'white',
  borderWidth: 1,
},
playdiv:{
  flex:0.5,
  borderColor: 'blue',
  borderWidth: 1,
},
});


export default Menu