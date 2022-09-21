// background-color: #FFBBEC;
// background-image: linear-gradient(168deg, #FFBBEC 7%, #7ce0eb 28%, #A9C9FF 42%, #e3b2f3 69%, #adf3e5 88%);

import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const Background = ({children}) => {
  
  return (
    <View>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({ 
  bg: {
    height: 844,
    width: 390,
    backgroundColor: "#FFBBEC",
    backgroundImage: "linear-gradient(168deg, #FFBBEC 7%, #7ce0eb 28%, #A9C9FF 42%, #e3b2f3 69%, #adf3e5 88%)",
  },
});

export default Background