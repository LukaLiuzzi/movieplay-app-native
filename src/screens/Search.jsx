import {Image, StyleSheet, Text, View} from 'react-native';
import {theme} from '../theme/theme';
import SearchBar from '../components/SearchBar';

function SearchScreen() {
  return (
    <View style={theme.container}>
      <SearchBar />
      <Image
        source={require('../../assets/Not_Found_illustration.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Busca por titulo o actor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 246,
    height: 237,
    marginTop: 150,
  },
  text: {
    color: '#0B3750',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'medium',
  },
});

export default SearchScreen;
