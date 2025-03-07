import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const OnlineVideos = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text
            style={{
              fontFamily: 'AirbnbCereal-Book',
              fontSize: 22,
              color: '#fff',
            }}>
            Play Youtube
          </Text>
        </View>
        <View style={styles.content}></View>
      </View>
    </SafeAreaView>
  );
};

export default OnlineVideos;

const styles = StyleSheet.create({
  safeArea: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: '#131313',
  },
  header: {
    height: 50,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
  },
});
