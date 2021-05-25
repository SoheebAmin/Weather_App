import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as location from 'expo-location'

export default function App() {

  const [errorMessage, setErrorMessage] = useState(null)
  
  useEffect(() => {
  load() 
  }, [])

  async function load() {
    try {
      let { status } = await location.requestForegroundPermissionsAsync()

      if(status != 'granted') {
        setErrorMessage('Location Access Required')
        return
      }
    const location = await location.getCurrentLocation()

    const { latitude, longitude } = location.coords
    alert('Latitude : ${latitude}, Longitude: ${longitude}')

    } catch (error) {} 
  }

  return (
    <View style={styles.container}>
      <Text>Coding in Production!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
