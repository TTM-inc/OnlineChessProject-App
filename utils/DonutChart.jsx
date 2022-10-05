import { View, StyleSheet } from "react-native";
// import {Donut} from 'react-native-donut-chart';
// import Pie from 'react-native-pie'
import { DonutChart } from "react-native-circular-chart";




const DonutChartMenu = () => {

  const Data = [
    {
      value: 95,
      color: 'orange',
      name: 'win'
    },
    {
      value: 16,
      color: 'grey',
      strokeLineJoin: 'nothing',
      name: 'loose',
    },
    {
      value: 75,
      color: 'blue',
      name: 'draw',
    },
  ];



  return (
    <View style={styles.donutchartview}>
      <DonutChart
      data={Data}
      radius={90}
      containerWidth={105 * 2}
      containerHeight={105 * 2}
      type="butt"
      startAngle={0}
      endAngle={360}
      animationType="slide"
      />

    </View>
  )
}

const styles = StyleSheet.create({
  donutchartview:{
    flex:1,
    borderColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DonutChartMenu