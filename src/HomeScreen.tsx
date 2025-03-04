import {
  StyleSheet,
  Text,
  StatusBar,
  ImageBackground,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const bgImage = require('../assets/images/home_bg.jpg');

const screenDiamention = Dimensions.get('screen');

const HomeScreen = () => {
  const [dimensions, setDimensions] = useState(screenDiamention);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor={'transparent'}
      />
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={styles.bgImage}>
        <View
          style={[
            styles.bottomContainer,
            {width: dimensions.width, height: (dimensions.height * 4) / 10},
          ]}>
          <View
            style={[
              styles.titleContainer,
              {padding: (dimensions.width * 10) / 100},
            ]}>
            <Text style={styles.title}>Player</Text>
            <Text style={styles.title}>
              That <Text style={{color: '#ea2379'}}>Plays</Text>
            </Text>
            <Text style={styles.title}>All</Text>
            <Text style={{color: 'gray'}}>
              Ultimate solution to your media capabilites
            </Text>
            <TouchableOpacity style={styles.btn}>
              <Text>wg</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  bgImage: {
    flex: 1,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    backgroundColor: 'black',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    color: 'white',
    fontSize: 44,
    fontWeight: '700',
  },
  btn: {
    backgroundColor: '#ea2379',
    height: 70,
    marginTop: 20,
    borderRadius: 50,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
