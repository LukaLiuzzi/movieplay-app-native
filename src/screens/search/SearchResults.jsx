import React, {useEffect, useState} from 'react';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import SearchBar from '../../components/SearchBar';

function SearchResults({navigation, route}) {
  const {search} = route.params;
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);

  useEffect(() => {
    fetch(`${process.env.API_URL}/pelicula/search/${search}`)
      .then(response => response.json())
      .then(data =>
        setSearchResults(data.dataMovies.results.concat(data.dataCast.results)),
      )
      .catch(error => {});
  }, [search]);

  const handleFilterPress = () => {
    navigation.navigate('Filters');
  };

  const handlePageClick = page => {
    setCurrentPage(page);
  };

  const renderPaginationButtons = () => {
    const maxButtonsToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxButtonsToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxButtonsToShow + 1);

    if (endPage - startPage + 1 < maxButtonsToShow) {
      startPage = Math.max(1, endPage - maxButtonsToShow + 1);
    }

    const buttons = [];

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <Pressable
          key={i}
          style={{
            backgroundColor: currentPage === i ? '#3A7CA5' : '#C1DCF2',
            padding: 10,
            borderRadius: 5,
            margin: 5,
          }}
          onPress={() => handlePageClick(i)}>
          <Text
            style={{
              color: currentPage === i ? '#C1DCF2' : '#3A7CA5',
              fontWeight: 'bold',
            }}>
            {i}
          </Text>
        </Pressable>,
      );
    }

    return buttons;
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
        isInputDisabled={true}
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
        <>
          <FlatList
            data={searchResults}
            style={{marginTop: 50}}
            renderItem={({item}) => (
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Pressable
                  onPress={() =>
                    navigation.navigate('MovieScreen', {id: item.id})
                  }>
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                    }}
                    style={{
                      width: 113,
                      height: 148,
                      marginHorizontal: 10,
                      borderRadius: 10,
                    }}
                  />
                  <Text style={{maxWidth: 85, marginBottom: 10}}>
                    {item.title}
                  </Text>
                </Pressable>
              </View>
            )}
            keyExtractor={item => item.id.toString()}
            numColumns={3}
          />
          <View style={{flexDirection: 'row', marginTop: 20}}>
            {renderPaginationButtons()}
          </View>
        </>
      )}
    </View>
  );
}

export default SearchResults;
