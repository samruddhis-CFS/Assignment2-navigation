import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');
const imageSize = width / 3;

const posts = [
  { id: '1', uri: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d' },
  { id: '2', uri: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e' },
  { id: '3', uri: 'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b' },
  { id: '4', uri: 'https://images.unsplash.com/photo-1517260739337-588d1d914514' },
  { id: '5', uri: 'https://images.unsplash.com/photo-1551024506-0bccd828d307' },
  { id: '6', uri: 'https://images.unsplash.com/photo-1531256379411-9535b1cba1c1' },
  { id: '7', uri: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f' },
  { id: '8', uri: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91' },
  { id: '9', uri: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7' },
  { id: '10', uri: 'https://images.unsplash.com/photo-1581291519195-ef11498d1cf5' },
  { id: '11', uri: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d' },
  { id: '12', uri: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e' },
  { id: '13', uri: 'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b' },
  { id: '14', uri: 'https://images.unsplash.com/photo-1517260739337-588d1d914514' },
  { id: '15', uri: 'https://images.unsplash.com/photo-1551024506-0bccd828d307' },
  { id: '16', uri: 'https://images.unsplash.com/photo-1531256379411-9535b1cba1c1' },
  { id: '17', uri: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f' },
  { id: '18', uri: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91' },
  { id: '19', uri: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7' },
  { id: '20', uri: 'https://images.unsplash.com/photo-1581291519195-ef11498d1cf5' },
];

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color="#888" style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#888"
          style={styles.input}
        />
      </View>

      <FlatList
        data={posts}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image source={{ uri: item.uri }} style={styles.image} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    height: 36,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderWidth: 1,
    borderColor: '#fff',
  },
});
