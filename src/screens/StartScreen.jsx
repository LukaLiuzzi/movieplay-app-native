import React, {useEffect} from 'react';
import {Image, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const StartScreen = ({navigation}) => {
  console.log(navigation);
  useEffect(() => {
    if (navigation) {
      setTimeout(() => {
        navigation.replace('Home');
      }, 2000);
    }
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#C1DCF2', '#3A7CA5', '#6C9BC1']}
      style={styles.container}>
      <Image
        source={require('../../assets/main-icon.jpg')}
        style={styles.image}
      />
      <Text style={styles.text}>Movie Play</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
  },
  text: {
    fontFamily: 'League Spartan',
    fontSize: 70,
    fontWeight: '800',
    lineHeight: 64.4,
    textAlign: 'left',
    color: '#16425B',
    marginTop: 20,
  },
});

export default StartScreen;
