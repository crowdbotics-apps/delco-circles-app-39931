import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to Delco Circles</Text>
      <Text style={styles.subtitle}>The smarter way to ride</Text>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    color: '#A9A9A9'
  }
});
export default SplashScreen;