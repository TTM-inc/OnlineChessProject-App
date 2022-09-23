import { StyleSheet, View, Text, ScrollView, TextInput, Modal } from 'react-native';

const InputContainer = ({children, label}) => {
  return (
    
    <View style={styles.centeredView}>
    <Text style={styles.label}>{label}</Text>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    // borderWidth: 3,
    paddingHorizontal: 10,
    marginTop: 15,
    marginHorizontal: 28,
    width: 300,
    backgroundColor: 'rgb(232, 247, 238)',
    borderRadius: 15,
  },
  label: {
    color: 'rgb(90, 118, 132)',
    paddingTop: 15,
    paddingLeft: 5,
    fontSize: 22,
  },
});

export default InputContainer