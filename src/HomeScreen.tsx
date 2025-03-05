import {
  StyleSheet,
  Text,
  StatusBar,
  ImageBackground,
  View,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const bgImage = require('../assets/images/home_bg.jpg');
const screenDiamention = Dimensions.get('screen');

const HomeScreen = () => {
  const [dimensions, setDimensions] = useState(screenDiamention);

  const popUpAnim = useRef(new Animated.Value(dimensions.height)).current;

  useEffect(() => {
    const popUp = setTimeout(() => {
      Animated.timing(popUpAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 500);
    return () => clearTimeout(popUp);
  }, []);

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
        <Animated.View
          style={[
            styles.bottomContainer,
            {
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              width: dimensions.width,
              height: (dimensions.height * 4) / 10,
              transform: [{translateY: popUpAnim}],
            },
          ]}>
          <View
            style={[
              styles.titleContainer,
              {paddingHorizontal: (dimensions.width * 10) / 100},
            ]}>
            <Text style={styles.title}>Player</Text>
            <Text style={styles.title}>
              That <Text style={{color: '#ea2379'}}>Plays</Text>
            </Text>
            <Text style={styles.title}>All</Text>
            <Text style={{color: 'gray', fontFamily: 'AirbnbCereal-light'}}>
              Ultimate solution to your media capabilites
            </Text>
            <TouchableOpacity style={styles.btn}>
              <Icon name="arrow-top-right" size={46} color="#fff" />
            </TouchableOpacity>
          </View>
        </Animated.View>
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
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    backgroundColor: 'black',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    color: 'white',
    fontSize: 48,
    fontFamily: 'AirbnbCereal-Bold',
  },
  btn: {
    backgroundColor: '#ea2379',
    height: 50,
    marginTop: 20,
    borderRadius: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
