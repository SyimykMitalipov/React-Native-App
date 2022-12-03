import React from 'react';
import { TouchableHighlight, StyleSheet, Text } from 'react-native';



export default function List({ ele, deleteItem }) {
  return (
    <TouchableHighlight onPress={() => deleteItem(ele.key)}>
      <Text style={styles.text}>{ele.text}</Text>
    </TouchableHighlight>
  )
}




const styles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: 'center',
    borderRadius: '5',
    backgroundColor: '#fafafa',
    borderWidth: 1,
    marginTop: 20,
    width: '80%',
    marginLeft: '10%'
  }
}) 