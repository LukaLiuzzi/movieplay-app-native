import React from 'react';
import {Pressable, Text, View} from 'react-native';

const Filters = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C1DCF2',
      }}>
      <Pressable
        style={{
          padding: 10,
          paddingVertical: 20,
          backgroundColor: '#ABB0BC',
          color: 'white',
          borderRadius: 10,
          margin: 10,
          width: '80%',
          alignItems: 'center',
        }}
        onPress={() => {}}>
        <Text style={{color: 'white'}}>Mas relevantes</Text>
      </Pressable>
      <Pressable
        style={{
          padding: 10,
          paddingVertical: 20,
          backgroundColor: '#ABB0BC',
          color: 'white',
          borderRadius: 10,
          margin: 10,
          width: '80%',
          alignItems: 'center',
        }}
        onPress={() => {}}>
        <Text style={{color: 'white'}}>
          Fecha de publicacion: Mas nuevo a mas viejo
        </Text>
      </Pressable>
      <Pressable
        style={{
          padding: 10,
          paddingVertical: 20,
          backgroundColor: '#ABB0BC',
          color: 'white',
          borderRadius: 10,
          margin: 10,
          width: '80%',
          alignItems: 'center',
        }}
        onPress={() => {}}>
        <Text style={{color: 'white'}}>
          Fecha de publicacion: Mas viejo a mas nuevo
        </Text>
      </Pressable>
      <Pressable
        style={{
          padding: 10,
          paddingVertical: 20,
          backgroundColor: '#ABB0BC',
          color: 'white',
          borderRadius: 10,
          margin: 10,
          width: '80%',
          alignItems: 'center',
        }}
        onPress={() => {}}>
        <Text style={{color: 'white'}}>Calificacion: De mayor a menor</Text>
      </Pressable>
      <Pressable
        style={{
          padding: 10,
          paddingVertical: 20,
          backgroundColor: '#ABB0BC',
          color: 'white',
          borderRadius: 10,
          margin: 10,
          width: '80%',
          alignItems: 'center',
        }}
        onPress={() => {}}>
        <Text style={{color: 'white'}}>Calificacion: De menor a mayor</Text>
      </Pressable>
    </View>
  );
};

export default Filters;
