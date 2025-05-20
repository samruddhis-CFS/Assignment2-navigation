import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import type { RootStackParamList, HomeTabsParamList } from '../App';


type HomeTabNavProp = BottomTabNavigationProp<HomeTabsParamList, 'Home'>;


type RootStackNavProp = NativeStackNavigationProp<RootStackParamList>;


type HomeScreenNavigationProp = CompositeNavigationProp<HomeTabNavProp, RootStackNavProp>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  
  const stories = [...Array(15)].map((_, i) => ({
    uri: `https://i.pravatar.cc/150?img=${i + 15}`,
    user: i === 0 ? 'You' : `user${i + 1}`,
  }));

  const posts = [
  {
    id: '1',
    user: 'john_doe',
    avatar: 'https://i.pravatar.cc/150?img=20',
    image: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?cs=srgb&dl=pexels-simon73-1183099.jpg&fm=jpg',
    likes: 120,
    caption: 'In the mountains!',
    time: '2 hours ago',
  },
  {
    id: '2',
    user: 'jane_smith',
    avatar: 'https://i.pravatar.cc/150?img=15',
    image: 'https://img.freepik.com/free-photo/fuji-mountain-with-milky-way-night_335224-104.jpg?semt=ais_hybrid&w=740',
    likes: 85,
    caption: 'Just hw fast the night changes!!',
    time: '4 hours ago',
  },
  {
    id: '3',
    user: 'steve_smith',
    avatar: 'https://i.pravatar.cc/150?img=16',
    image: 'https://img.freepik.com/free-vector/simple-vibing-cat-square-meme_742173-4493.jpg?semt=ais_hybrid&w=740',
    likes: 85,
    caption: 'Just hw fast the night changes!!',
    time: '4 hours ago',
  },
  {
    id: '4',
    user: 'rocky_ross',
    avatar: 'https://i.pravatar.cc/150?img=17',
    image: 'https://i.pinimg.com/236x/99/3e/9e/993e9e04c70d185ba702a4ef5edadae7.jpg',
    likes: 85,
    caption: 'Just hw fast the night changes!!',
    time: '4 hours ago',
  },
  {
    id: '5',
    user: 'chand_ler',
    avatar: 'https://i.pravatar.cc/150?img=18',
    image: 'https://static.printler.com/cache/5/c/e/3/7/3/5ce373cdba280c780fea5ae3f905d553d2510d1f.jpg',
    likes: 85,
    caption: 'Just hw fast the night changes!!',
    time: '4 hours ago',
  },
  {
    id: '6',
    user: 'joey',
    avatar: 'https://i.pravatar.cc/150?img=19',
    image: 'https://img.freepik.com/free-photo/fuji-mountain-with-milky-way-night_335224-104.jpg?semt=ais_hybrid&w=740',
    likes: 85,
    caption: 'Just hw fast the night changes!!',
    time: '4 hours ago',
  },
];


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logoText}>Instagram</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
            <FontAwesome name="heart-o" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
            <Image
              source={require('../assets/icons/dm.png')}
              style={styles.imageIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.stories}>
        {stories.map((story, index) => (
          <TouchableOpacity
            key={index}
            style={styles.story}
            onPress={() => navigation.navigate('StoryView', { stories, initialIndex: index, })}
          >
            <View style={index === 0 ? styles.yourStoryWrapper : styles.storyWrapper}>
              <Image
                source={{ uri: story.uri }}
                style={styles.storyAvatar}
              />
              {index === 0 && (
                <View style={styles.plusIcon}>
                  <FontAwesome name="plus-circle" size={22} color="#0095f6" />
                </View>
              )}
            </View>
            <Text style={styles.storyUsername}>
              {index === 0 ? 'Your Story' : story.user}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
{/* feed sectin */}
      <ScrollView style={styles.feed} showsVerticalScrollIndicator={false}>
  {posts.map((post) => (
    <View key={post.id} style={styles.postCard}>
      
      <View style={styles.postHeader}>
        <Image source={{ uri: post.avatar }} style={styles.postAvatar} />
        <Text style={styles.postUsername}>{post.user}</Text>
      </View>

      
      <Image source={{ uri: post.image }} style={styles.postImage} />

      
      <View style={styles.postActions}>
        <FontAwesome name="heart-o" size={24} style={styles.postIcon} />
        <FontAwesome name="comment-o" size={24} style={styles.postIcon} />
        <FontAwesome name="send-o" size={24} style={styles.postIcon} />
        <FontAwesome name="bookmark-o" size={24} style={[styles.postIcon, { marginLeft: 'auto' }]} />
      </View>

      
      <Text style={styles.postLikes}>{post.likes} likes</Text>

      
      <Text style={styles.postCaption}>
        <Text style={styles.postUsername}>{post.user}</Text> {post.caption}
      </Text>

      
      <Text style={styles.postTime}>{post.time}</Text>
    </View>
  ))}
</ScrollView>

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    justifyContent: 'center',
  },
  header: {
    height: 60,
    paddingHorizontal: 15,
    paddingTop: 10,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  logoText: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Lobster-Regular.ttf',
  },
  imageIcon: {
    width: 24,
    height: 24,
    marginLeft: 15,
  },
  stories: {
    paddingVertical: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  story: {
    alignItems: 'center',
    marginRight: 12,
  },
  storyAvatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ff8501',
  },
  storyUsername: {
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },
  storyWrapper: {
    borderRadius: 35,
    padding: 2,
  },
  yourStoryWrapper: {
    borderColor: '#ccc',
    borderRadius: 35,
    padding: 2,
  },
  plusIcon: {
    position: 'absolute',
    bottom: 9,
    right: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
  },

  feed: {
  backgroundColor: '#fff',
  marginTop: 10,
},
postCard: {
  marginBottom: 20,
  backgroundColor: '#fff',
},
postHeader: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 10,
},
postAvatar: {
  width: 40,
  height: 40,
  borderRadius: 20,
  marginRight: 10,
},
postUsername: {
  fontWeight: 'bold',
  fontSize: 14,
},
postImage: {
  width: '100%',
  height: 400,
},
postActions: {
  flexDirection: 'row',
  padding: 10,
},
postIcon: {
  marginRight: 15,
},
postLikes: {
  fontWeight: 'bold',
  paddingHorizontal: 10,
},
postCaption: {
  paddingHorizontal: 10,
  marginTop: 5,
},
postTime: {
  paddingHorizontal: 10,
  marginTop: 3,
  fontSize: 12,
  color: '#666',
},

});
