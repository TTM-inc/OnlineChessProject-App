import { View, StyleSheet, Text } from "react-native";
import { Badge } from '@rneui/themed';


const WinRate = () => {

  return (
    <View style={styles.rate}>

      <View style={styles.win}>
        <Badge status="color">25%</Badge>
        <Text>Win</Text>        
      </View>

      <View style={styles.loose}>
        <Text>Loose</Text>
      </View>

      <View style={styles.draw}>
        <Text>Draw</Text>
      </View>

    </View>
  )
}
  
  const styles = StyleSheet.create({
    rate: {
      flex: 1,
      backgroundColor: 'green',
      flexDirection: 'row',
      padding: 5,
    },
    win: {
      flex: 0.33,
      borderWidth: 2,
      borderColor: 'blue'      
    },
    loose: {
      flex: 0.33,
      borderWidth: 2,
      borderColor: 'orange'      

    },
    draw: {
      flex: 0.33,
      borderWidth: 2,
      borderColor: 'grey'      
    },
  })


export default WinRate