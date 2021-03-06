import React from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Judul from'./component/Judul';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Judul title = "BIODATA"/>
       <Judul title = "LOGIN"/>
        <Judul title = "NAMBAH"/>
        <Text style={styles.welcome}>Nama: Belanita Aniawati Ardani </Text>
        <Text style={styles.instructions}>Kelas: XI_RPL 3 </Text>
        <Text style={styles.instructions}>No Absen: 11</Text>
        <Image source={require('./1.jpg')} style={{width: 200, height:200}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});