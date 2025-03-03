import {StyleSheet, Text, StatusBar, ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React from 'react';

const bgImage = require('../assets/images/video_bg.png');

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={styles.bgImage}>
        <StatusBar
          barStyle={'light-content'}
          translucent={true}
          backgroundColor={'transparent'}
        />
        <Text>HomeScreen</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  bgImage: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
