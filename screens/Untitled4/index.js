import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const UserProfileScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{
        uri: 'https://dummyimage.com/150x150/000/fff'
      }} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>John Doe</Text>
          <View style={styles.rating}>
            <Image source={require('../assets/star.png')} style={styles.starIcon} />
            <Text style={styles.ratingText}>4.5</Text>
          </View>
        </View>
      </View>
      <View style={styles.identityVerification}>
        <Text style={styles.identityVerificationText}>
          Identity Verification
        </Text>
        <View style={styles.identityVerificationStatus}>
          <Image source={require('../assets/checkmark.png')} style={styles.checkmarkIcon} />
          <Text style={styles.identityVerificationStatusText}>
            Verified
          </Text>
        </View>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20
  },
  userInfo: {
    justifyContent: 'center'
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  starIcon: {
    width: 20,
    height: 20,
    marginRight: 5
  },
  ratingText: {
    fontSize: 18
  },
  identityVerification: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 20
  },
  identityVerificationText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  identityVerificationStatus: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkmarkIcon: {
    width: 20,
    height: 20,
    marginRight: 5
  },
  identityVerificationStatusText: {
    fontSize: 18
  }
});
export default UserProfileScreen;