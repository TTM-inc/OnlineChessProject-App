import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import ViewStyle from '../assets/styles/TextInputStyle'
import Background from './Background';


const Login = () => {

  return (
    <Background>
      <View style={ViewStyle.container}>
        <Text>Login</Text>
        <TextInput style={styles.string} value='Username'></TextInput>
        <TextInput style={styles.string} value='Password'></TextInput>
      <TextInput style={styles.number} value='Age' keyboardType="numeric"></TextInput>
      </View>
    </Background>
  )
};

const styles = StyleSheet.create({
  string: {
    height: 40,
    margin: 12,
    borderWidth: 1.3,
    padding: 10,
    borderRadius: 35,
},
  number: {
    borderWidth: 1.3,
    borderRadius: 35,
    height: 38,
    width: '20%',
    margin: 12,
    padding: 10,


  }
});



export default Login