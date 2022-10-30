import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, FlatList, TouchableHighlight } from 'react-native' ;
import { useEffect, useState } from 'react';
import { Chessboard } from "react-chessboard";


const MyChessBoard = () => {

  const place = [ {nb: '1', pos:'a1'}, {nb: '2', pos:'a2'}, {nb: '3', pos:'a3'}, {nb: '4', pos:'a4'}, {nb: '5', pos:'a5'}, {nb: '6', pos:'a6'}, {nb: '7', pos:'a7'}, {nb: '8', pos:'a8'}, {nb: '9', pos:'b1'}, {nb: '10', pos:'b2'}, {nb: '11', pos:'b3'}, {nb: '12', pos:'b4'}, {nb: '13', pos:'b5'}, {nb: '14', pos: 'b6'}, {nb: '15', pos:'b7'}, {nb: '16', pos:'b8'}, {nb : '17', pos:'c1'}, {nb: '18', pos:'c2'}, {nb: '19', pos:'c3'}, {nb: '20', pos:'c4'}, {nb: '21', pos:'c5'}, {nb: '22', pos:'c6'}, {nb: '23', pos:'c7'}, {nb: '24', pos:'c8'}, {nb: '25', pos:'d1'}, {nb: '26', pos:'d2'}, {nb: '27', pos:'d3'}, {nb: '28', pos:'d4'}, {nb: '29', pos:'d5'}, {nb: '30', pos:'d6'},
  {nb: '31', pos:'d7'}, {nb: '32', pos:'d8'}, {nb: '33', pos:'e1'}, {nb: '34', pos:'e2'}, {nb: '35', pos:'e3'}, {nb: '36', pos:'e4'}, {nb: '37', pos:'e5'}, {nb: '38', pos:'e6'}, {nb: '39', pos:'e7'}, {nb: '40', pos:'e8'}, {nb: '41', pos:'f1'}, {nb: '42', pos:'f2'}, {nb: '43', pos:'f3'}, {nb: '44', pos:'f4'}, {nb: '45', pos:'f5'}, {nb: '46', pos:'f6'}, {nb: '47', pos:'f7'}, {nb: '48', pos:'f8'}, {nb: '49', pos:'g1'}, {nb: '50', pos:'g2'}, {nb: '51', pos:'g3'}, {nb: '52', pos:'g4'}, {nb: '53', pos:'g5'}, {nb: '54', pos:'g6'}, {nb: '55', pos:'g7'}, {nb: '56', pos:'g8'}, {nb: '57', pos:'h1'}, {nb: '58', pos:'h2'}, {nb: '59', pos:'h3'}, {nb: '60', pos:'h4'}, {nb: '61', pos:'h5'}, {nb: '62', pos:'h6'}, {nb: '63', pos:'h7'}, {nb: '64', pos:'h8'}];          

  const Item = ({item}) => {
    
    const nb = parseInt(item.nb)

    const isMultipleOfTwo = (nb) => {
      const tmp = nb % 2;
      if (tmp === 0) return 0
      else return 1
    }

    let row = ((nb / 8));
    if (Number.isInteger(row)) row--
    else row = Math.floor(row)

    const col = isMultipleOfTwo(nb)
    row = isMultipleOfTwo(row)

    const backgroundColor = (nb % 2 ) ? "#13141D" : "#2E3341";
    const Case = {backgroundColor, ...styles.place}

    return ( 
        <TouchableHighlight
          style={Case} 
          onPress={() => console.log(item.pos)}>
          <View>
            <Text>{item.pos}</Text>
          </View>
        </TouchableHighlight>

    )
  };

  const renderPlace = ({ place }) => {
    <Item title={place}/>
  }

  return (

    <SafeAreaView style={styles.background}>
      <FlatList
        numColumns={8}
        data={place}
        renderItem={Item}
        keyExtractor={(item) => item.nb}
        style={styles.flat}
      />
    </SafeAreaView>
   )

}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'red',
  },
  place: {
    flex: 2,
    alignItems: "center",
    borderColor: 'green',
    borderWidth: 2,
  },
  flat: {
    flex: 1,
    borderColor: 'yellow',
    borderWidth: 2,
  }
})

export default MyChessBoard