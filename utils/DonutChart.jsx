import React from 'react';
import { View, StyleSheet } from 'react-native';
// import {Donut} from 'react-native-donut-chart';
// import Pie from 'react-native-pie'
import { DonutChart } from 'react-native-circular-chart';

const DonutChartMenu = () => {
  const Data = [
    {
      value: 95,
      color: '#fd7443',
      name: 'Victories'
    },
    {
      value: 16,
      color: '#303242',
      name: 'Draws'
    },
    {
      value: 75,
      color: '#4b69ff',
      name: 'Defeats'
    }
  ];

  return (
    <View style={styles.donutchartview}>
      <DonutChart
        data={Data}
        datacolor={Data.datacolor}
        radius={75}
        strokeWidth={23}
        containerWidth={105 * 2}
        containerHeight={105 * 2}
        type="round"
        startAngle={0}
        endAngle={360}
        animationType="slide"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  donutchartview: {
    flex: 1,
    // borderColor: 'white',
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default DonutChartMenu;
