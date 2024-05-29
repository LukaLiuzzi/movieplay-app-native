import React from 'react';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import {useFetch} from '../../hooks/useFetch';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Error from '../../components/Error';

const MovieScreen = ({navigation, route}) => {
  const {id} = route.params;
  const {data, loading, error} = useFetch(
    `${process.env.API_URL}/pelicula/${id}`,
  );

  if (error) {
    return <Error message="Ocurrio un error al cargar el trailer" />;
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#C1DCF2',
      }}>
      <View style={{position: 'relative'}}>
        <Pressable
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            zIndex: 10,
          }}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} color="#0B3750" />
        </Pressable>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${data?.backdrop_path}`,
          }}
          style={{width: '100%', height: 337, objectFit: 'cover'}}
        />
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${data?.poster_path}`,
          }}
          style={{
            width: 120,
            height: 180,
            position: 'absolute',
            top: 150,
            right: 10,
            zIndex: 10,
          }}
        />
      </View>
      <View>
        <Text
          style={{
            color: '#0B3750',
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center',
            paddingHorizontal: 20,
          }}>
          {data?.title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 40,
          }}>
          <Text>{new Date(data?.release_date).getFullYear()}</Text>
          <Text> | </Text>
          <Text>
            {Math.floor(data?.runtime / 60)}h {data?.runtime % 60} min
          </Text>
          <Text> | </Text>
          <Text>
            {data?.genres
              .map(el => el.name)
              .slice(0, 2)
              .join(' / ')}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
            gap: 10,
          }}>
          <Pressable
            style={{
              backgroundColor: '#0B3750',
              padding: 5,
              borderRadius: 5,
              paddingHorizontal: 40,
            }}>
            <Text style={{color: 'white', fontSize: 14}}>Trailer</Text>
          </Pressable>
          <Pressable
            style={{backgroundColor: '#0B3750', padding: 5, borderRadius: 5}}>
            <Ionicons name="heart" size={20} color="white" />
          </Pressable>
          <Pressable
            style={{backgroundColor: '#0B3750', padding: 5, borderRadius: 5}}>
            <Ionicons name="star" size={20} color="white" />
          </Pressable>
          <Pressable
            style={{backgroundColor: '#0B3750', padding: 5, borderRadius: 5}}>
            <Ionicons name="share-social" size={20} color="white" />
          </Pressable>
        </View>
      </View>
      <View>
        <Text
          style={{
            color: '#0B3750',
            fontSize: 12,
            fontWeight: 'bold',
            paddingHorizontal: 20,
            marginTop: 10,
            marginBottom: 5,
            textTransform: 'uppercase',
          }}>
          "{data?.tagline || data?.title}"
        </Text>
        <Text
          style={{
            color: '#0B3750',
            fontSize: 12,
            paddingHorizontal: 20,
          }}>
          {data?.overview}
        </Text>
      </View>
      {data?.directing && (
        <View style={{paddingHorizontal: 20, marginVertical: 20, gap: 10}}>
          <Text style={{color: '#0B3750', fontSize: 12, fontWeight: '500'}}>
            DIRIGIDO POR
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {data?.directing.map(el => (
              <Text key={el.id} style={{fontSize: 14, fontWeight: 700}}>
                {el.name}
              </Text>
            ))}
          </View>
          {data?.acting && (
            <View>
              <Text style={{color: '#0B3750', fontSize: 12, fontWeight: '500'}}>
                ELENCO
              </Text>
              <FlatList
                data={data?.acting}
                renderItem={({item}) => (
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${item.profile_path}`,
                    }}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 10,
                      marginTop: 10,
                      marginRight: 10,
                    }}
                  />
                )}
                keyExtractor={item => item.id.toString()}
                horizontal
              />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default MovieScreen;
