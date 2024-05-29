import React from 'react';
import {Image, Text, View} from 'react-native';

function FavoritesScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C1DCF2',
      }}>
      <Image
        style={{width: 250, height: 250, marginBottom: 20}}
        source={require('../../assets/No-Favorite-illustration.png')}
      />
      <Text
        style={{
          color: '#0B3750',
          fontSize: 18,
          fontWeight: 500,
          marginBottom: 10,
        }}>
        No hay favoritos
      </Text>
      <Text
        style={{
          color: '#9E9E9E',
          fontSize: 16,
          fontWeight: 400,
        }}>
        ¡Agrega tus trailers favoritos aca!
      </Text>
    </View>
  );
}

export default FavoritesScreen;
