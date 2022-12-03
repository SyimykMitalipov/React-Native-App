import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';


import { Header,List ,Form} from './components';


export default function App() {
  const [listOfItem,setListOfItem] = useState([
    {
      text: 'Проснуться с утра',
      key:"1"
    },
    {
      text: 'Позавтракать',
      key: "2"
    },
    {
      text: 'Идти на работу',
      key: "3"
    },
    {
      text: 'Работать',
      key: "4"
    },
  ])

  const deleteItem = (key) => {
    setListOfItem((prev) => {
      prev.filter((todo) => todo.key != key)
    })
  }

  const addHandler = (text)=> {
    setListOfItem(prev => [...prev,{
      key: Math.random().toString(36).substring(7),
      text: text
    }])
  }
  
  return (
    <View style={styles.container}>
      <Header />
      <Form addHandler={addHandler} />
      <View>  
        <FlatList data={listOfItem}  renderItem={({ item }) => (
          <List deleteItem={deleteItem} ele={item} />
        )} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
