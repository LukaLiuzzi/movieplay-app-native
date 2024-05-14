import React from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useFetch} from '../hooks/useFetch';

function HomeScreen() {
  const {data} = useFetch(
    'https://api.themoviedb.org/3/trending/all/day?language=es-ES&api_key=f14ce6e8c9f072c946514db4263511ca',
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nuevo trailer</Text>

      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${data?.results[0].backdrop_path}`,
        }}
        style={{
          width: 342,
          height: 187,
          marginHorizontal: 'auto',
          borderRadius: 20,
        }}
      />
      <View style={styles.genreContainer}>
        <Text style={styles.title}>Ultimos trailers</Text>
        <Pressable>
          <Text style={styles.genreButton}>Genero: todos</Text>
        </Pressable>
      </View>
      <FlatList
        data={data?.results.slice(0, data.results.length / 2)}
        renderItem={({item}) => (
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
            }}
            style={{width: 139, height: 162, marginHorizontal: 5}}
          />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal
      />
      <FlatList
        data={data?.results.slice(data.results.length / 2)}
        renderItem={({item}) => (
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
            }}
            style={{width: 139, height: 162, marginHorizontal: 5}}
          />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C1DCF2',
    paddingHorizontal: 15,
  },
  title: {
    color: '#0B3750',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  genreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  genreButton: {
    backgroundColor: '#FF407D',
    paddingHorizontal: 5,
    textTransform: 'uppercase',
    color: '#0B3750',
    fontSize: 12,
    borderRadius: 20,
  },
});

export default HomeScreen;
