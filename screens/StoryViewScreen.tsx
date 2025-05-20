import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Animated,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../App';

type StoryViewRouteProp = RouteProp<RootStackParamList, 'StoryView'>;

const StoryViewScreen = () => {
  const route = useRoute<StoryViewRouteProp>();
  const navigation = useNavigation();
  const { stories, initialIndex } = route.params; 

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const progress = useRef(new Animated.Value(0)).current;

  const currentStory = stories[currentIndex];

  useEffect(() => {
    progress.setValue(0); 
    const timer = Animated.timing(progress, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    });

    timer.start(({ finished }) => {
      if (finished) {
        handleNext();
      }
    });

    return () => {
      timer.stop();
    };
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.goBack(); 
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Text style={styles.closeText}>X</Text>
      </TouchableOpacity>

       
      <View style={styles.progressBar}>
        <Animated.View
          style={[
            styles.progress,
            {
              width: progress.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </View>

      <View style={styles.touchZone}>
        <TouchableWithoutFeedback onPress={handlePrev}>
          <View style={styles.left} />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={handleNext}>
          <View style={styles.right} />
        </TouchableWithoutFeedback>
      </View>

      
      <Image source={{ uri: currentStory.uri }} style={styles.image} />
      <Text style={styles.username}>{currentStory.user}</Text>
    </View>
  );
};

export default StoryViewScreen;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '90%',
    height: '70%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  username: {
    color: '#fff',
    marginTop: 20,
    fontSize: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 10,
  },
  closeText: {
    color: '#fff',
    fontSize: 24,
  },
  progressBar: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    height: 4,
    backgroundColor: '#444',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 2,
  },
  touchZone: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    zIndex: 5,
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
  },
});
