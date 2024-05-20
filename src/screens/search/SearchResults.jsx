import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import SearchBar from '../../components/SearchBar';

function SearchResults({navigation, route}) {
  const {search} = route.params;
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch(`${process.env.API_URL}/pelicula/search/${search}`)
      .then(response => response.json())
      .then(data =>
        setSearchResults(data.dataMovies.results.concat(data.dataCast.results)),
      );
  }, [search]);

  const handleFilterPress = () => {
    navigation.navigate('Filters');
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#C1DCF2',
        alignItems: 'center',
      }}>
      <SearchBar
        showSearchBtn={false}
        search={search}
        showFilterBtn={true}
        handleFilterPress={handleFilterPress}
      />
      {searchResults.length === 0 ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            padding: 20,
          }}>
          <Image
            source={require('../../../assets/notfoundmovies-removebg-preview.png')}
            style={{
              width: 230,
              height: 230,
            }}
          />
          <Text
            style={{
              color: '#000',
              fontSize: 18,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            No se encontraron resultados para la busqueda
          </Text>
          <Text
            style={{
              color: '#9E9E9E',
              fontSize: 16,
              textAlign: 'center',
            }}>
            Intentalo nuevamente
          </Text>
        </View>
      ) : (
        <FlatList
          data={searchResults}
          style={{marginTop: 50}}
          renderItem={({item}) => (
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
                }}
                style={{
                  width: 113,
                  height: 148,
                  marginHorizontal: 10,
                  borderRadius: 10,
                }}
              />
              <Text style={{maxWidth: 85, marginBottom: 10}}>{item.title}</Text>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
          numColumns={3}
        />
      )}
    </View>
  );
}

export default SearchResults;
