import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function LoginScreen({navigation}) {
  return (
    <LinearGradient
      colors={['#C1DCF2', '#6C9BC1', '#3A7CA5']}
      style={styles.background}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/main-icon.jpg')}
          style={styles.logo}
        />
        <Text style={styles.title}>Movie Play</Text>
        <Text style={styles.subtitle}>Inicia Sesion</Text>
        <Text style={styles.paragraph}>
          Inicia Sesion y divertite descubriendo nuevos trailers de peliculas y
          series
        </Text>
        <Pressable onPress={() => navigation.replace('Splash')}>
          <Text style={styles.button}>Continuar con Google</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  title: {
    color: '#16425B',
    fontSize: 50,
    fontWeight: '800',
    marginBottom: 50,
  },
  logo: {
    marginTop: 100,
    marginBottom: 10,
    width: 235,
    height: 204,
  },
  subtitle: {
    color: '#0B3750',
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'left',
    width: '300px',
  },
  paragraph: {
    color: '#0B3750',
    fontSize: 20,
    marginBottom: 50,
    textAlign: 'left',
    width: '300px',
  },
  button: {
    fontSize: 20,
    backgroundColor: '#6C9BC1',
    color: '#0B3750',
    borderWidth: 1,
    borderColor: '#0B3750',
    borderRadius: 14,
    paddingHorizontal: 40,
  },
});

export default LoginScreen;
