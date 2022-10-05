import { View, StyleSheet } from "react-native";
import {Donut} from 'react-native-donut-chart';

const Data = [
  {
    value: 75,
    color: 'blue',
    // strokeLineJoin: 'round',
  },
  {
    value: 95,
    color: 'orange',
    // strokeLineJoin: 'round',
  },
  {
    value: 16,
    color: 'grey',
    strokeLineJoin: 'nothing'
  }
];

const DonutChartMenu = () => {

  return (
    <View style={styles.donutchartview}>
      <Donut
        gap={0}
        data={Data}
        strokeWidth={25}
        radius={100}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  donutchartview:{
    flex:1,
    borderColor: 'white',
    borderWidth: '1px',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default DonutChartMenu