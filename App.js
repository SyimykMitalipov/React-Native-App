import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView, Button, Alert, Pressable, TouchableWithoutFeedback, Platform } from 'react-native';

export default function App() {
  const handleShowAlert = ()=> {
      Alert.alert('Have','a nice day')
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.block}>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Hello Man</Text>
      <Pressable style={styles.button} onPress={handleShowAlert}>
        <Text style={styles.buttonText}>Нажми на меня :) </Text>
      </Pressable>
      </View> */}
      <View style={styles.mainBlock}>
        <View style={[styles.flex,{backgroundColor: 'blue'}]}></View>
        <View style={[styles.flex,{backgroundColor: 'yellow'}]}></View>
        <View style={[styles.flex,{backgroundColor:'green'}]}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#577CFF'
  }, 
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: "100%",
  },
  text: {
    fontSize: 40,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 15,
    marginTop: 20,
    shadowColor: 'purple',
    shadowOpacity: 5,
    shadowRadius:5,
  },
  buttonText: {
    fontSize: '20px',
    color: '#fff',
  },
  block:{
     width:200,
     height: 150,
     backgroundColor: 'yellow',
     borderWidth: 2,
     borderColor: 'blue',
     borderRadius: 10,
     borderStyle: 'solid',
     position: 'absolute',
     top: Platform.OS == 'ios'? 470 : 450,
  },
  mainBlock: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    alignItems: 'flex-end '
  },
  flex: {
    width: 100,
    height: 100
  }
});
