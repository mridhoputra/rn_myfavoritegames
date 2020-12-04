import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import img_profile from '../../assets/img/profile.jpg';

const Profile = () => {
  return (
    <View>
      <Image source={img_profile} style={styles.img} />
      <Text style={styles.name}>M. Ridho Putra Sufa</Text>
      <Text style={styles.email}>m_ridhoputra@yahoo.com</Text>
      <Text style={styles.quote}>Radiant of New Hope</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  img: {
    marginTop: 24,
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    alignSelf: 'center',
  },
  name: {
    marginTop: 4,
    textAlign: 'center',
    color: '#454545',
    fontWeight: 'bold',
    fontSize: 24,
  },
  email: {
    marginVertical: 2,
    textAlign: 'center',
    color: '#0489c9',
  },
  quote: {
    textAlign: 'center',
  },
});
