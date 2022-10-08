import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

const Test = () => {
  return (
    <SafeAreaView style={styles.background}>
      <View>
        <Text>Tj le meme pb</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'blue',
    borderWidth: 2,
    borderColor: 'red'
  }
});

export default Test;
