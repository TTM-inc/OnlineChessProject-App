import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Background from './Background';
import { Button } from '@rneui/themed'
import Register from './Register';


const Home = ({navigation}) => {

  const goToLogin = () => navigation.navigate("Login");
  const goToRegister = () => navigation.navigate("Register");


  return (
      <Background>
        <View style={styles.view}>
          <View style={styles.titleView}>
            <Text>Styled Game Title</Text>
          </View>
          <View style={styles.buttonView}>
            <Button onPress={goToLogin} buttonStyle={styles.button} containerStyle={styles.buttonContainer} title={"Login"}></Button>
            <Button onPress={goToRegister} buttonStyle={styles.button} containerStyle={styles.buttonContainer} title={"Register"}></Button>
            <Button onPress={""} buttonStyle={styles.button} containerStyle={styles.buttonContainer} title={"Play as Guest"}></Button>
          </View>
        </View>
      </Background>
    )
}

const styles = StyleSheet.create({
  view: {
    height: 600,
    // borderWidth: 3,
    marginVertical: '20%',
    backgroundColor: 'rgb(90, 118, 132)'
  },
  button: {
    height: 80,
    borderRadius: 30,
    borderColor: 'black',
    backgroundColor: 'rgb(57, 91, 80)',
  },
  buttonContainer: {
    width: 250,
    marginVertical: 10,
  },
  buttonView: {
    width: 255,
    height: 342,
    borderWidth: 0.1,
    paddingLeft: 10,
    left: 146,
    top: 110,
    paddingTop: 20,
    borderRadius: 25,
    backgroundColor: 'rgb(232, 247, 238)',
  },
  titleView: {
    borderWidth: 3,
    height: 100,
    width: 300,
  },

});


export default Home