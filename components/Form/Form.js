import React,{ useState } from 'react';

import {StyleSheet, TextInput, View, Button } from 'react-native';





export default function Form({addHandler}) {

  const [text,setValue] = useState('') 

  const onChange = (text) => {
    setValue(text)
  }
  return(
      <View>
        <TextInput style={styles.input} onChangeText={onChange} placeholder="Добавьте новую задачу" />
      <Button onPress={() => addHandler(text)} title='Добавить задачу' color="green" />
      </View>
  )
}




const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginHorizontal: '20%',
    width: '60%',
    textAlign:'center'
  },
})