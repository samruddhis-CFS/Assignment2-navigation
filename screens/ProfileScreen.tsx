import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const { width } = Dimensions.get('window');

const ProfileScreen = () => {

  const posts = Array.from({ length: 12 }, (_, i) => ({
    id: i.toString(),
    image: `https://picsum.photos/id/${i + 10}/300/300`,
  }));

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.username}>your_username</Text>
        <FontAwesome name="bars" size={24} />

      </View>


      <View style={styles.profileInfo}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=30' }}
          style={styles.avatar}
        />
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>54</Text>
            <Text>Posts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>1.2k</Text>
            <Text>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>350</Text>
            <Text>Following</Text>
          </View>
        </View>
      </View>

      
      <View style={styles.bio}>
        <Text style={styles.name}>Your Name</Text>
        <Text>React Native Developer 🚀</Text>
        <Text style={styles.link}>https://yourwebsite.com</Text>
      </View>

      
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text>Share Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionbutton}>
          <FontAwesome name="user-plus" size={16} />
        </TouchableOpacity>
      </View>

      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.highlights}>
        {[...Array(5)].map((_, i) => (
          <View key={i} style={styles.highlightCircle}>
            <Image
              source={{ uri: `https://i.pravatar.cc/100?img=${i + 40}` }}
              style={styles.highlightImage}
            />
            <Text style={styles.highlightLabel}>Story {i + 1}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.tabs}>
        <FontAwesome name="th" size={22} />
        <FontAwesome name="video-camera" size={22} />
        <FontAwesome name="id-badge" size={22} />
      </View>

      <View style={styles.postGrid}>
        {posts.map((post) => (
          <Image
            key={post.id}
            source={{ uri: post.image }}
            style={styles.gridImage}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
  },
  username: { fontWeight: 'bold', fontSize: 18 },
  profileInfo: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  avatar: { width: 80, height: 80, borderRadius: 40 },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },
  stat: { alignItems: 'center' },
  statNumber: { fontWeight: 'bold', fontSize: 16 },
  bio: { paddingHorizontal: 15 },
  name: { fontWeight: 'bold' },
  link: { color: '#0095f6' },
  actions: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 4,
    borderRadius: 5,
    paddingVertical: 4,      
    paddingHorizontal: 8
  },
  actionbutton: {
   width: 35,
   height: 35,
   borderWidth: 1,
   borderColor: '#ccc',
   borderRadius: 6,
   alignItems: 'center',
   justifyContent: 'center',
  },

  highlights: {
    paddingVertical: 10,
    paddingLeft: 15,
  },
  highlightCircle: { alignItems: 'center', marginRight: 15 },
  highlightImage: { width: 60, height: 60, borderRadius: 30 },
  highlightLabel: { fontSize: 12, marginTop: 4 },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  postGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridImage: {
    width: width / 3,
    height: width / 3,
  },
});
