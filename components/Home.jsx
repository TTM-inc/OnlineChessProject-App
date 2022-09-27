import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { Dimmensions } from 'react-native';
import Background from './Background';
import { Button } from '@rneui/themed'
import Register from './Register';


const Home = ({navigation}) => {

    // const windowWidth = Dimmensions.get('window').width;
    // const windowHeight = Dimmensions.get('window').height;
  const goToLogin = () => navigation.navigate("Login");
  const goToRegister = () => navigation.navigate("Register");


  return (
      <SafeAreaView style={styles.view}>
        <View>
          <View style={styles.titleView}>
            <Text>Styled Game Title</Text>
          </View>
          <View style={styles.buttonView}>
            <Button onPress={goToLogin} buttonStyle={styles.button} containerStyle={styles.buttonContainer} title={"Login"}></Button>
            <Button onPress={goToRegister} buttonStyle={styles.button} containerStyle={styles.buttonContainer} title={"Register"}></Button>
            <Button onPress={""} buttonStyle={styles.button} containerStyle={styles.buttonContainer} title={"Play as Guest"}></Button>
          </View>
        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  view: {
    // borderWidth: 3,
    flex: 1,
    display: 'flex',
    backgroundColor: 'rgb(90, 118, 132)',
  },
  button: {
    height: 55,
    borderRadius: 30,
    borderColor: 'black',
    backgroundColor: 'rgb(57, 91, 80)',
  },
  buttonContainer: {
  },
  buttonView: {
    display: 'flex',
    alignSelf: 'center',
    width: '70%',
    marginTop: '80%',
    height: '35%',
    //borderWidth: 3,
    borderRadius: 25,
    //backgroundColor: 'rgb(232, 247, 238)',
    justifyContent: 'space-evenly',
  },
  titleView: {
    borderWidth: 3,
    height: 100,
    width: 300,
  },

});


export default Home