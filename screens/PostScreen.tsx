import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PostScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Post Screen</Text>
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
