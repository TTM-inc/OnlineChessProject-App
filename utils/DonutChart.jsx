import { View } from "react-native";
import {Donut} from 'react-native-donut-chart';

const Data = [
  {
    value: 75,
    color: 'blue',
  },
  {
    value: 95,
    color: 'orange',
  },
  {
    value: 12,
    color: 'grey',
  }
];

const DonutChartMenu = () => {

  return (
    <View>
      <Donut
        gap={0}
        data={Data}
      />
    </View>
  )
}

export default DonutChartMenu