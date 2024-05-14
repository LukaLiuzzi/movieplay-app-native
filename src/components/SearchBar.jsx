import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBar = () => {
  return (
    <View style={styles.navigationContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Buscar por titulo o elenco"
          style={styles.input}
        />
        <Ionicons name="search" size={32} color="#3A7CA5" />
      </View>
      <Ionicons name="filter" size={32} color="#3A7CA5" />
    </View>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 294,
    height: 40,
    borderColor: '#OB3750',
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 20,
    fontSize: 20,
  },
  input: {
    color: '#0B3750',
    flex: 1,
  },
});

export default SearchBar;
