import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const BookRideScreen = () => {
  return <View style={styles.container}>
      <View style={styles.mapContainer}>
        <Image source={require('../assets/map-placeholder.png')} style={styles.mapPlaceholder} />
        <Text style={styles.mapText}>Maps Integration Goes Here</Text>
      </View>
      <View style={styles.driverContainer}>
        <Text style={styles.driverTitle}>Nearby Drivers</Text>
        <View style={styles.driverList}>
          <TouchableOpacity style={styles.driverCard}>
            <Image source={require('../assets/driver-placeholder.png')} style={styles.driverImage} />
            <View style={styles.driverInfo}>
              <Text style={styles.driverName}>John Doe</Text>
              <Text style={styles.driverRating}>4.9</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.driverCard}>
            <Image source={require('../assets/driver-placeholder.png')} style={styles.driverImage} />
            <View style={styles.driverInfo}>
              <Text style={styles.driverName}>Jane Smith</Text>
              <Text style={styles.driverRating}>4.8</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book a Ride</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mapPlaceholder: {
    width: 316,
    height: 94,
    resizeMode: 'contain'
  },
  mapText: {
    position: 'absolute',
    top: '50%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  driverContainer: {
    paddingBottom: 20
  },
  driverTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  driverList: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  driverCard: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    flex: 1,
    marginRight: 10
  },
  driverImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  driverInfo: {
    flex: 1
  },
  driverName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  driverRating: {
    fontSize: 16,
    color: '#666'
  },
  bookButton: {
    backgroundColor: '#ff5c5c',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center'
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
export default BookRideScreen;