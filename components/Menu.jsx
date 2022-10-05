import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import {saveStorage, getValueFor} from './../utils/LocalStorage';
import HeaderMenu from "../utils/Header";
import DonutChartMenu from "../utils/DonutChart";
import WinRateMenu from "../utils/WinRate";
// import Gradient from 'react-native-gradient'

const Menu = (navigation) => {




  return (
    <SafeAreaView style={styles.background} >

        {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}> */}

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


        </View>

      {/* </LinearGradient> */}

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
background: {
  flex: 1,
  backgroundColor:'black',
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
  paddingLeft: 15,
  paddingRight: 15,
  borderRadius: 5
},
});


export default Menu