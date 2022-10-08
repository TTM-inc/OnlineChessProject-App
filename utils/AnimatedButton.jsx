import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Animated,
  TouchableHighlight
} from 'react-native';
import { Icon, Button } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';

import React from 'react';

export default class AddButton extends React.Component {
  mode = new Animated.Value(0);
  buttonSize = new Animated.Value(1);

  handlePress = () => {
    Animated.sequence([
      Animated.timing(this.buttonSize, {
        toValue: 0.95,
        duration: 200,
        useNativeDriver: false
      }),
      Animated.timing(this.buttonSize, {
        toValue: 1,
        useNativeDriver: false
      }),
      // Animated.timing(this.mode, {
      //     toValue: 0.75,
      //     useNativeDriver: false,
      //   }),
      Animated.timing(this.mode, {
        toValue: this.mode._value === 0 ? 1 : 0,
        useNativeDriver: false
      })
    ]).start();
  };

  render() {
    const wrenchPos = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 180]
    });

    const profilePos = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 60]
    });

    const friendsPos = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 120]
    });

    const rotation = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '-45deg']
    });

    const sizeStyle = {
      transform: [{ scale: this.buttonSize }]
    };

    return (
      <View style={{ position: 'absolute', alignItems: 'center' }}>
        <Animated.View
          style={{
            position: 'absolute',
            transform: [{ translateY: profilePos }]
          }}
        >
          <LinearGradient
            colors={['#31344b', '#13141D']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0.75, y: 0.85 }}
            style={styles.secondaryButton}
          >
            <View>
              <Icon
                type="font-awesome-5"
                name="user-alt"
                size={24}
                color="#b3b3b3"
              />
            </View>
          </LinearGradient>
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            transform: [{ translateY: friendsPos }]
          }}
        >
          <LinearGradient
            colors={['#31344b', '#13141D']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0.75, y: 0.85 }}
            style={styles.secondaryButton}
          >
            <View>
              <Icon
                type="font-awesome-5"
                name="user-friends"
                size={24}
                color="#b3b3b3"
              />
            </View>
          </LinearGradient>
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            transform: [{ translateY: wrenchPos }]
          }}
        >
          <LinearGradient
            colors={['#31344b', '#13141D']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0.75, y: 0.85 }}
            style={styles.secondaryButton}
          >
            <View>
              <Icon
                type="material-community"
                name="wrench"
                size={24}
                color="#b3b3b3"
              />
            </View>
          </LinearGradient>
        </Animated.View>
        <TouchableHighlight
          onPress={this.handlePress}
          underlayColor="transparent"
        >
          <LinearGradient
            colors={['#31344b', '#13141D']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0.75, y: 0.85 }}
            style={styles.button}
          >
            <Animated.View style={sizeStyle}>
              <Animated.View style={{ transform: [{ rotate: rotation }] }}>
                <Icon
                  type="font-awesome"
                  name="plus"
                  size={24}
                  color="#b3b3b3"
                />
              </Animated.View>
            </Animated.View>
          </LinearGradient>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 2
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 36,
    borderColor: '#31344b',
    borderWidth: 1.5,
    marginTop: 10
  },
  secondaryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: 45,
    height: 45,
    borderRadius: 23,
    borderColor: '#31344b',
    borderWidth: 1.5
  }
});
